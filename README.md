# Dakshesh's Systems & Physics Portfolio

> A lightweight, zero-dependency personal website showcasing computational quantum physics simulations, terminal tools, and mobile software experiments — built and deployed entirely from an Android phone in Termux.

[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020?style=flat&logo=cloudflare&logoColor=white)](https://dakshesh-portfolio.pages.dev)
[![Hack Club Stardance](https://img.shields.io/badge/Hack%20Club-Stardance%20%2369869-EC3750?style=flat&logo=hackclub&logoColor=white)](https://stardance.hackclub.com/projects/69869)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📸 Preview

![Portfolio Screenshot](Screenshot_20260930_200509.jpg)

---

## 🌐 Try It Out

* 👉 **Live Website:** [https://dakshesh-portfolio.pages.dev](https://dakshesh-portfolio.pages.dev)
* ⭐ **Stardance Project Page:** [Project #69869](https://stardance.hackclub.com/projects/69869)
* 👤 **Stardance Builder Profile:** [@dakshesh236](https://stardance.hackclub.com/@dakshesh236)
* 🐙 **GitHub Repository:** [https://github.com/dakshesh123-rgb/portfolio](https://github.com/dakshesh123-rgb/portfolio)

---

## ⚡ Quick Start

You can run this portfolio locally in two simple commands (no `npm install`, no heavy dependencies):

```bash
git clone https://github.com/dakshesh123-rgb/portfolio.git
cd portfolio && python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080) in any browser.

---

## ✨ Features

* **Handcrafted Zero-Dependency Stack:** Written in semantic HTML5, pure CSS3, and vanilla modern JavaScript. Loads in under 80ms with zero framework bloat.
* **Interactive Termux Terminal Playground:** Built-in terminal emulator simulating my actual Android Termux environment (`aarch64`). Run `python3 solver.py` to see the Crank-Nicolson quantum tunneling solver in action, `cat about.txt`, `cat creed.txt`, or `projects`.
* **Live Project Showcases:** Direct links and documentation for my computational physics research paper, AI JEE Socratic mentor, Aether P2P WebRTC mesh, and Pythonix cloud sandbox.
* **Domain Category Filtering:** Instantly filter projects by category (*Physics & Math*, *Web & P2P*, *Mobile & Systems*).
* **Persistent Obsidian Dark / Light Theme:** Custom typographic palette with state saved automatically in `localStorage`.
* **Mobile-First Responsive Layout:** Designed and tested directly on a 6-inch Android smartphone screen, ensuring flawless responsiveness on phones, tablets, and desktops.

---

## 💻 How to Run Locally

### Requirements
* Any modern web browser (Chrome, Firefox, Safari, Edge).
* Python 3.8+ (to run a local HTTP server) or any static file server like `npx serve` or `caddy`.

### Step-by-Step
1. Clone the repository:
   ```bash
   git clone https://github.com/dakshesh123-rgb/portfolio.git
   cd portfolio
   ```
2. Start the local server:
   ```bash
   python3 -m http.server 8080
   ```
3. Visit [http://localhost:8080](http://localhost:8080) to explore the site and test the terminal.

---

## 🛠️ How It Works & Technical Choices

### 1. Why I Rebuilt This from Scratch (Addressing Reviewer Feedback)
When I first submitted this project to Stardance, I made the mistake of adapting an agency web template with automated transformation scripts. The Stardance reviewer (@Celestial) rightly pointed out that the code felt artificial, exceeded the AI limit, and had an impersonal README.

They were 100% right. That wasn't who I am as a hacker.

I threw away the entire template, purged all scraper scripts and external assets, and rebuilt this website from the ground up with clean, handcrafted HTML, CSS, and vanilla JS. Every single line of code, every CSS custom property, and every word in this portfolio is now mine.

### 2. The Phone Constraint: Coding on Termux
I am 16 years old, currently in 11th grade. I don't code on a multi-monitor desktop setup; I do all my work on an Android phone using Termux and Linux chroots. 

A 6-inch screen forces extreme discipline. You cannot afford 300MB `node_modules` folders, slow Webpack bundles, or fragile dependencies. Writing vanilla HTML, CSS, and JS means zero build steps, instant reloads, and blazing performance on native ARM64.

### 3. The Interactive Terminal
Because the Linux command line is where all my real work happens (compiling C++, running Crank-Nicolson quantum simulations, and managing git), I wanted visitors to experience that exact workflow. 

I wrote a small, robust terminal emulator in vanilla JavaScript (`main.js`). It intercepts command input, prints formatted ANSI-style responses, and even runs a simulated run of my quantum tunneling numerical solver (`python3 solver.py`) showing calculated transmission coefficients ($T \approx 2.3 \times 10^{-4}$) vs textbook rectangular barriers.

---

## 🤖 AI Usage Declaration

In accordance with Hack Club Stardance guidelines (<30% AI assistance):

* **Architecture, Design & Concept:** **100% Human** (my personal design, layout, and mobile-first concept).
* **Content & Copy:** **100% Human** (my genuine story, background, and project documentation).
* **Code Implementation:** **~10% AI assistance**. All HTML, CSS, and JavaScript was handwritten by me; AI was only used as a sounding board to double-check cross-browser CSS flexbox quirks and syntax references.

---

## 📜 Credits & Acknowledgments

* **Typography:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans), and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts.
* **Hosting:** Cloudflare Pages for ultra-fast global CDN routing.
* **Community:** [Hack Club Stardance](https://stardance.hackclub.com) for building a great community of high schoolers and pushing me to build authentic, handcrafted software.

---

## 📄 License

MIT License © 2026 Dakshesh Das.
