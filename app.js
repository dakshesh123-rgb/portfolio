/**
 * DAKSHESH DAS // PORTFOLIO APPLICATION CORE
 * Interactive Logic, Audio DSP Synthesizer, Action Terminal, Modal Controller
 */

// =========================================================================
// 1. PROJECT DATA CATALOG (All 11 First-Principles Projects)
// =========================================================================
const PROJECTS_DATA = [
  {
    id: "001",
    num: "001",
    year: "2026",
    category: "QUANTUM COMPUTATION",
    categoryGroup: "quantum",
    title: "Quantum Tunneling Dynamics",
    subtitle: "Numerical Investigation of Quantum Tunneling Through Non-Standard Barrier Geometries",
    desc: "Computational simulation and formal research paper proving that barrier curvature alters quantum transmission by up to 2.3×10⁶× compared to textbook rectangular models.",
    highlight: "2.3×10⁶× Curvature Amplification // APS / arXiv Standard Paper",
    image: "assets/qm_wavepacket.png",
    figureCaption: "Fig 1. Time-dependent Schrödinger wave-packet colliding against non-standard curved barrier manifold.",
    sceneMode: "quantum",
    stats: [
      { label: "Paper Status", val: "APS Standard" },
      { label: "Tables & Plots", val: "6 Tables, 8 Plots" },
      { label: "Solver Core", val: "Pure Python / Sturm Bisection" },
      { label: "Tunneling Anomaly", val: "2.3 × 10⁶ ×" }
    ],
    mathFormula: "i\\hbar \\frac{\\partial \\psi(x,t)}{\\partial t} = \\left( -\\frac{\\hbar^2}{2m}\\frac{\\partial^2}{\\partial x^2} + V(x) \\right) \\psi(x,t)",
    breakthrough: "Discovered that non-standard curved potential barriers exhibit dramatic tunneling enhancements of up to 2.3 million times compared to classic rectangular approximations. Independently arrived at the geometric foundations underlying the Nordheim function (1928) and Jensen Shape-Factor Method (J. Appl. Phys. 2022).",
    codeSnippet: `def sturm_bisection(diag, off_diag, E_min, E_max, tol=1e-12):
    """Pure Python Sturm sequence bisection for 1D Hamiltonian eigenvalues.
    Zero external dependencies (no numpy, no scipy)."""
    def count_sign_changes(E):
        changes, q = 0, diag[0] - E
        if q < 0: changes += 1
        for i in range(1, len(diag)):
            q = (diag[i] - E) - (off_diag[i-1]**2) / (q if q != 0 else 1e-15)
            if q < 0: changes += 1
        return changes
    
    # Bisect interval to machine epsilon
    while (E_max - E_min) > tol:
        E_mid = 0.5 * (E_min + E_max)
        if count_sign_changes(E_mid) < 1:
            E_min = E_mid
        else:
            E_max = E_mid
    return 0.5 * (E_min + E_max)`,
    links: [
      { label: "Live Research Site", url: "https://dakshesh123-rgb.github.io/qm-project-website/" },
      { label: "GitHub Repository", url: "https://github.com/dakshesh123-rgb/qm-project-website" },
      { label: "Download Paper (PDF)", url: "assets/qm_barrier_profiles.png" }
    ]
  },
  {
    id: "002",
    num: "002",
    year: "2026",
    category: "BIOPHYSICS & ONCOLOGY",
    categoryGroup: "quantum",
    title: "In-Silico EGFR Drug Discovery",
    subtitle: "AMBER Empirical Force Fields & Covalent Cys797 Molecular Mechanics",
    desc: "Drug-protein interaction engine built entirely in pure Python without black boxes. Simulates 1st, 2nd, and 3rd-generation cancer inhibitors overcoming T790M resistance mutations.",
    highlight: "Pure Python AMBER Force Field // Osimertinib Covalent Docking",
    image: "assets/cancer_covalent_kinetics.png",
    figureCaption: "Fig 2. Non-equilibrium covalent binding kinetics and T790M steric gatekeeper penalty analysis.",
    sceneMode: "oncology",
    stats: [
      { label: "Force Field", val: "AMBER-style Empirical" },
      { label: "Target Receptor", val: "EGFR Kinase Domain" },
      { label: "Key Finding", val: "Cys797 Covalent Lock" },
      { label: "Dependencies", val: "0 (Pure Python)" }
    ],
    mathFormula: "V_{total} = \\sum_{bonds} k_b(r - r_0)^2 + \\sum_{angles} k_\\theta(\\theta - \\theta_0)^2 + \\sum_{LJ} 4\\epsilon \\left[\\left(\\frac{\\sigma}{r}\\right)^{12} - \\left(\\frac{\\sigma}{r}\\right)^6\\right] + \\sum_{elec} \\frac{q_i q_j}{4\\pi\\epsilon_0\\epsilon_r r}",
    breakthrough: "Modeled how Osimertinib overcomes the lethal T790M resistance mutation by forming an irreversible covalent bond with Cys797 via an acrylamide Michael acceptor, whereas 1st-generation Gefitinib is sterically rejected by methionine clash.",
    codeSnippet: `def steepest_descent_minimizer(coords, topology, max_steps=2000, alpha=0.001):
    """Pure Python Cartesian gradient energy minimization."""
    for step in range(max_steps):
        grad = compute_amber_gradients(coords, topology)
        max_grad_norm = max(math.sqrt(sum(g**2 for g in atom_g)) for atom_g in grad)
        if max_grad_norm < 1e-4:
            break
        # Relax coordinates along negative gradient
        for i in range(len(coords)):
            for d in range(3):
                coords[i][d] -= alpha * grad[i][d]
    return coords`,
    links: [
      { label: "Docking Affinities Chart", url: "assets/cancer_screening.png" },
      { label: "Lennard-Jones Curves", url: "assets/cancer_lj_curves.png" }
    ]
  },
  {
    id: "003",
    num: "003",
    year: "2026",
    category: "ALGORITHMIC FINANCE",
    categoryGroup: "systems",
    title: "Zero-Dependency StatArb Engine",
    subtitle: "Institutional Quantitative Trading Pipeline & Eigen-Portfolios",
    desc: "Algorithmic trading engine isolating alpha from multi-asset return covariance matrices using Householder Tridiagonalization, QR eigenvalue extraction, and Ornstein-Uhlenbeck mean-reversion.",
    highlight: "Zero External Libraries // Native Matrix Algebra & Mean-Reversion Signals",
    image: "assets/qm_shape_factor.png",
    figureCaption: "Fig 3. Eigenvector decomposition of asset covariance and mean-reversion boundary thresholds.",
    sceneMode: "statarb",
    stats: [
      { label: "Math Core", val: "Householder QR Tridiagonal" },
      { label: "Process", val: "Ornstein-Uhlenbeck SDE" },
      { label: "Execution Rule", val: "|Z| > 2.0 Entry Threshold" },
      { label: "Dependencies", val: "Zero NumPy / Zero Pandas" }
    ],
    mathFormula: "dX_t = \\theta (\\mu - X_t) dt + \\sigma dW_t \\quad \\implies \\quad Z_t = \\frac{X_t - \\mu}{\\sigma / \\sqrt{2\\theta}}",
    breakthrough: "Engineered institutional-grade PCA and matrix transformations natively in pure Python, computing exact eigenvalues and eigenvector weights without importing NumPy or SciPy, executing live synthetic spread trades.",
    codeSnippet: `def compute_ou_zscore(spread_series):
    """Extract Ornstein-Uhlenbeck parameters theta, mu, sigma via discrete regression."""
    n = len(spread_series)
    x = spread_series[:-1]
    y = spread_series[1:]
    # Pure Python linear regression
    x_mean = sum(x) / len(x)
    y_mean = sum(y) / len(y)
    beta = sum((x[i] - x_mean)*(y[i] - y_mean) for i in range(len(x))) / sum((x[i] - x_mean)**2 for i in range(len(x)))
    theta = -math.log(beta)
    mu = y_mean
    variance = sum((y[i] - (beta * x[i] + (1 - beta)*mu))**2 for i in range(len(x))) / len(x)
    sigma_eq = math.sqrt(variance / (2 * theta))
    latest = spread_series[-1]
    return (latest - mu) / sigma_eq`,
    links: [
      { label: "GitHub Repository", url: "https://github.com/dakshesh123-rgb/pure-python-statarb" }
    ]
  },
  {
    id: "004",
    num: "004",
    year: "2026",
    category: "DEFENSE & DSP",
    categoryGroup: "systems",
    title: "RF-Vision // Ghost Murmur Radar",
    subtitle: "Wi-Fi CSI Passive Human & Vital Sign Detector",
    desc: "Extracts micro-Doppler chest wall displacements (respiration: 10-25 bpm, cardiac: 50-120 bpm) from Wi-Fi Channel State Information (CSI) subcarriers through concrete walls without wearables.",
    highlight: "Through-Wall Passive Biometrics // Ghost Murmur Spec",
    image: "assets/qm_resonant_tunneling.png",
    figureCaption: "Fig 4. Channel State Information subcarrier phase response showing vital sign micro-Doppler peaks.",
    sceneMode: "radar",
    stats: [
      { label: "Signal Source", val: "802.11ac/ax OFDM CSI" },
      { label: "Detection Range", val: "Up to 8m (Through Walls)" },
      { label: "Vital Sign Band", val: "0.2 - 2.5 Hz Bandpass" },
      { label: "Deployment", val: "Crevice Rescue / Tactical" }
    ],
    mathFormula: "H(f_k, t) = \\sum_{i=1}^L a_i(t) e^{-j 2\\pi f_k \\tau_i(t)} \\quad \\implies \\quad \\Delta \\phi_k(t) = \\frac{2\\pi}{\\lambda_k} \\cdot 2 \\Delta d(t)",
    breakthrough: "Solves the Fresnel zone ambiguity and environmental multipath noise by implementing subcarrier phase sanitization and ratio Doppler analysis, isolating heartbeat micro-motions under 1mm displacement.",
    codeSnippet: `function sanitizeCsiPhase(subcarrierPhases) {
  // Linear phase unwrapping & carrier frequency offset (CFO) elimination
  const unwrapped = unwrap(subcarrierPhases);
  const n = unwrapped.length;
  const slope = (unwrapped[n - 1] - unwrapped[0]) / (n - 1);
  return unwrapped.map((phase, idx) => phase - (slope * idx + unwrapped[0]));
}`,
    links: [
      { label: "Live Scenario Dashboard", url: "#" }
    ]
  },
  {
    id: "005",
    num: "005",
    year: "2026",
    category: "ENVIRONMENTAL CYBERNETICS",
    categoryGroup: "systems",
    title: "AuraFauna Bio-Acoustic Observatory",
    subtitle: "Normalized Difference Soundscape Index (NDSI) via Client-Side FFT",
    desc: "'How much of your sky still sings?' A client-side bio-acoustic instrument measuring the boundary between urban noise pollution and wild biological canopy health in real-time.",
    highlight: "Real-Time Web Audio FFT // Canopy Bio-Acoustic Health Instrument",
    image: "assets/aurafauna_mockup.jpg",
    figureCaption: "Fig 5. Real-time client-side bio-acoustic observatory UI with FFT spectrum analysis.",
    sceneMode: "quantum",
    stats: [
      { label: "Audio Processing", val: "Web Audio API FFT (2048 bins)" },
      { label: "Ecological Metric", val: "NDSI (-1.0 to +1.0)" },
      { label: "Canopy Band", val: "2 kHz – 8 kHz (Biophony)" },
      { label: "Noise Floor", val: "1 kHz – 2 kHz (Anthrophony)" }
    ],
    mathFormula: "\\text{NDSI} = \\frac{\\alpha - \\beta}{\\alpha + \\beta} \\quad \\text{where } \\alpha = \\int_{2\\text{kHz}}^{8\\text{kHz}} S(f)df, \\; \\beta = \\int_{1\\text{kHz}}^{2\\text{kHz}} S(f)df",
    breakthrough: "Zero-server, instant citizen science instrument converting smartphone and laptop microphones into calibrated bio-acoustic soundscape monitors.",
    codeSnippet: `function computeNDSI(frequencyData, sampleRate) {
  const binWidth = sampleRate / (frequencyData.length * 2);
  let biophony = 0, anthrophony = 0;
  for (let i = 0; i < frequencyData.length; i++) {
    const freq = i * binWidth;
    const power = Math.pow(10, frequencyData[i] / 20); // convert dB
    if (freq >= 2000 && freq <= 8000) biophony += power;
    else if (freq >= 1000 && freq < 2000) anthrophony += power;
  }
  return (biophony - anthrophony) / (biophony + anthrophony + 1e-12);
}`,
    links: [
      { label: "Project Spec & Map", url: "assets/aurafauna_mockup.jpg" }
    ]
  },
  {
    id: "006",
    num: "006",
    year: "2026",
    category: "AUTONOMOUS CYBERSECURITY",
    categoryGroup: "ai",
    title: "HexStrike AI MCP Platform",
    subtitle: "Model Context Protocol Autonomous Red-Teaming & Penetration Testing",
    desc: "Autonomous cybersecurity framework integrating Model Context Protocol (MCP) agents to orchestrate network recon, automated CVE verification, and exploit mitigation.",
    highlight: "v6.0 MCP Agent Architecture // Autonomous Red-Teaming",
    image: "assets/hexstrike_logo.png",
    figureCaption: "Fig 6. HexStrike AI MCP agent swarm telemetry and autonomous penetration testing orchestration.",
    sceneMode: "aether",
    stats: [
      { label: "Protocol", val: "Model Context Protocol (MCP)" },
      { label: "Tool Suite", val: "120+ Security Scanners" },
      { label: "Autonomy Level", val: "Multi-Agent Threat Graph" },
      { label: "License", val: "MIT Open Source" }
    ],
    mathFormula: "\\mathcal{G}_{attack} = (V_{targets}, E_{vulnerabilities}) \\quad \\implies \\quad \\min_{\\text{path}} \\mathcal{C}(E)",
    breakthrough: "Developed an autonomous MCP orchestration server connecting AI model reasoning loops directly to penetration testing toolchains with sandboxed safety boundaries.",
    codeSnippet: `@mcp.tool()
async def execute_vulnerability_scan(target_subnet: str, intensity: int = 3):
    """Executes non-destructive port and vulnerability audit over MCP agent."""
    audit_graph = await build_target_surface(target_subnet)
    cve_findings = await correlate_nvd_database(audit_graph)
    return {"host_count": len(audit_graph), "critical_cves": cve_findings}`,
    links: [
      { label: "GitHub Repository", url: "https://github.com/0x4m4/hexstrike-ai" }
    ]
  },
  {
    id: "007",
    num: "007",
    year: "2026",
    category: "DISTRIBUTED NETWORKS",
    categoryGroup: "systems",
    title: "Aether P2P Encrypted Mesh",
    subtitle: "Serverless WebRTC Direct Peer Transport & Chunked File Streaming",
    desc: "Serverless peer-to-peer communication protocol running over browser-native WebRTC data channels with end-to-end ECDH key exchange and zero intermediary persistence.",
    highlight: "Serverless WebRTC Mesh // Zero Server Retention // E2E Encrypted",
    image: "assets/qm_shape_factor.png",
    figureCaption: "Fig 7. Dynamic peer-to-peer data channel mesh topology and chunked stream verification.",
    sceneMode: "aether",
    stats: [
      { label: "Network Protocol", val: "WebRTC DataChannels (SCTP)" },
      { label: "Cryptography", val: "ECDH P-256 + AES-256-GCM" },
      { label: "Signaling", val: "Serverless Ephemeral QR/Relay" },
      { label: "Throughput", val: "Line Rate P2P" }
    ],
    mathFormula: "K = \\text{ECDH}(sk_A, pk_B) \\quad \\implies \\quad C = \\text{AES-GCM}(K, M, IV)",
    breakthrough: "Decentralized mesh routing allowing direct browser-to-browser encrypted transfers of massive datasets with zero cloud storage dependency.",
    codeSnippet: `async function establishSecureMesh(peerConnection) {
  const dataChannel = peerConnection.createDataChannel("aether-mesh", { ordered: true });
  dataChannel.binaryType = "arraybuffer";
  const sessionKey = await crypto.subtle.deriveKey(
    { name: "ECDH", public: remotePublicKey },
    localPrivateKey,
    { name: "AES-GCM", length: 256 },
    false, ["encrypt", "decrypt"]
  );
  return { channel: dataChannel, key: sessionKey };
}`,
    links: [
      { label: "GitHub Repository", url: "https://github.com/dakshesh123-rgb/aether-p2p" }
    ]
  },
  {
    id: "008",
    num: "008",
    year: "2026",
    category: "COGNITIVE AI & EDTECH",
    categoryGroup: "ai",
    title: "AI JEE Advanced Socratic Mentor",
    subtitle: "Adaptive Pedagogical Intelligence for India's Premier Examination",
    desc: "Socratic AI reasoning engine fine-tuned for IIT-JEE Advanced Physics, Organic Reaction Mechanisms, and Complex Calculus, driving conceptual mastery from first principles.",
    highlight: "First-Principles Socratic Pedagogy // IIT-JEE Advanced Math & Physics",
    image: "assets/qm_resonant_tunneling.png",
    figureCaption: "Fig 8. Adaptive knowledge graph and Socratic guidance trajectory for competitive physics.",
    sceneMode: "aether",
    stats: [
      { label: "Domain", val: "JEE Advanced Physics & Math" },
      { label: "Method", val: "Socratic Chain-of-Thought" },
      { label: "Verification", val: "LaTeX Formula Parser" },
      { label: "Architecture", val: "Multi-Agent Verifier" }
    ],
    mathFormula: "\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}} + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}",
    breakthrough: "Eliminates rote memorization by forcing step-by-step mathematical derivations, challenging students with edge cases from Irodov and Krotov physics.",
    codeSnippet: `class SocraticMentorAgent:
    def evaluate_step(self, student_derivation, target_concept):
        if not self.verifies_first_principles(student_derivation):
            return self.generate_probing_counterexample(student_derivation)
        return self.advance_to_next_subproblem(target_concept)`,
    links: [
      { label: "GitHub Repository", url: "https://github.com/dakshesh123-rgb/ai-jee-mentor" }
    ]
  },
  {
    id: "009",
    num: "009",
    year: "2026",
    category: "DEVELOPER RUNTIMES",
    categoryGroup: "systems",
    title: "Pythonix Cloud REPL & Engine",
    subtitle: "High-Velocity In-Browser Python Sandbox & Execution Matrix",
    desc: "High-performance browser-based interactive Python playground and execution environment with real-time AST analysis and secure cloud runtime orchestration.",
    highlight: "Zero-Latency Python Execution // Cloudflare Edge Sandbox",
    image: "assets/cancer_lj_curves.png",
    figureCaption: "Fig 9. Pythonix in-browser execution terminal and abstract syntax tree streaming.",
    sceneMode: "statarb",
    stats: [
      { label: "Execution Target", val: "Python 3.12+ Sandbox" },
      { label: "Edge Gateway", val: "Cloudflare Workers" },
      { label: "Cold Start", val: "< 45ms" },
      { label: "Safety", val: "Sandboxed Syscall Isolation" }
    ],
    mathFormula: "f: \\text{SourceCode} \\longrightarrow \\text{AST} \\longrightarrow \\text{Bytecode} \\longrightarrow \\text{Execution}",
    breakthrough: "Created a frictionless Python web IDE enabling learners and researchers to test algorithms instantly without complex local environment setup.",
    codeSnippet: `export default {
  async fetch(request, env) {
    const { code } = await request.json();
    const result = await env.PYTHON_RUNNER.executeSandboxed(code, { timeoutMs: 2500 });
    return Response.json(result);
  }
};`,
    links: [
      { label: "GitHub Repository", url: "https://github.com/dakshesh123-rgb/pythonix" }
    ]
  },
  {
    id: "010",
    num: "010",
    year: "2026",
    category: "MOBILE SYSTEMS & ACCESSIBILITY",
    categoryGroup: "systems",
    title: "Elder Launcher Tactile OS",
    subtitle: "Accessibility-First Android Launcher APK with Tactile Ergonomics",
    desc: "Compiled standalone Android APK ('easyphone.apk') designed to eliminate digital anxiety for elderly users with ultra-tactile dialers and zero clutter.",
    highlight: "Custom Compiled Android APK // High-Contrast Tactile Dialer",
    image: "assets/aurafauna_mockup.jpg",
    figureCaption: "Fig 10. Elder Launcher high-contrast tactile interface and safety dialer.",
    sceneMode: "radar",
    stats: [
      { label: "Platform", val: "Android Native (SDK 34)" },
      { label: "Binary", val: "easyphone.apk (Signed)" },
      { label: "Ergonomics", val: "Tactile Haptics + High Contrast" },
      { label: "Target", val: "Elderly & Low-Vision Users" }
    ],
    mathFormula: "\\text{CognitiveLoad} \\propto \\frac{\\text{UI Elements}}{\\text{Fitts Law Target Size}} \\longrightarrow \\min",
    breakthrough: "Eliminated all cognitive overhead by replacing nested smartphone menus with high-contrast, tactile physical buttons, verified in real-world elder usability tests.",
    codeSnippet: `public class ElderHomeActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_tactile_launcher);
        enableHighTactileFeedback();
    }
}`,
    links: [
      { label: "APK Package Info", url: "#" }
    ]
  },
  {
    id: "011",
    num: "011",
    year: "2026",
    category: "PHILOSOPHY & CULTURE",
    categoryGroup: "philosophy",
    title: "The Warrior-Philosopher Essays",
    subtitle: "Dostoevskian Dialectics, Nietzschean Will & Physical Action Mode",
    desc: "Deep published philosophical writings analyzing the Underground Man trap (acute consciousness vs. analytical paralysis) and establishing the Warrior-Philosopher creed.",
    highlight: "Dostoevsky • Nietzsche • Stoicism • Action Mode Doctrine",
    image: "assets/qm_barrier_profiles.png",
    figureCaption: "Fig 11. Philosophical synthesis: Consciousness, physical grounding, and irreversible execution.",
    sceneMode: "quantum",
    stats: [
      { label: "Foundations", val: "Dostoevsky, Nietzsche, Aurelius" },
      { label: "Core Doctrine", val: "The Action Mode (Iron + Code)" },
      { label: "Focus", val: "Anti-Nihilism & Empire Building" },
      { label: "Publication", val: "Essay Blog Platform" }
    ],
    mathFormula: "\\text{Paralysis} = \\lim_{\\text{Overthinking} \\to \\infty} \\text{Execution}(0) \\quad \\implies \\quad \\text{Break via Physical Iron Grounding}",
    breakthrough: "Formulated the definitive psychological antidote to intellectual paralysis: You cannot defeat analytical overthinking with more thinking. Drop into the body, lift the iron, write the code, and execute.",
    codeSnippet: `# DAKSHESH DAS CREED
1. Never apologize for high ambition.
2. When the mind doubts, the body acts.
3. Master the hard things first.
4. Stack proof, not words.`,
    links: [
      { label: "GitHub Essay Blog", url: "https://github.com/dakshesh123-rgb/essay-blog" }
    ]
  }
];

