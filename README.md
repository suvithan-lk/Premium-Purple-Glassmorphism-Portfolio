# 💜 Premium Purple Glassmorphism Portfolio

A modern, responsive portfolio website featuring a **premium purple glassmorphism** design, custom cursor interactions, and smooth animations.  
Built with **HTML**, **Tailwind CSS**, and **vanilla JavaScript**.

---

## ✨ Features

### 🎨 Premium Glassmorphism Design
- Sleek purple color palette with translucent elements
- Frosty **"Ice Panel"** components with animated sheen
- Layered parallax background elements

### 🖱️ Custom Figma-like Cursor
- Smooth dot and ring following with easing
- Interactive state changes for buttons & links
- Context-aware tooltips

### 🚀 Performance Optimized
- Lazy loading for images
- Critical CSS inlining
- Respects `prefers-reduced-motion`
- PurgeCSS for minimal CSS footprint

### ♿ Accessibility Focused
- Keyboard navigable with visible focus states
- Skip-to-content link
- WCAG AA contrast compliance
- ARIA attributes for custom components

---

## 🛠️ Technologies Used
- **HTML5**
- **Tailwind CSS v3+**
- **JavaScript (ES6+)**
- **Vite** (for development)

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/suvithan-lk/Premium-Purple-Glassmorphism-Portfolio.git

Install dependencies:
```

```bash
npm install

```
Start development server:

```bash

npm run dev
```

🏗️ Building for Production

```bash
npm run build
```

This will create an optimized production build in the dist folder.

🚀 Deployment
This project is ready to deploy to any static hosting service:
Netlify
Vercel
GitHub Pages

```bash
npm run build
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

🎨 Customization
Changing Colors
Edit the extended colors in tailwind.config.js:

```js
theme: {
  extend: {
    colors: {
      premium: {
        purple: {
          50: '#F5F3FF',
          // ... other shades
        }
      }
    }
  }
}

```
Adding Content
Projects: Add to the portfolio grid in index.html

Blog Posts: Create markdown files in /content/posts/ with frontmatter

Testimonials: Edit the mock data in animations.js

📂 Project Structure
```bash

premium-purple-portfolio/
├── assets/               # Static assets
│   ├── images/           # Project images
│   └── js/               # JavaScript modules
├── dist/                 # Production build
├── src/                  # Source files
│   ├── css/              # CSS files
│   └── index.html        # Main HTML file
├── tailwind.config.js    # Tailwind configuration
├── package.json          # Project dependencies
└── README.md             # Project documentation

```
📊 Lighthouse Scores
Category	Score
Performance	98
Accessibility	100
Best Practices	100
SEO	100

📄 License
This project is licensed under the MIT License – see the LICENSE file for details.

🙌 Acknowledgments
Inspired by modern glassmorphism design trends
Particle animation technique from Vincent Garreau’s particles.js
Custom cursor system inspired by Figma’s UI

Author -> A.Suvithan
Mail -> suvithan.lk@gmail.com

