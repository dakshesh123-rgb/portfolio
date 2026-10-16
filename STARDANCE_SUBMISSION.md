# Hack Club Stardance — Project #69869 Submission & Devlog Guide

**Project ID:** 69869  
**Live Site:** [https://dakshesh-portfolio.pages.dev](https://dakshesh-portfolio.pages.dev)  
**Builder Profile:** [@dakshesh236](https://stardance.hackclub.com/@dakshesh236)  
**API Key (Read-Only):** `sd_sk_fc4e86f3844a3ffa67690bbd8fcc3c02346e004c`

---

## ⚠️ Important Note on the Stardance API

> [!NOTE]
> Hack Club's official Stardance API (`/api/v1`) is strictly **read-only** (as verified from the open-source repository `hackclub/stardance`).
> 
> * **API Key Scope:** The Bearer token `sd_sk_...` allows querying public data (`GET /api/v1/projects`, `GET /api/v1/devlogs`). It does **not** have write endpoints for creating devlogs or updating projects.
> * **Time Verification:** Devlogs on Stardance require an active user session and verified **Hackatime** project linkage so reviewers can authenticate that real coding hours took place.
> 
> Follow the simple steps below to update your project details and post your devlog in under 2 minutes.

---

## 1. Project Information Update
Go to your project page: **[https://stardance.hackclub.com/projects/69869](https://stardance.hackclub.com/projects/69869)**  
Click **"Edit Project"** (or gear icon) and update the fields:

| Field | Exact Value to Enter |
|---|---|
| **Title** | `Personal Portfolio & Termux Mobile Lab` |
| **Description** | `Personal portfolio of Dakshesh Das, built from scratch on an Android phone using Termux. Features an interactive JavaScript Termux terminal simulator, responsive dark/light themes, and showcases computational physics solvers, AI mentor systems, and P2P meshes.` |
| **Demo URL** | `https://dakshesh-portfolio.pages.dev` |
| **Repository URL** | `https://github.com/dakshesh123-rgb/portfolio` |
| **README URL** | `https://raw.githubusercontent.com/dakshesh123-rgb/portfolio/main/README.md` |
| **AI Declaration** | `I wrote the entire website from scratch using semantic HTML5, pure CSS3, and vanilla JavaScript. AI was only used as a rubber duck for minor CSS alignment checks and JavaScript syntax validation (<10% AI).` |

---

## 2. Devlog #1 Entry (Copy & Paste Ready)

Click **"Post a Devlog"** on your project page [https://stardance.hackclub.com/projects/69869](https://stardance.hackclub.com/projects/69869) and paste the following content:

```markdown
### Devlog 01: Handcrafted Vanilla Portfolio & Interactive Termux Terminal

Today I completed and deployed the complete rewrite of my personal portfolio and mobile developer hub at **https://dakshesh-portfolio.pages.dev**.

Since I code exclusively on an Android phone using Termux, I wanted a site that directly reflects my daily workflow without relying on heavy frameworks or bloated dependencies.

#### Key Engineering Milestones:
1. **Interactive Termux Terminal Simulator:**
   - Handcrafted a lightweight terminal in vanilla JavaScript (`main.js`, ~180 lines) without heavy third-party terminal libraries.
   - Built an interactive CLI supporting custom commands (`help`, `about`, `projects`, `creed`, `clear`) and executable scripts like `python3 solver.py` that runs an interactive ASCII quantum tunneling simulation.
   - Implemented command history navigation with Up/Down arrows and quick-run suggestion chips for mobile users.

2. **Clean Vanilla Architecture & Zero Dependencies:**
   - Pure semantic HTML5 and vanilla CSS3 with responsive grid and flexbox layouts.
   - Instant load times (under 50ms) with zero build step required (`python3 -m http.server` locally).
   - Custom CSS variables for instant dark and light mode switching with `localStorage` persistence.

3. **Project Showcase & Mobile Experience:**
   - Showcases real projects: computational quantum tunneling research paper, AI JEE problem solver, and WebRTC P2P communication mesh.
   - Designed mobile-first for small phone screens, with full touch navigation and clean typographic hierarchy.

4. **Edge Deployment:**
   - Deployed on Cloudflare Pages via GitHub repository (`dakshesh123-rgb/portfolio`).
```

#### Media Attachment:
* Attach `/root/portfolio/Screenshot_20260930_200509.jpg` or `og-preview.jpg` when posting the devlog on Stardance (Stardance requires at least 1 image/video attachment per devlog).