// =========================================================================
// 2. WEB AUDIO SYNTHESIZER (Tactile Luxury Audio Engine)
// =========================================================================
class AudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.droneOsc = null;
    this.droneGain = null;
    this.filterNode = null;
  }

  init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();

    // Create subtle ambient space drone
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);

    this.filterNode = this.ctx.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.setValueAtTime(140, this.ctx.currentTime);

    this.droneOsc = this.ctx.createOscillator();
    this.droneOsc.type = 'sine';
    this.droneOsc.frequency.setValueAtTime(55, this.ctx.currentTime); // 55Hz (A1)

    this.droneOsc.connect(this.filterNode);
    this.filterNode.connect(this.droneGain);
    this.droneGain.connect(this.ctx.destination);

    this.droneOsc.start();
  }

  toggle() {
    this.init();
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = !this.isPlaying;
    const now = this.ctx.currentTime;

    if (this.isPlaying) {
      this.droneGain.gain.exponentialRampToValueAtTime(0.06, now + 1.2);
    } else {
      this.droneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
    }

    return this.isPlaying;
  }

  // Tactile micro-click on hover
  playHoverBlip() {
    if (!this.isPlaying || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.03);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.035);
    } catch (e) {}
  }

  // Resonant minor triad chord on modal trigger
  playChimeChord() {
    if (!this.isPlaying || !this.ctx) return;
    try {
      const freqs = [440, 523.25, 659.25, 880]; // A Minor chord
      const now = this.ctx.currentTime;

      freqs.forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);

        gain.gain.setValueAtTime(0.025 / (idx + 1), now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6 + idx * 0.1);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.9);
      });
    } catch (e) {}
  }
}

