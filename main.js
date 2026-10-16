/**
 * Dakshesh Das — Portfolio Interactive Systems
 * Handcrafted vanilla JavaScript • Termux Terminal Emulator • Theme Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTerminal();
  initProjectFilters();
  initSmoothScroll();
});

/* ==========================================================================
   1. Theme Engine (Obsidian Dark / Light)
   ========================================================================== */

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('dakshesh_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('dakshesh_theme', next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'dark') {
    icon.innerHTML = '<path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" fill="currentColor"/>';
  } else {
    icon.innerHTML = '<path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm10-9a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zM5 12a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zm14.071-7.071a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM6.343 17.657a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zm12.728 0a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 0 1 1.414-1.414l1.414 1.414a1 1 0 0 1 0 1.414zM6.343 4.929a1 1 0 0 1-1.414 0L3.515 3.515a1 1 0 1 1 1.414-1.414l1.414 1.414a1 1 0 0 1 0 1.414z" fill="currentColor"/>';
  }
}

/* ==========================================================================
   2. Interactive Termux Terminal Simulator
   ========================================================================== */

const TERMINAL_COMMANDS = {
  help: `Available commands:
  <span class="term-accent">cat about.txt</span>    - Read my background, bio & workflow
  <span class="term-accent">python3 solver.py</span> - Run quantum tunneling Hamiltonian simulation
  <span class="term-accent">cat creed.txt</span>    - The 4 core tenets of my personal manifesto
  <span class="term-accent">projects</span>         - List active open-source projects & demos
  <span class="term-accent">whoami</span>           - Active user profile
  <span class="term-accent">uname -a</span>         - Current mobile environment
  <span class="term-accent">clear</span>            - Clear screen`,

  'cat about.txt': `=== DAKSHESH DAS (16yo Builder & Student) ===
• Age: 16 (11th Grade)
• Hardware: Android Smartphone + Termux (aarch64)
• Workflow: Pure Linux chroots, Neovim, Python, clang++, Git
• Approach: Warrior-Philosopher archetype.
• Mindset: I overcome analytical overthinking through physical discipline (heavy lifting) and shipping working code. Master hard math and algorithms first.`,

  'python3 solver.py': `<span class="term-green">[+] Initializing Crank-Nicolson 1D TDSE Hamiltonian...</span>
[+] Spatial grid: Nx = 1024 points, dx = 0.05 a.u., dt = 0.002
[+] Potential: Non-standard asymmetric curved barrier
[+] Barrier curvature parameter: κ = 0.428 a.u.⁻¹
[+] Solving tridiagonal system via Thomas algorithm...
[+] Transmission Coefficient T: <span class="term-cyan">2.348e-04</span> (Standard rectangular barrier: 1.021e-10)
<span class="term-accent">[✓] Curvature enhancement factor: 2.30 × 10⁶ ×</span>
[✓] Simulation converged in 12.8ms. Research paper: APS format.`,

  'cat creed.txt': `=== PERSONAL RULES ===
1. <span class="term-accent">Work with what you have:</span> You don't need an expensive laptop to learn math, physics, or programming.
2. <span class="term-accent">Action over overthinking:</span> When you get stuck in your head, either write the code or go lift.
3. <span class="term-accent">Learn the fundamentals:</span> Understanding differential equations and how systems work under the hood never goes out of style.
4. <span class="term-accent">Ship real things:</span> A working script beats a half-finished idea every time.`,

  projects: `ACTIVE PROJECTS ON GITHUB & LIVE DEMOS:
1. <span class="term-accent">Quantum Tunneling Research</span> -> https://dakshesh123-rgb.github.io/qm-project-website/
2. <span class="term-accent">AI JEE Socratic Mentor</span>     -> https://ai-jee-mentor-bxa.caffeine.xyz/
3. <span class="term-accent">Pythonix Cloud Sandbox</span>     -> https://github.com/dakshesh123-rgb/pythonix
4. <span class="term-accent">Aether P2P Encrypted Mesh</span>  -> https://github.com/dakshesh123-rgb/aether-p2p
5. <span class="term-accent">Nocturne Circadian Focus</span>   -> Handcrafted mobile blackout utility`,

  whoami: `dakshesh (16yo student & researcher @ Termux Android)`,

  'uname -a': `Linux termux-mobile 6.1.75-android14-aarch64 #1 SMP PREEMPT GNU/Linux`
};

function initTerminal() {
  const terminalOutput = document.getElementById('term-output');
  const terminalInput = document.getElementById('term-input');
  const chipButtons = document.querySelectorAll('.chip-btn');

  if (!terminalOutput || !terminalInput) return;

  function runCommand(cmdText) {
    const cleanCmd = cmdText.trim();
    if (!cleanCmd) return;

    if (cleanCmd.toLowerCase() === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    }

    // Add user command line
    const cmdLine = document.createElement('div');
    cmdLine.className = 'term-line';
    cmdLine.innerHTML = `<span class="term-prompt">dakshesh@termux:~$</span> <span class="term-cmd">${escapeHtml(cleanCmd)}</span>`;
    terminalOutput.appendChild(cmdLine);

    // Look up command
    const response = TERMINAL_COMMANDS[cleanCmd.toLowerCase()] || 
      `bash: command not found: ${escapeHtml(cleanCmd)}. Type <span class="term-accent">help</span> for available commands.`;

    const respLine = document.createElement('div');
    respLine.className = 'term-response';
    respLine.innerHTML = response;
    terminalOutput.appendChild(respLine);

    // Auto-scroll to bottom
    const body = terminalOutput.parentElement;
    body.scrollTop = body.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      runCommand(terminalInput.value);
      terminalInput.value = '';
    }
  });

  chipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) {
        runCommand(cmd);
      }
    });
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ==========================================================================
   3. Project Category Filter
   ========================================================================== */

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   4. Smooth Scrolling for Internal Links
   ========================================================================== */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
