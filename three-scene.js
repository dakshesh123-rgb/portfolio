/**
 * DAKSHESH DAS // HIGH-PERFORMANCE 3D WEBGL ENGINE
 * Powered by Three.js & Custom Procedural Shaders
 * Modes: 01. Quantum Dynamics | 02. EGFR Oncology | 03. StatArb Surface | 04. RF-Vision Radar | 05. Aether Mesh
 */

class Portfolio3DScene {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.currentMode = 'quantum';
    this.clock = new THREE.Clock();
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.params = {
      barrierHeight: 1.4,
      waveEnergy: 1.2,
      molVibration: 1.0,
      statarbVolatility: 1.5,
      radarFrequency: 1.0
    };

    this.init();
    this.createCosmicParticles();
    this.createQuantumSystem();
    this.createOncologySystem();
    this.createStatArbSystem();
    this.createRadarSystem();
    this.createAetherMeshSystem();

    this.switchMode('quantum', false);
    this.setupEvents();
    this.animate();
  }

  init() {
    // Scene & Renderer
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x050508, 0.035);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.set(0, 2.5, 9);

    // OrbitControls
    if (typeof THREE.OrbitControls !== 'undefined') {
      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.enableZoom = true;
      this.controls.maxDistance = 16;
      this.controls.minDistance = 3;
      this.controls.autoRotate = false;
    }

    // Dynamic Lights
    this.ambientLight = new THREE.AmbientLight(0x101525, 2.5);
    this.scene.add(this.ambientLight);

    this.cyanKeyLight = new THREE.DirectionalLight(0x00f5d4, 3.0);
    this.cyanKeyLight.position.set(5, 8, 4);
    this.scene.add(this.cyanKeyLight);

    this.goldRimLight = new THREE.DirectionalLight(0xffd166, 2.0);
    this.goldRimLight.position.set(-6, -4, -3);
    this.scene.add(this.goldRimLight);

    this.cursorLight = new THREE.PointLight(0x00f5d4, 3.5, 8);
    this.cursorLight.position.set(0, 0, 3);
    this.scene.add(this.cursorLight);
  }

  /* =========================================================================
     0. COSMIC PARTICLES (Background Quantum Foam)
     ========================================================================= */
  createCosmicParticles() {
    const count = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const cCyan = new THREE.Color(0x00f5d4);
    const cPurple = new THREE.Color(0x7928ca);
    const cWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      const rand = Math.random();
      const col = rand > 0.6 ? cCyan : rand > 0.3 ? cPurple : cWhite;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    this.cosmicPoints = new THREE.Points(geometry, material);
    this.scene.add(this.cosmicPoints);
  }

  /* =========================================================================
     1. QUANTUM TUNNELING DYNAMICS SYSTEM
     ========================================================================= */
  createQuantumSystem() {
    this.quantumGroup = new THREE.Group();

    // 1A. Undulating 3D Wavefunction Surface (|psi(x, y)|^2)
    const gridX = 80;
    const gridY = 80;
    this.waveGeom = new THREE.PlaneGeometry(8, 8, gridX, gridY);
    this.waveGeom.rotateX(-Math.PI / 2.2);

    this.waveMat = new THREE.MeshStandardMaterial({
      color: 0x00f5d4,
      emissive: 0x003b30,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });

    this.waveMesh = new THREE.Mesh(this.waveGeom, this.waveMat);
    this.waveMesh.position.y = -0.5;
    this.quantumGroup.add(this.waveMesh);

    // 1B. Potential Energy Barrier Slab (V_0)
    const barrierGeom = new THREE.BoxGeometry(0.5, 2.2, 7.5);
    const barrierMat = new THREE.MeshPhysicalMaterial({
      color: 0xff0055,
      emissive: 0x330011,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.8,
      thickness: 1.2,
      transparent: true,
      opacity: 0.75,
      wireframe: false
    });
    this.barrierMesh = new THREE.Mesh(barrierGeom, barrierMat);
    this.barrierMesh.position.set(0, 0.4, 0);
    this.quantumGroup.add(this.barrierMesh);

    // 1C. Quantum Tunneling Probability Particles (Incident vs Transmitted Jet)
    const jetCount = 450;
    const jetGeom = new THREE.BufferGeometry();
    const jetPos = new Float32Array(jetCount * 3);
    this.jetInitialX = new Float32Array(jetCount);

    for (let i = 0; i < jetCount; i++) {
      const x = (Math.random() - 0.5) * 7.5;
      const y = (Math.random() - 0.5) * 1.5;
      const z = (Math.random() - 0.5) * 5;
      jetPos[i * 3] = x;
      jetPos[i * 3 + 1] = y;
      jetPos[i * 3 + 2] = z;
      this.jetInitialX[i] = x;
    }

    jetGeom.setAttribute('position', new THREE.BufferAttribute(jetPos, 3));
    const jetMat = new THREE.PointsMaterial({
      color: 0x00f5d4,
      size: 0.08,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.9
    });
    this.tunnelingJets = new THREE.Points(jetGeom, jetMat);
    this.quantumGroup.add(this.tunnelingJets);

    this.scene.add(this.quantumGroup);
  }

  /* =========================================================================
     2. COMPUTATIONAL ONCOLOGY & EGFR DOCKING SYSTEM
     ========================================================================= */
  createOncologySystem() {
    this.oncologyGroup = new THREE.Group();

    // Atoms & Bonds
    const atomCount = 38;
    this.atoms = [];
    const sphereGeom = new THREE.SphereGeometry(0.18, 16, 16);

    const colors = [0x00f5d4, 0xff0055, 0x3a86ff, 0xffd166, 0xffffff]; // C, O, N, S, H

    for (let i = 0; i < atomCount; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: colors[i % colors.length],
        roughness: 0.2,
        metalness: 0.6,
        emissive: colors[i % colors.length],
        emissiveIntensity: 0.2
      });

      const sphere = new THREE.Mesh(sphereGeom, mat);
      // Generate helical binding pocket distribution
      const u = (i / atomCount) * Math.PI * 4;
      const r = 1.4 + 0.5 * Math.sin(u * 2);
      sphere.position.set(
        r * Math.cos(u),
        (i - atomCount / 2) * 0.12,
        r * Math.sin(u)
      );
      this.atoms.push(sphere);
      this.oncologyGroup.add(sphere);
    }

    // Covalent Bond Links (Lines)
    const bondMat = new THREE.LineBasicMaterial({
      color: 0x4e5568,
      transparent: true,
      opacity: 0.7
    });

    this.bondLines = [];
    for (let i = 0; i < atomCount - 1; i++) {
      const lineGeom = new THREE.BufferGeometry().setFromPoints([
        this.atoms[i].position,
        this.atoms[i + 1].position
      ]);
      const line = new THREE.Line(lineGeom, bondMat);
      this.bondLines.push({ line, i1: i, i2: i + 1 });
      this.oncologyGroup.add(line);
    }

    // Cys797 Receptor Active Site Covalent Halo
    const haloGeom = new THREE.TorusGeometry(0.5, 0.05, 16, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xffd166,
      wireframe: true
    });
    this.cys797Halo = new THREE.Mesh(haloGeom, haloMat);
    this.cys797Halo.position.set(0, 0, 0);
    this.oncologyGroup.add(this.cys797Halo);

    this.scene.add(this.oncologyGroup);
  }

  /* =========================================================================
     3. INSTITUTIONAL STATARB & VOLATILITY MANIFOLD
     ========================================================================= */
  createStatArbSystem() {
    this.statArbGroup = new THREE.Group();

    // 3D Covariance Volatility Surface
    const size = 6;
    const segs = 40;
    this.statGeom = new THREE.PlaneGeometry(size, size, segs, segs);
    this.statGeom.rotateX(-Math.PI / 2);

    this.statMat = new THREE.MeshStandardMaterial({
      color: 0xffd166,
      emissive: 0x332600,
      roughness: 0.3,
      metalness: 0.9,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });

    this.statMesh = new THREE.Mesh(this.statGeom, this.statMat);
    this.statMesh.position.y = -0.5;
    this.statArbGroup.add(this.statMesh);

    // Eigenvector PCA Principal Axes (3 orthogonal coordinate rays)
    const axesGroup = new THREE.Group();
    const axisMatX = new THREE.LineBasicMaterial({ color: 0x00f5d4, linewidth: 2 });
    const axisMatY = new THREE.LineBasicMaterial({ color: 0xff0055, linewidth: 2 });
    const axisMatZ = new THREE.LineBasicMaterial({ color: 0xffd166, linewidth: 2 });

    const makeLine = (p1, p2, mat) => {
      const g = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      return new THREE.Line(g, mat);
    };

    axesGroup.add(makeLine(new THREE.Vector3(-2.5, 0, 0), new THREE.Vector3(2.5, 0, 0), axisMatX));
    axesGroup.add(makeLine(new THREE.Vector3(0, -2, 0), new THREE.Vector3(0, 2.5, 0), axisMatY));
    axesGroup.add(makeLine(new THREE.Vector3(0, 0, -2.5), new THREE.Vector3(0, 0, 2.5), axisMatZ));
    this.statArbGroup.add(axesGroup);

    // Swarm of Mean-Reverting Spread Assets
    const swarmCount = 350;
    const swarmGeom = new THREE.BufferGeometry();
    const swarmPos = new Float32Array(swarmCount * 3);
    for (let i = 0; i < swarmCount; i++) {
      swarmPos[i * 3] = (Math.random() - 0.5) * 5;
      swarmPos[i * 3 + 1] = (Math.random() - 0.5) * 3;
      swarmPos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    swarmGeom.setAttribute('position', new THREE.BufferAttribute(swarmPos, 3));
    const swarmMat = new THREE.PointsMaterial({
      color: 0xffd166,
      size: 0.07,
      transparent: true,
      opacity: 0.85
    });
    this.statSwarm = new THREE.Points(swarmGeom, swarmMat);
    this.statArbGroup.add(this.statSwarm);

    this.scene.add(this.statArbGroup);
  }

  /* =========================================================================
     4. RF-VISION // GHOST MURMUR CSI RADAR
     ========================================================================= */
  createRadarSystem() {
    this.radarGroup = new THREE.Group();

    // Concentric Doppler Wavefront Rings
    this.radarRings = [];
    for (let i = 0; i < 5; i++) {
      const ringGeom = new THREE.RingGeometry(0.6 * (i + 1), 0.65 * (i + 1), 64);
      ringGeom.rotateX(Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00f5d4,
        transparent: true,
        opacity: 0.4 - i * 0.06,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      this.radarRings.push(ring);
      this.radarGroup.add(ring);
    }

    // Human Vital Signs / Heartbeat Target Point Cloud
    const targetCount = 300;
    const targetGeom = new THREE.BufferGeometry();
    const targetPos = new Float32Array(targetCount * 3);
    for (let i = 0; i < targetCount; i++) {
      // Gaussian distribution around human chest contour
      const u = Math.random() * Math.PI * 2;
      const v = (Math.random() - 0.5) * 2;
      const rad = 0.5 + Math.random() * 0.2;
      targetPos[i * 3] = rad * Math.cos(u);
      targetPos[i * 3 + 1] = v;
      targetPos[i * 3 + 2] = rad * Math.sin(u) * 0.6;
    }
    targetGeom.setAttribute('position', new THREE.BufferAttribute(targetPos, 3));
    const targetMat = new THREE.PointsMaterial({
      color: 0xff0055,
      size: 0.09,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.95
    });
    this.radarTarget = new THREE.Points(targetGeom, targetMat);
    this.radarGroup.add(this.radarTarget);

    this.scene.add(this.radarGroup);
  }

  /* =========================================================================
     5. AETHER P2P & HEXSTRIKE // GEODESIC CYBER MESH
     ========================================================================= */
  createAetherMeshSystem() {
    this.aetherGroup = new THREE.Group();

    // Icosahedron Polyhedral Mesh
    const icoGeom = new THREE.IcosahedronGeometry(2.2, 2);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x3a86ff,
      emissive: 0x0d2060,
      wireframe: true,
      roughness: 0.3,
      metalness: 0.9
    });
    this.icoMesh = new THREE.Mesh(icoGeom, icoMat);
    this.aetherGroup.add(this.icoMesh);

    // Inner glowing core
    const coreGeom = new THREE.SphereGeometry(1.0, 32, 32);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x00f5d4,
      emissive: 0x00443a,
      roughness: 0.2,
      transmission: 0.9,
      thickness: 1.0,
      transparent: true,
      opacity: 0.8
    });
    this.coreMesh = new THREE.Mesh(coreGeom, coreMat);
    this.aetherGroup.add(this.coreMesh);

    // Dynamic data transmission beams
    const beamCount = 18;
    this.beamPositions = [];
    const beamMat = new THREE.LineBasicMaterial({
      color: 0x00f5d4,
      transparent: true,
      opacity: 0.6
    });

    for (let i = 0; i < beamCount; i++) {
      const p1 = new THREE.Vector3().randomDirection().multiplyScalar(2.2);
      const p2 = new THREE.Vector3().randomDirection().multiplyScalar(2.2);
      const g = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      const line = new THREE.Line(g, beamMat);
      this.aetherGroup.add(line);
      this.beamPositions.push({ line, p1, p2 });
    }

    this.scene.add(this.aetherGroup);
  }

  /* =========================================================================
     MODE SWITCHING & TRANSITION (GSAP Smooth Morph)
     ========================================================================= */
  switchMode(mode, animate = true) {
    this.currentMode = mode;
    const duration = animate ? 0.8 : 0;
    const ease = "power3.out";

    const groups = {
      quantum: this.quantumGroup,
      oncology: this.oncologyGroup,
      statarb: this.statArbGroup,
      radar: this.radarGroup,
      aether: this.aetherGroup
    };

    Object.keys(groups).forEach(key => {
      const grp = groups[key];
      if (!grp) return;

      if (key === mode) {
        grp.visible = true;
        if (typeof gsap !== 'undefined' && animate) {
          gsap.to(grp.scale, { x: 1, y: 1, z: 1, duration, ease });
          gsap.to(grp.rotation, { y: 0, duration, ease });
        } else {
          grp.scale.set(1, 1, 1);
        }
      } else {
        if (typeof gsap !== 'undefined' && animate) {
          gsap.to(grp.scale, {
            x: 0.001, y: 0.001, z: 0.001,
            duration: duration * 0.7,
            ease,
            onComplete: () => { grp.visible = false; }
          });
        } else {
          grp.scale.set(0.001, 0.001, 0.001);
          grp.visible = false;
        }
      }
    });

    // Update camera angle tailored for mode
    const cameraTargets = {
      quantum: { x: 0, y: 2.2, z: 8.5 },
      oncology: { x: 0, y: 1.5, z: 7.2 },
      statarb: { x: 0, y: 3.2, z: 8.0 },
      radar: { x: 0, y: 2.8, z: 7.8 },
      aether: { x: 0, y: 1.0, z: 7.5 }
    };

    const targetPos = cameraTargets[mode] || cameraTargets.quantum;
    if (typeof gsap !== 'undefined' && animate) {
      gsap.to(this.camera.position, {
        x: targetPos.x,
        y: targetPos.y,
        z: targetPos.z,
        duration: 1.2,
        ease: "power2.inOut"
      });
    } else {
      this.camera.position.set(targetPos.x, targetPos.y, targetPos.z);
    }
  }

  /* =========================================================================
     INTERACTION & EVENTS
     ========================================================================= */
  setupEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      this.mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;

      // Update cursor point light in 3D scene
      this.cursorLight.position.x = this.mouse.targetX * 4;
      this.cursorLight.position.y = this.mouse.targetY * 3;
    });
  }

  /* =========================================================================
     MAIN ANIMATION LOOP
     ========================================================================= */
  animate() {
    requestAnimationFrame(() => this.animate());

    const t = this.clock.getElapsedTime();

    // Smooth Mouse Parallax
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    if (this.controls) {
      this.controls.update();
    } else {
      this.camera.position.x += (this.mouse.x * 0.8 - this.camera.position.x) * 0.02;
    }

    // 0. Cosmic Dust Drift
    if (this.cosmicPoints) {
      this.cosmicPoints.rotation.y = t * 0.02;
      this.cosmicPoints.rotation.x = t * 0.01;
    }

    // 1. Quantum Dynamics Wave Animation
    if (this.quantumGroup && this.quantumGroup.visible) {
      const pos = this.waveGeom.attributes.position;
      const count = pos.count;
      const k = 2.0 * this.params.waveEnergy;
      const barrierH = this.params.barrierHeight;

      for (let i = 0; i < count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        // Spatial wave packet collision against potential barrier
        let zVal = Math.sin(x * k - t * 4.0) * Math.cos(y * 1.5) * 0.35;
        // Exponential decay attenuation inside and behind barrier
        if (x > -0.3 && x < 0.3) {
          zVal *= Math.exp(-barrierH * 2.0);
        } else if (x >= 0.3) {
          // Transmitted wave: attenuated amplitude
          zVal *= 0.45 / barrierH;
        }
        pos.setZ(i, zVal);
      }
      pos.needsUpdate = true;

      // Update barrier thickness/height from params
      this.barrierMesh.scale.y = this.params.barrierHeight;

      // Incident tunneling particles jet
      const jetPos = this.tunnelingJets.geometry.attributes.position;
      for (let i = 0; i < this.jetInitialX.length; i++) {
        let x = jetPos.getX(i) + 0.04 * this.params.waveEnergy;
        if (x > 3.8) x = -3.8;
        jetPos.setX(i, x);
      }
      jetPos.needsUpdate = true;

      this.quantumGroup.rotation.y = t * 0.04 + this.mouse.x * 0.2;
    }

    // 2. Oncology Molecular Vibration & Cys797 Halo
    if (this.oncologyGroup && this.oncologyGroup.visible) {
      const vib = this.params.molVibration;
      this.atoms.forEach((atom, idx) => {
        atom.position.y += Math.sin(t * 3.0 + idx) * 0.002 * vib;
        atom.position.x += Math.cos(t * 2.5 + idx) * 0.0015 * vib;
      });

      this.cys797Halo.rotation.x = t * 0.8;
      this.cys797Halo.rotation.y = t * 0.6;
      this.oncologyGroup.rotation.y = t * 0.15;
    }

    // 3. StatArb Surface & Mean-Reversion Drift
    if (this.statArbGroup && this.statArbGroup.visible) {
      const statPos = this.statGeom.attributes.position;
      const count = statPos.count;
      const vol = this.params.statarbVolatility;

      for (let i = 0; i < count; i++) {
        const x = statPos.getX(i);
        const y = statPos.getY(i);
        const zVal = Math.sin(x * 1.2 + t * 2) * Math.cos(y * 1.2 + t * 1.5) * 0.3 * vol;
        statPos.setZ(i, zVal);
      }
      statPos.needsUpdate = true;

      // Swarm mean-reverting pull towards plane
      const swarmP = this.statSwarm.geometry.attributes.position;
      for (let i = 0; i < swarmP.count; i++) {
        let y = swarmP.getY(i);
        y += -y * 0.02 + (Math.random() - 0.5) * 0.05 * vol;
        swarmP.setY(i, y);
      }
      swarmP.needsUpdate = true;

      this.statArbGroup.rotation.y = t * 0.08;
    }

    // 4. RF-Vision Radar Rings & Biometric Heartbeat
    if (this.radarGroup && this.radarGroup.visible) {
      const freq = this.params.radarFrequency;
      this.radarRings.forEach((ring, idx) => {
        const scale = ((t * 0.6 * freq + idx * 0.2) % 1) * 1.8;
        ring.scale.set(scale, scale, 1);
        ring.material.opacity = Math.max(0, 0.5 - scale * 0.25);
      });

      // Cardiac pulse: 72 bpm = 1.2 Hz
      const cardiacPulse = 1.0 + Math.sin(t * Math.PI * 2 * 1.2 * freq) * 0.08;
      this.radarTarget.scale.set(cardiacPulse, cardiacPulse, cardiacPulse);

      this.radarGroup.rotation.y = t * 0.05;
    }

    // 5. Aether P2P Geodesic Mesh
    if (this.aetherGroup && this.aetherGroup.visible) {
      this.icoMesh.rotation.x = t * 0.12;
      this.icoMesh.rotation.y = t * 0.18;
      this.coreMesh.scale.setScalar(1.0 + Math.sin(t * 2.0) * 0.05);

      this.aetherGroup.rotation.y = t * 0.05;
    }

    this.renderer.render(this.scene, this.camera);
  }
}

// Global hook
window.Portfolio3DScene = Portfolio3DScene;