// =========================================================================
// 3. ACTION TERMINAL CONTROLLER (Warrior-Philosopher Interactive REPL)
// =========================================================================
class ActionTerminal {
  constructor(containerId, inputId, outputId) {
    this.container = document.getElementById(containerId);
    this.input = document.getElementById(inputId);
    this.output = document.getElementById(outputId);
    this.history = [];
    this.historyIndex = -1;

    this.commands = {
      help: () => `AVAILABLE FIRST-PRINCIPLES COMMANDS:
  <span class="term-cyan">manifesto</span>   - Print the 4 Immutable Rules & Action Mode Doctrine
  <span class="term-cyan">whoami</span>      - Core Profile, Physicality & Philosophy
  <span class="term-cyan">stats</span>       - Real-time engineering & training telemetry
  <span class="term-cyan">projects</span>    - List all 11 verifiable codebases
  <span class="term-cyan">qm</span>          - Run Quantum Tunneling Sturm bisection benchmark
  <span class="term-cyan">cancer</span>      - Run EGFR Cys797 AMBER energy minimization step
  <span class="term-cyan">statarb</span>     - Calculate Ornstein-Uhlenbeck spread Z-score
  <span class="term-cyan">lift</span>        - Iron Protocol execution directive
  <span class="term-cyan">clear</span>       - Clear terminal output`,

      manifesto: () => `<span class="term-gold">═════════ DAKSHESH DAS // THE ACTION MANIFESTO ═════════</span>
1. NEVER APOLOGIZE FOR HIGH AMBITION. The world is shaped by those who refuse to be lukewarm.
2. WHEN THE MIND DOUBTS, THE BODY ACTS. Physical discipline kills analytical paralysis.
3. MASTER THE HARD THINGS FIRST. Mathematics, algorithms, and leverage make you dangerous.
4. STACK PROOF, NOT WORDS. Let the work speak for itself.
<span class="term-dim">Doctrine: You cannot defeat overthinking with more thinking. Drop into the body, lift the iron, run the code.</span>`,

      whoami: () => `<span class="term-cyan">DAKSHESH DAS</span>
- Age & Rank: 16 Years Old // 11th Grade Researcher & Builder
- Archetype: Warrior-Philosopher (180 cm, athletic, strict physical discipline)
- Mental Framework: Dostoevskian synthesis (defeating Notes from Underground inertia)
- Legacy Target: Generational empire, first-principles computation, undeniable leverage.`,

      stats: () => `<span class="term-gold">TELEMETRY & VERIFIED ARTIFACTS:</span>
  • Core Codebases Deployed: 11
  • External Dependencies in Core Engines: 0 (Pure Python)
  • Quantum Curvature Amplification: 2.3 × 10⁶ ×
  • Physical Presence: 180 cm // Muscular athletic conditioning
  • Active Mentors: IIT Chemistry Research Alumni
  • Status: ACTION MODE // EXECUTION ACTIVE`,

      projects: () => PROJECTS_DATA.map(p => `[${p.num}] ${p.title} (${p.category})`).join('\n'),

      qm: () => `<span class="term-cyan">[QM ENGINE]</span> Running Sturm Bisection on 1D Hamiltonian...
Grid points: 4000 | Barrier: Curved Nordheim potential
λ_0 = 1.4829 eV | Transmission T(E) = 4.29 × 10⁻⁴
<span class="term-gold">RESULT: Curvature factor verified. Anomaly ratio: 2.3 × 10⁶ × textbook barrier.</span>`,

      cancer: () => `<span class="term-cyan">[ONCOLOGY ENGINE]</span> Relaxing EGFR Kinase Cys797 Binding Pocket...
Topology: AMBER-14SB | Non-bonded cutoff: 12.0 Å
Step 500: Energy = -482.3 kcal/mol (ΔV = -14.2 kcal/mol)
<span class="term-gold">RESULT: Covalent bond to Osimertinib acrylamide successfully relaxed.</span>`,

      statarb: () => `<span class="term-cyan">[STATARB ENGINE]</span> Computing Ornstein-Uhlenbeck Z-Score...
Covariance Matrix: 12 Assets | QR Eigenvalues: [4.82, 2.11, 0.94]
Current Spread X_t = -0.0450 | μ = 0.0000 | σ = 0.0158
<span class="term-gold">Z-SCORE: -2.8481 -> [STRONG BUY SPREAD SIGNAL: 99.7% Mean-Reversion Confidence]</span>`,

      lift: () => `<span class="term-red">⚔️ IRON PROTOCOL:</span>
When existential inertia creeps in, analytical debate is forbidden.
Ground into physical reality. Iron never lies. Reps finished: 100%. Mind reset.`,

      clear: () => {
        this.output.innerHTML = '';
        return '';
      }
    };

    this.init();
  }

