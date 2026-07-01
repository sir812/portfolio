# 🎨 Portfolio

A modern, high-performance portfolio website showcasing projects and professional work. Built with React and optimized for speed, accessibility, and visual impact.

**Live Demo:** [portfolio-tawny-kappa-39.vercel.app](https://portfolio-tawny-kappa-39.vercel.app)

---

## ✨ Features

- **⚡ Performance Optimized**
  - Code splitting with React Suspense for faster initial load
  - Responsive WebP images with adaptive srcsets for different screen sizes
  - CSS optimization tooling to eliminate unused styles
  - Skeleton loaders for smooth page transitions

- **📱 Fully Responsive**
  - Mobile-first design that works seamlessly across all devices
  - Touch-friendly navigation with hamburger menu
  - Optimized images for different viewport sizes (400px to 1600px)

- **🎯 Modern UX**
  - Smooth page transitions with lazy-loaded content
  - Interactive components and animations
  - Clean, professional design with strategic visual hierarchy

- **🔧 Developer-Friendly**
  - React Router for client-side navigation
  - CSS module organization (component-scoped styles)
  - Unused CSS detection and pruning tools
  - Comprehensive test setup with React Testing Library

---

## 📂 Project Structure

```
src/
├── routes/              # Page components (Home, About, Projects, Contact)
│   ├── Home.js
│   ├── Project.js
│   ├── About.js
│   ├── Contact.js
│   └── *BelowFold.js    # Content below the fold (lazy-loaded)
│
├── components/          # Reusable UI components
│   ├── Navbar.js        # Navigation with mobile menu
│   ├── HeroImage.js     # Hero section
│   ├── WorkCard.js      # Project card component
│   ├── PricingCard.js   # Service/pricing cards
│   └── Skeleton*.js     # Loading placeholders
│
├── assets/              # Images and media
│   └── responsive/      # Responsive image variants
│
├── App.js               # Main app with routing
├── index.js             # Entry point with Router setup
└── index.css            # Global styles
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sir812/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm start
```
The app will open at `http://localhost:3000` with hot reload enabled.

### Production Build

```bash
# Create optimized production build
npm run build

# Build outputs to the `build/` folder ready for deployment
```

---

## 🛠 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server with hot reload |
| `npm test` | Run tests in interactive watch mode |
| `npm run build` | Build optimized production bundle |
| `npm run analyze:css` | Generate report of unused CSS classes |
| `npm run eject` | Expose Create React App configuration (irreversible) |

---

## 🎯 Page Overview

### 🏠 Home
- Hero introduction section with call-to-action
- Featured work preview
- Loading skeletons for visual polish

### 📋 About
- Professional background and expertise
- Skills and experience highlights
- Personal touch to build connection

### 🎨 Projects
- Portfolio of completed work
- Project descriptions and impact metrics
- Responsive image gallery with optimized loading

### 💬 Contact
- Contact form for inquiries
- Social links and ways to connect
- Call-to-action for collaboration

---

## 🖼 Image Optimization

Images are optimized with multiple strategies:

- **WebP Format**: Modern, smaller file size with better compression
- **Responsive Variants**: Generated for different breakpoints:
  - 400px (mobile)
  - 800px (tablet)
  - 1200px (desktop)
  - 1600px (large displays)
- **Lazy Loading**: Images load only when needed
- **Responsive Srcsets**: Browser automatically selects best variant

### Generating Responsive Images

```bash
# Generate responsive WebP variants (requires Python)
python scripts/generate_responsive_webp.py
```

---

## 🧹 CSS Optimization

Keep your CSS lean and eliminate unused rules:

```bash
# Analyze CSS and generate unused classes report
npm run analyze:css
```

This generates `unused-css-report.json` with:
- Total CSS selectors across all files
- Count of unused selectors
- Detailed breakdown per CSS file

```bash
# Automatically remove unused CSS
node scripts/prune-unused-css.js
```

---

## 🧪 Testing

```bash
# Run test suite in watch mode
npm test

# Run tests once (CI mode)
npm test -- --watchAll=false
```

Tests use React Testing Library with comprehensive coverage for components.

---

## 📦 Tech Stack

- **Frontend Framework**: React 19
- **Routing**: React Router v6
- **Styling**: CSS (scoped per component)
- **Icons**: react-icons
- **Testing**: React Testing Library + Jest
- **Build Tool**: Create React App (Webpack)
- **Deployment**: Vercel
- **Analytics**: @vercel/toolbar

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel
```

### Other Deployment Options

- **GitHub Pages**: `npm run build` then deploy the `build/` folder
- **Netlify**: Connect your GitHub repo to Netlify for automatic deploys
- **Traditional Hosting**: Upload the `build/` folder to any static host

---

## 📊 Performance Tips

- ✅ Already optimized with code splitting via Suspense
- ✅ Images use responsive formats and loading strategies
- ✅ CSS is analyzed for unused rules
- 💡 Monitor Core Web Vitals using Vercel Analytics
- 💡 Regularly check the unused CSS report and prune old styles

---

## 🤝 Contributing

Improvements are welcome! Feel free to:
- Report issues
- Suggest new features
- Submit pull requests

---

## 📄 License

This project is open source. Feel free to use it as inspiration for your own portfolio.

---

## 👤 About Me

This portfolio showcases my work and expertise. Connect with me to discuss projects, collaboration, or opportunities.

- **Website**: [portfolio-tawny-kappa-39.vercel.app](https://portfolio-tawny-kappa-39.vercel.app)
- **GitHub**: [@sir812](https://github.com/sir812)

---

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Deployed on [Vercel](https://vercel.com)
- Icons from [react-icons](https://react-icons.github.io/react-icons/)
