/**
 * DAKSHESH DAS // APPLE PRO INTERACTIVE RUNTIME
 * Apple-style radial cursor sheen, interactive quantum wavefield canvas, and systems filtering
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroWavefieldCanvas();
  initAppleBentoSheen();
  initSystemsFilter();
});

/* =========================================================================
   1. APPLE FLASHLIGHT / SHEEN INTERACTION
   ========================================================================= */
function initAppleBentoSheen() {
  const cards = document.querySelectorAll('.bento-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* =========================================================================
   2. HERO INTERACTIVE QUANTUM WAVEFIELD CANVAS
   ========================================================================= */
function initHeroWavefieldCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
  let time = 0;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.targetX = e.clientX - rect.left;
    mouse.targetY = e.clientY - rect.top;
  });

  const lines = 18;
  const segments = 60;

  function draw() {
    ctx.clearRect(0, 0, width, height);
    time += 0.015;

    // Smooth mouse lerp
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    ctx.lineWidth = 1;

    for (let i = 0; i < lines; i++) {
      ctx.beginPath();
      const baseAlpha = 0.06 + (i / lines) * 0.12;
      ctx.strokeStyle = `rgba(0, 245, 212, ${baseAlpha})`;

      const yBase = height * 0.35 + (i * height * 0.3) / lines;

      for (let j = 0; j <= segments; j++) {
        const x = (j / segments) * width;

        // Wave harmonics (Schrödinger de Broglie wavepacket superposition)
        const wave1 = Math.sin(j * 0.18 + time * 2.0 + i * 0.2) * 28;
        const wave2 = Math.cos(j * 0.08 - time * 1.2 + i * 0.1) * 18;

        // Subtle mouse attraction/repulsion
        const dx = x - mouse.x;
        const dy = yBase - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseEffect = Math.exp(-dist / 220) * 45;

        const y = yBase + wave1 + wave2 - mouseEffect;

        if (j === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* =========================================================================
   3. SYSTEMS DIRECTORY FILTERING
   ========================================================================= */
function initSystemsFilter() {
  const pills = document.querySelectorAll('.filter-pill');
  const rows = document.querySelectorAll('.table-row');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      rows.forEach(row => {
        const category = row.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          row.style.display = 'grid';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
}