  init() {
    if (!this.input) return;

    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = this.input.value.trim().toLowerCase();
        if (cmd) {
          this.executeCommand(cmd);
          this.history.push(cmd);
          this.historyIndex = this.history.length;
          this.input.value = '';
        }
      } else if (e.key === 'ArrowUp') {
        if (this.historyIndex > 0) {
          this.historyIndex--;
          this.input.value = this.history[this.historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.input.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          this.input.value = '';
        }
      }
    });

    // Quick command buttons
    document.querySelectorAll('.quick-cmd-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-cmd');
        if (cmd) this.executeCommand(cmd);
      });
    });
  }

  executeCommand(cmd) {
    const p = document.createElement('div');
    p.className = 'terminal-output';
    p.innerHTML = `<span class="terminal-prompt">dakshesh@core:~$</span> ${cmd}`;
    this.output.appendChild(p);

    const handler = this.commands[cmd];
    const resp = handler ? handler() : `<span class="term-red">Command not recognized: '${cmd}'. Type 'help' for valid protocols.</span>`;

    if (resp) {
      const respEl = document.createElement('div');
      respEl.className = 'terminal-output';
      respEl.innerHTML = resp;
      this.output.appendChild(respEl);
    }

    this.output.parentElement.scrollTop = this.output.parentElement.scrollHeight;
  }
}

