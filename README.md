# M. M. A. Udari Wathsala — Developer Portfolio

A modern, professional, and fully responsive personal portfolio website designed and engineered for **M. M. A. Udari Wathsala**, an IT Undergraduate reading for the Higher National Diploma in Information Technology (HNDIT) at SLIATE Kurunegala, Sri Lanka.

Built with **React**, **JavaScript**, **Tailwind CSS**, and **Lucide Icons**, powered by **Vite**.

---

## 🚀 Live Preview & Local Development

### 1. Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### 2. Setup & Installation
Clone or navigate into the project directory:
```bash
cd Portfolio-Website-udarimain
```

Install dependencies:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port Vite outputs in your terminal).

### 4. Build for Production
```bash
npm run build
```
This generates the optimized, production-ready static assets in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Design & Aesthetic Highlights
- **Color Palette:** Premium dark navy background (`#070A12`) with gradient accents in purple (`#A855F7`), indigo (`#6366F1`), and cyan (`#38BDF8`).
- **Interactive UI:** Smooth scrolling, glowing ambient gradients, glassmorphism card surfaces, and dynamic hover feedback.
- **Responsive Architecture:** Fully optimized across desktop, tablet, and mobile breakpoints with a mobile drawer navigation.
- **Progress-Free Skills Display:** Objective, progress-free skill badges accurately reflecting coursework competencies without fabricated percentage bars.
- **Academic Verification:** Strictly reflects coursework, laboratory implementations, and credentials from Udari's curriculum vitae.

---

## 📂 Project Structure
```text
Portfolio-Website-udarimain/
├── public/
│   └── assets/
│       ├── udari-profile.jpg         # Profile photograph
│       ├── Udari_Wathsala_CV.pdf     # Downloadable Curriculum Vitae
│       └── ...                       # Project & legacy icons
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                # Sticky header with active highlight & mobile menu
│   │   ├── Hero.jsx                  # Hero section with animated elements & CTAs
│   │   ├── About.jsx                 # Biography & academic experience domains
│   │   ├── Skills.jsx                # Technical skills badges
│   │   ├── Projects.jsx              # Featured academic projects & quick detail modal
│   │   ├── Education.jsx             # Vertical qualification timeline & references
│   │   ├── Strengths.jsx             # Personal soft skills & language proficiencies
│   │   ├── Contact.jsx               # Contact info & validated messaging form
│   │   ├── Footer.jsx                # Copyright, fast navigation links, and info
│   │   ├── BackToTop.jsx             # Floating back-to-top trigger button
│   │   └── Icons.jsx                 # Custom SVG icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.js          # Centralized data store for CV info
│   ├── App.jsx                       # Main application shell
│   ├── main.jsx                      # React 18 DOM mount point
│   └── index.css                     # Tailwind CSS directives & custom utility classes
├── index.html                        # SEO-optimized HTML entry point
├── package.json                      # Scripts & dependencies
├── tailwind.config.js                # Custom theme & animation extensions
├── postcss.config.js                 # PostCSS setup
└── vite.config.js                    # Vite bundler configuration
```

---

## 💼 Featured Academic Projects
1. **Heart Attack Risk Prediction** — Machine Learning project using Python & Jupyter Notebook for data preprocessing and predictive risk modeling.
2. **News Reporter Mobile App** — Android Studio mobile application for news and report submission.
3. **Library Management System** — NetBeans Java desktop application for tracking book inventory and member borrowing records.
4. **Cafe Management System** — Java application managing point-of-sale orders and cafe workflows.
5. **School Management System** — C# application supporting student administrative operations and records.
6. **Restaurant Management System** — Integrated Java and React web system for order processing and table tracking.
7. **Tourist Management System** — Interactive JavaScript web system for tour package viewing and visitor inquiries.

---

## ✏️ Customization & Updating Links
All personal details and project links are cleanly centralized in `src/data/portfolioData.js`:
- **Social Links:** Update `github` and `linkedin` in `personalInfo.socials`.
- **Project Repositories:** Update `githubUrl` under each entry in `projects`.
- **Contact Details:** Update `email`, `phone`, and `location` in `personalInfo`.
- **Profile Photo:** Replace `public/assets/udari-profile.jpg` with any new photo using the same file name, or change the reference in `personalInfo.profileImage`.
- **Curriculum Vitae:** Replace `public/assets/Udari_Wathsala_CV.pdf` with an updated PDF whenever needed.

---

## 📄 License & Attribution
Designed and built for **M. M. A. Udari Wathsala**. All rights reserved.
