# N_LABS.O1 Industrial Interface

N_LABS.O1 is a premium, futuristic industrial web interface concept. It showcases an advanced "glass-and-metal" control surface for next-generation laboratories, labs, and autonomous infrastructure — featuring a real-time 3D canvas, reactive magnetic interactions, and a fully functional interactive terminal console.

Hero Text: **ENGINEERED FOR THE NEXT ERA**

## ✨ Features

- **Immersive full-viewport 3D Hardware Canvas**: Interactive rendering of industrial components.
- **Magnetic panels & buttons**: Fluid 3D tilt + light-follow on pointer hover (Apple Liquid Glass aesthetics).
- **Interactive console controls**: Toggle switches, transparent layout, precision sliders for reactor power and frequency.
- **Technical hero with CSS hardware visualization**: Live simulated terminal logs and technical metadata.
- **Fully responsive**: Desktop-first industrial design that degrades gracefully.
- **Semantic HTML, ARIA labels, keyboard accessible**
- **Zero external dependencies beyond React + Vite + GSAP + Lucide**

## 🛠️ Tech Stack

- **React 18 + TypeScript**
- **Vite 5** (blazing fast dev + optimized production builds)
- **Tailwind CSS** (glassmorphism, custom properties, magnetic hover effects, responsive grid)
- **GSAP** (cinematic entry animations and timeline staggering)
- **Lucide React** (industrial technical icons)

## 📦 Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/sekirosevillans-sys/futuristic-industrial-web.git
cd futuristic-industrial-web

# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev
```

## 🧱 Build for Production

```bash
npm run build
```

Output is written to `dist/`. The build is completely self-contained (HTML + JS + CSS assets).

## ✅ Lint

```bash
npm run lint
```

## 🚀 Deploy to GitHub Pages

One-time setup after first push:
1. Go to your repository **Settings** -> **Pages**.
2. Under "Build and deployment", set Source to **GitHub Actions**.
3. Save.

Your site can easily be configured to deploy via standard Vite GitHub Actions workflow.

## 📂 Project Structure

```text
futuristic-industrial-web/
├── .gitignore
├── package.json
├── index.html
├── public/
│   └── favicon.svg
├── src/
│   ├── App.tsx            # Main application layout, GSAP logic, and UI
│   ├── index.css          # Tailwind base, utilities, and magnetic CSS vars
│   ├── main.tsx           # React root
│   ├── components/
│   │   └── HardwareCanvas.tsx # 3D/Canvas rendering logic
│   └── assets/            # Static media
├── tailwind.config.js     # Custom fonts, colors, and animations
└── vite.config.ts         # Vite bundler configuration
```

## 🔒 Security & Clean Repository Policy

This is a frontend-only public showcase repository.
- No API keys, tokens, or secrets
- No large binaries or media files
- No development caches or logs
- No `node_modules` folders
- History kept clean

## 🤝 Contributing

Pull requests are welcome for:
- Visual polish or new magnetic interactions
- Accessibility improvements
- Performance of the Canvas/WebGL layer
- Better mobile experience

Please keep the industrial, unstyled, high-precision aesthetic.

## 📄 License

This project is provided as a design & engineering showcase. Feel free to use the patterns and interaction ideas in your own work.

---
Built with precision. N_LABS.O1 — Industrial Interface System - 2032