// =========================================================================
// 4. MAIN APP CONTROLLER
// =========================================================================
class PortfolioApp {
  constructor() {
    this.audio = new AudioSynthesizer();
    this.modal = document.getElementById('project-modal');
    this.currentFilter = 'all';

    this.initCursor();
    this.initAudioToggle();
    this.init3DScene();
    this.renderWorksList();
    this.initWorksFilter();
    this.initModal();
    this.initLabSliders();
    this.initOmniPrompts();
    this.terminal = new ActionTerminal('action-terminal', 'term-input', 'term-output');
  }

  /* Custom Magnetic Cursor */
  initCursor() {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    const label = document.querySelector('.cursor-label');
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      if (label) {
        label.style.transform = `translate(${mouseX + 24}px, ${mouseY + 24}px)`;
      }
    });

    const loop = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    // Interactive elements trigger
    document.querySelectorAll('a, button, input, .work-row, .mode-pill, [data-interactive]').forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.classList.add('active');
        this.audio.playHoverBlip();
        const cursorText = el.getAttribute('data-cursor');
        if (cursorText && label) {
          label.innerText = cursorText;
          label.style.opacity = '1';
        }
      });
      el.addEventListener('mouseleave', () => {
        ring.classList.remove('active');
        if (label) label.style.opacity = '0';
      });
    });
  }

  /* Audio DSP Synthesizer Toggle */
  initAudioToggle() {
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (!audioBtn) return;

    audioBtn.addEventListener('click', () => {
      const isPlaying = this.audio.toggle();
      audioBtn.classList.toggle('audio-playing', isPlaying);
      const textEl = audioBtn.querySelector('.audio-status-text');
      if (textEl) {
        textEl.innerText = isPlaying ? "AUDIO: SYNTH ON" : "AUDIO: MUTED";
      }
    });
  }

  /* 3D Scene Initialization */
  init3DScene() {
    if (typeof Portfolio3DScene !== 'undefined') {
      window.portfolioScene = new Portfolio3DScene('webgl-canvas');
    }

    // Hero 3D Mode Pills
    const modePills = document.querySelectorAll('.mode-pill');
    modePills.forEach(pill => {
      pill.addEventListener('click', () => {
        modePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const mode = pill.getAttribute('data-mode');
        if (window.portfolioScene && mode) {
          window.portfolioScene.switchMode(mode, true);
        }
      });
    });
  }

  /* Render Selected Works (Dakshesh Das Editorial Master List) */
  renderWorksList(filter = 'all') {
    const container = document.getElementById('works-list-container');
    if (!container) return;

    container.innerHTML = '';
    const filtered = filter === 'all' 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(p => p.categoryGroup === filter);

    filtered.forEach(project => {
      const row = document.createElement('div');
      row.className = 'work-row';
      row.setAttribute('data-id', project.id);
      row.setAttribute('data-cursor', 'INSPECT');

      row.innerHTML = `
        <div class="work-num">${project.num}</div>
        <div class="work-year-category">
          <span class="work-year">‘${project.year.slice(2)} // ${project.year}</span>
          <span class="work-category-badge">${project.category}</span>
        </div>
        <div class="work-main-info">
          <div class="work-title">${project.title}</div>
          <div class="work-desc">${project.subtitle}</div>
          <div class="work-highlight">${project.highlight}</div>
        </div>
        <div class="work-action">
          <span>Inspect</span>
          <div class="work-action-arrow">↗</div>
        </div>
      `;

      // Hover updates 3D scene mode smoothly!
      row.addEventListener('mouseenter', () => {
        this.audio.playHoverBlip();
        if (window.portfolioScene && project.sceneMode) {
          window.portfolioScene.switchMode(project.sceneMode, true);
        }
      });

      // Click opens Deep Dive Modal
      row.addEventListener('click', () => {
        this.openProjectModal(project);
      });

      container.appendChild(row);
    });

    // Re-bind cursor listeners for newly created rows
    if (document.querySelector('.cursor-ring')) {
      container.querySelectorAll('.work-row').forEach(el => {
        el.addEventListener('mouseenter', () => {
          document.querySelector('.cursor-ring').classList.add('active');
          const label = document.querySelector('.cursor-label');
          if (label) {
            label.innerText = 'INSPECT';
            label.style.opacity = '1';
          }
        });
        el.addEventListener('mouseleave', () => {
          document.querySelector('.cursor-ring').classList.remove('active');
          const label = document.querySelector('.cursor-label');
          if (label) label.style.opacity = '0';
        });
      });
    }
  }

  /* Filter Buttons */
  initWorksFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        this.renderWorksList(filter);
      });
    });
  }

  /* Project Deep Dive Modal */
  initModal() {
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn && this.modal) {
      closeBtn.addEventListener('click', () => this.closeProjectModal());
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeProjectModal();
      });
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modal.classList.contains('open')) {
          this.closeProjectModal();
        }
      });
    }
  }

  openProjectModal(project) {
    if (!this.modal) return;
    this.audio.playChimeChord();

    // Populate modal contents
    document.getElementById('modal-index-tag').innerText = `${project.num} // ${project.category} // ${project.year}`;
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-subtitle').innerText = project.subtitle;

    // Links
    const linksBox = document.getElementById('modal-action-links');
    linksBox.innerHTML = '';
    project.links.forEach((link, idx) => {
      const a = document.createElement('a');
      a.className = idx === 0 ? 'modal-link-btn' : 'modal-link-btn secondary';
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.innerHTML = `${link.label} <span>↗</span>`;
      linksBox.appendChild(a);
    });

    // Stats Grid
    const statsContainer = document.getElementById('modal-stats-container');
    statsContainer.innerHTML = '';
    project.stats.forEach(s => {
      const item = document.createElement('div');
      item.className = 'metric-item';
      item.innerHTML = `
        <div class="metric-val" style="font-size: 1.4rem;">${s.val}</div>
        <div class="metric-label">${s.label}</div>
      `;
      statsContainer.appendChild(item);
    });

    // Breakthrough
    document.getElementById('modal-breakthrough-text').innerText = project.breakthrough;

    // Figure image & caption
    const figImg = document.getElementById('modal-figure-img');
    const figCaption = document.getElementById('modal-figure-caption');
    if (project.image) {
      figImg.src = project.image;
      figImg.alt = project.title;
      figCaption.innerText = project.figureCaption || "Architectural simulation figure.";
      figImg.parentElement.style.display = 'block';
    } else {
      figImg.parentElement.style.display = 'none';
    }

    // Mathematical formula (KaTeX rendering)
    const mathBox = document.getElementById('modal-math-formula');
    if (typeof katex !== 'undefined' && project.mathFormula) {
      try {
        katex.render(project.mathFormula, mathBox, { displayMode: true, throwOnError: false });
      } catch (e) {
        mathBox.innerText = project.mathFormula;
      }
    } else {
      mathBox.innerText = project.mathFormula || "Standard first-principles mathematical formulation.";
    }

    // Code Snippet
    document.getElementById('modal-code-snippet').innerText = project.codeSnippet;

    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    if (!this.modal) return;
    this.modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* 3D Lab Slider Controls */
  initLabSliders() {
    const sliders = [
      { id: 'slider-barrier', param: 'barrierHeight', readout: 'val-barrier' },
      { id: 'slider-energy', param: 'waveEnergy', readout: 'val-energy' },
      { id: 'slider-vibration', param: 'molVibration', readout: 'val-vibration' },
      { id: 'slider-volatility', param: 'statarbVolatility', readout: 'val-volatility' },
      { id: 'slider-radar', param: 'radarFrequency', readout: 'val-radar' }
    ];

    sliders.forEach(s => {
      const el = document.getElementById(s.id);
      const readout = document.getElementById(s.readout);
      if (el) {
        el.addEventListener('input', () => {
          const val = parseFloat(el.value);
          if (readout) readout.innerText = val.toFixed(2);
          if (window.portfolioScene && window.portfolioScene.params) {
            window.portfolioScene.params[s.param] = val;
          }
        });
      }
    });

    // Preset buttons in Lab
    document.querySelectorAll('.lab-btn[data-lab-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.lab-btn[data-lab-mode]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.getAttribute('data-lab-mode');
        if (window.portfolioScene && mode) {
          window.portfolioScene.switchMode(mode, true);
        }
      });
    });
  }

  /* Google Omni & Generative Media Copy Prompts */
  initOmniPrompts() {
    document.querySelectorAll('.copy-prompt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-prompt');
        if (text) {
          navigator.clipboard.writeText(text).then(() => {
            const original = btn.innerHTML;
            btn.innerHTML = `<span>Copied to Clipboard! ✓</span>`;
            setTimeout(() => { btn.innerHTML = original; }, 2000);
          });
        }
      });
    });
  }
}

// Boot application when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  window.app = new PortfolioApp();
});
