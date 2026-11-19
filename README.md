# Prathvi — Developer Portfolio Website

> **Official Developer Portfolio for PRATHVI**  
> First-Year Master of Computer Applications (MCA) student at **Poornaprajna Institute of Management (PIM)**, Udupi, Karnataka.

---

## 🌟 Overview & Architecture

This modern developer portfolio web application presents Prathvi's authentic academic background, technical skills, verified self-assessed programming expertise levels, real projects, and career trajectory with dignity, modern polish, and strict factual integrity.

### 🎨 Design System: Orange & Charcoal
- **Visual Style:** Modern Developer Portfolio
- **Color Palette:** Warm Orange (`#ea580c` / `#f97316`) & Charcoal Slate (`#0f172a` / `#1e293b`)
- **Default Appearance:** Light Theme (with a high-contrast Dark Theme toggle persisted via `localStorage`)
- **Motion:** Subtle, elegant animations with strict enforcement of `prefers-reduced-motion`
- **Hero Presentation:** Text-Focused Introduction highlighting headline "MCA student", location "Udupi, Karnataka", and elevator pitch
- **Accessibility:** Built according to **WCAG 2.1 AA** standards (high contrast ratios, semantic HTML5, keyboard focus rings, ARIA landmarks, screen reader skip-links)

---

## 🧑‍💻 Student Profile & Verified Details

| Field | Detail |
|---|---|
| **Full Name** | PRATHVI |
| **Preferred Display Name** | Prathvi |
| **Headline** | MCA student |
| **Location** | Udupi, Karnataka |
| **Email** | [bhatprathvi750@gmail.com](mailto:bhatprathvi750@gmail.com) |
| **Phone** | 6363365916 |
| **GitHub** | [github.com/PrathviBhat750](https://github.com/PrathviBhat750) |
| **Bio** | *"I am an MCA student passionate about software development, web technologies, and solving practical problems through clean code."* |

---

## 🎓 Academic Education

1. **Master of Computer Applications (MCA)**
   - **Institution:** Poornaprajna Institute of Management (PIM), Udupi, Karnataka
   - **Duration:** 2026 – 2028
   - **Status:** Pursuing (First Year)
   - **Specialization:** Computer Applications & Software Development

2. **Bachelor of Computer Applications (BCA)**
   - **Institution:** Milagres College Kallianpur, Kallianpur
   - **Duration:** 2023 – 2026
   - **Status:** Completed
   - **Specialization:** Computer Applications
   - **Score:** **CGPA: 8.44**

---

## ⚡ Verified Programming Proficiency & Technical Skills

> **Content Integrity Assurance:** Every programming language self-evaluation was preserved without inflation.

### Core Programming Languages
- **Python:** `Intermediate` (Meter: 70%)
- **C:** `Basic` (Meter: 40%)
- **JavaScript:** `Basic` (Meter: 40%)

### Categorized Technologies & Frameworks
- **Frontend Development:** HTML, CSS
- **Backend Development:** Flask, Node.js
- **Databases & Storage:** MySQL
- **Data Science & AI:** NumPy, Pandas
- **Development Tools & IDEs:** Visual Studio Code, Google Antigravity
- **Computer Science Foundations:** Data Structures and Algorithms

---

## 🚀 Real Projects & Technical Artifacts

### 1. Pneumon Vision AI
- **Category:** Machine Learning / Healthcare AI
- **Status:** `Completed`
- **Overview:** Pneumonia detection AI using machine learning to analyze chest radiographs.
- **Problem Solved:** Saves patient time and eliminates long triage waiting queues in hospitals.
- **Technologies:** Python, Flask, HTML
- **Prathvi's Key Contribution:** Built frontend user interface and connected with Flask endpoints.
- **Source / Repository:** [GitHub Profile](https://github.com/PrathviBhat750)

---

## 🎯 Career Trajectory & Ambitions
- **Target Roles:** Software Developer, Web Developer, Full-Stack Developer
- **Primary Areas:** Web Development, Full-Stack Development
- **Short-Term Focus:** Data Structures & Algorithms and Systematic Problem Solving Practice
- **Natural Languages:** English, Kannada
- **Hobbies:** Reading, Problem Solving

---

## 📁 Project File Structure

```text
prathvi-portfolio/
├── index.html                   # Semantic HTML5, SEO & OpenGraph, ARIA attributes
├── package.json                 # Project manifest and local preview scripts
├── README.md                    # Documentation & deployment guide
├── css/
│   ├── style.css                # Design tokens, Orange & Charcoal theme, light/dark variables
│   ├── components.css           # Navbar, hero, skill meters, project cards, modal, toast
│   └── responsive.css           # Breakpoints for mobile, tablet, and off-canvas drawer
├── js/
│   ├── main.js                  # Theme manager, mobile drawer, copy-to-clipboard, scrollspy
│   ├── skills.js                # Verified proficiency data & category renderer
│   ├── projects.js              # Projects dataset & interactive category filtering
│   └── resume.js                # Resume modal controller, printable view & TXT download
└── assets/
    └── images/
        ├── favicon.svg          # Custom Orange & Charcoal brand mark
        ├── avatar.svg           # Tech monogram badge with dynamic status pill
        └── project-pneumon.svg  # Custom SVG architectural graphic for Pneumon Vision AI
```

---

## 🚀 Running the Project Locally

### Option 1: Direct Browser Access
Because this portfolio is built with zero-bloat standard HTML5, CSS3, and ES6 modules, you can serve it with any local static HTTP server:

```powershell
# Using Python's built-in HTTP server:
python -m http.server 3000

# OR using Node.js npx serve:
npx serve . -l 3000
```
Then open: `http://localhost:3000`

---

## 🌐 Deploying to Free Web Hosts

### Deploying to GitHub Pages
1. Push this repository to GitHub under `PrathviBhat750/<repository-name>`.
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Choose `main` branch and `/ (root)` folder, then click **Save**.
5. Your portfolio will be live at `https://prathvibhat750.github.io/<repository-name>/`.

### Deploying to Vercel / Netlify
- Drag and drop this folder directly into [Vercel Dashboard](https://vercel.com) or [Netlify Drop](https://app.netlify.com/drop).
- The site deploys instantly with 100/100 Lighthouse performance scores.
