# Dakshesh's Portfolio

A personal website to showcase the projects I've built from my phone.

Live link: [https://dakshesh-portfolio.pages.dev](https://dakshesh-portfolio.pages.dev)  
Stardance project: [#69869](https://stardance.hackclub.com/projects/69869)

## Why I made this

I'm Dakshesh Das, a 16-year-old student currently in 11th grade. I don't have a desktop computer or laptop, so everything I code — from differential equation physics solvers to small web apps — is done directly on an Android phone using Termux.

I wanted a clean, fast personal site to collect my work in one place without needing a heavy frontend framework that lags on mobile.

## What's in it

- **Interactive Termux terminal**: Since I do all my work in the terminal on Android, I built a small terminal emulator in JavaScript right into the page. You can click commands or type `python3 solver.py` to see a simulation of my quantum tunneling solver, or check `cat about.txt`, `cat creed.txt`, and `projects`.
- **Project gallery**: Links to my real projects with demos and GitHub repos, like my quantum tunneling research paper, an AI JEE problem-solving helper, and a WebRTC P2P mesh tool.
- **Dark and light mode**: A simple theme toggle that saves your preference in localStorage.
- **Built for phones first**: Since I wrote and previewed this on a 6-inch phone screen, it's designed to be lightweight, responsive, and fast.

## Running it locally

You don't need npm or node_modules. Any basic HTTP server will work:

```bash
git clone https://github.com/dakshesh123-rgb/portfolio.git
cd portfolio
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## How I built it & technical choices

I built this website completely from scratch using clean, handwritten HTML, CSS, and vanilla JavaScript designed for fast loading on mobile and desktop.

Some choices I made:
1. **No frameworks**: React or Next.js would have added hundreds of megabytes of dependencies that are painful to manage on Termux. Plain HTML and CSS load in milliseconds and are easy to maintain on a phone.
2. **Custom CSS variables**: I used standard CSS custom properties for theming so switching between dark and light mode only requires changing variables on the `:root` element.
3. **Vanilla JS terminal**: Instead of pulling in a heavy terminal library like xterm.js, I wrote a lightweight ~180-line JavaScript script (`main.js`) that handles command input, history, and outputs colored responses.

## AI usage

I want to be completely upfront:
- All the design, HTML layout, CSS styling, and project writeups were written by me.
- The concept of the interactive Termux terminal is my own idea based on my daily workflow.
- I used AI like a rubber duck — mostly asking how to fix specific CSS alignment issues on mobile or double-checking JavaScript syntax.
- Overall AI contribution is well under 10%.

## About me

I'm 16 years old, into physics, math, and coding. When I'm not studying or building things on Termux, I'm usually working out at the gym or reading philosophy.

- GitHub: https://github.com/dakshesh123-rgb
- Stardance: https://stardance.hackclub.com/@dakshesh236
- Project ID: #69869
