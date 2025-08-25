# Ramsey Javan — Cyberpunk Portfolio

A futuristic, cyberpunk-inspired portfolio website. Built with semantic HTML, CSS, vanilla JS, and a tiny React component for the Projects grid. Designed for GitHub Pages deployment and easy future expansion (blog, APIs, AI chat widget).

## ✨ Features
- Dark theme with neon blue `#00f2ff` and purple `#d400ff` accents, holographic effects, and subtle 3D hover animations.
- Particle background (tsParticles), glitch heading, and typewriter tagline (“Code the Future, Today.”).
- Floating sidebar navigation, smooth scrolling, responsive layout.
- Accessibility: ARIA labels, keyboard-friendly focus styles, skip link, high-contrast colors.
- SEO-ready: meta tags, Open Graph image, descriptive alt text.
- Light/dark toggle stored in `localStorage`.
- JSON-driven data: `data/projects.json` & `data/blog.json`.
- Minimal React usage via CDN for `ProjectsGrid`.
- Google Analytics ready (replace `GA_MEASUREMENT_ID` in `index.html`).
- Contact form wired for Formspree (replace `your_form_id`).

## 🗂 Project Structure
```
.
├── index.html
├── assets
│   ├── css/style.css
│   └── js/{main.js, projects.react.js}
├── data/{projects.json, blog.json}
├── images/mockups/{preview.png, avatar-holo.svg, neon-chip.svg, project*.png}
└── resume.pdf (placeholder)
```

## 🚀 Local Development
Just open `index.html` in your browser. For a local server:
```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## 🌐 Deploy to GitHub Pages
1. Create a new GitHub repo, e.g., `ramsey-javan/ramsey-javan.github.io` (user site) **or** any repo for a project site.
2. Add/commit/push this code:
```bash
git init
git branch -M main
git add .
git commit -m "feat: initial cyberpunk portfolio"
git remote add origin https://github.com/Ramsey-Javan/ramsey-javan.github.io.git
git push -u origin main
```
3. For **project site** repos: enable **Settings → Pages → Source: `main` → `/ (root)`**.
   For **user site** named `ramsey-javan.github.io`, GitHub Pages deploys automatically.
4. Access your site at `https://ramsey-javan.github.io` (or the repo’s Pages URL).

> If using a custom domain, add a `CNAME` file with your domain and configure DNS.

## 🧩 Updating Content
- **Projects**: edit `data/projects.json`. Each item accepts:
  ```json
  {
    "title": "Project Name",
    "description": "Short description.",
    "tech": ["Python", "Docker"],
    "github": "https://github.com/...",
    "demo": "https://example.com",
    "screenshot": "images/mockups/project1.png"
  }
  ```
- **Blog**: edit `data/blog.json` with `title`, `date`, and `excerpt`.

## 🤖 AI Chat Widget (Placeholder)
In `index.html`, see the commented block under the **Hero** section. You can integrate a provider later:
```html
<!--
<div id="ai-chat-widget"></div>
<script src="https://cdn.your-ai-chat.com/widget.js"></script>
<script> initAIChat({ selector: '#ai-chat-widget', user: 'Ramsey Javan' }) </script>
-->
```

## 🛡 Accessibility Checklist
- Keyboard navigation (Tab/Shift+Tab) reaches all interactive controls.
- Sufficient color contrast (test with Lighthouse / axe).
- Descriptive link text and ARIA labels throughout.

## 📈 Analytics
Replace `GA_MEASUREMENT_ID` in `index.html` with your GA4 ID.

## ✍️ License
MIT — open source. See `LICENSE`.

---

Built by Ramsey Javan.
