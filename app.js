/**
 * PRATHVI - DEVELOPER PORTFOLIO
 * Unified Production Application Script
 * WCAG 2.1 AA Compliant, Compatible with file:// and http:// protocols.
 */

// ==========================================================================
// 1. DATA: VERIFIED PROGRAMMING PROFICIENCY & CATEGORIZED SKILLS
// ==========================================================================
const coreLanguages = [
  {
    name: "Python",
    level: "Intermediate",
    percentage: 70,
    accentClass: "intermediate",
    description: "Core scripting, data structures, Flask web endpoints, and machine learning utilities."
  },
  {
    name: "C",
    level: "Basic",
    percentage: 40,
    accentClass: "basic",
    description: "Foundational procedural programming, pointers, and memory mechanics in academic coursework."
  },
  {
    name: "JavaScript",
    level: "Basic",
    percentage: 40,
    accentClass: "basic",
    description: "Client-side interactivity, DOM manipulation, asynchronous fetch APIs, and event handling."
  }
];

const categorizedSkills = [
  {
    category: "Frontend Development",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
    skills: ["HTML", "CSS"]
  },
  {
    category: "Backend Development",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    skills: ["Flask", "Node.js"]
  },
  {
    category: "Databases & Storage",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    skills: ["MySQL"]
  },
  {
    category: "Data Science & AI",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    skills: ["NumPy", "Pandas"]
  },
  {
    category: "Development Tools & IDEs",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
    skills: ["Visual Studio Code", "Google Antigravity"]
  },
  {
    category: "Computer Science Foundations",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    skills: ["Data Structures and Algorithms"]
  }
];

// ==========================================================================
// 2. DATA: REAL PROJECTS
// ==========================================================================
const projectsData = [
  {
    id: "pneumon-vision-ai",
    title: "Pneumon Vision AI",
    category: "Machine Learning",
    categoryFilter: "ml",
    status: "Completed",
    overview: "Pneumonia detection AI application leveraging computer vision and machine learning models to analyze pulmonary radiographs.",
    problemSolved: "Saves critical time for patients by reducing hospital waiting room delays and assisting with rapid preliminary screening.",
    technologies: ["Python", "Flask", "HTML"],
    keyContribution: "Engineered and implemented the complete frontend user interface and integrated it with Flask endpoints for seamless medical scan upload and result rendering.",
    imageSrc: "./project_image.jpg",
    imageAlt: "Architecture diagram and user interface preview of Pneumon Vision AI",
    githubUrl: "https://github.com/PrathviBhat750"
  }
];

// ==========================================================================
// 3. TOAST NOTIFICATIONS & CLIPBOARD HELPER
// ==========================================================================
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (container.contains(toast)) {
        container.removeChild(toast);
      }
    }, 300);
  }, 3200);
}

function copyToClipboard(text, label = "Item") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied to clipboard!`);
    }).catch(() => {
      fallbackCopy(text, label);
    });
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(`${label} copied to clipboard!`);
  } catch (err) {
    showToast(`Unable to auto-copy: ${text}`);
  }
  document.body.removeChild(textArea);
}

// ==========================================================================
// 4. RENDERING FUNCTIONS (SKILLS & PROJECTS)
// ==========================================================================
function renderSkills() {
  const coreContainer = document.getElementById("core-languages-container");
  const catContainer = document.getElementById("categorized-skills-container");

  if (coreContainer) {
    coreContainer.innerHTML = coreLanguages.map(lang => `
      <article class="core-lang-card" aria-label="${lang.name} programming language, verified level: ${lang.level}">
        <div class="core-lang-header">
          <div class="lang-identity">
            <div class="lang-icon-box" aria-hidden="true">${lang.name.charAt(0)}</div>
            <h4 class="lang-name">${lang.name}</h4>
          </div>
          <span class="level-badge level-${lang.accentClass}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            ${lang.level}
          </span>
        </div>
        <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${lang.description}</p>
        <div class="level-meter-wrap">
          <div class="level-meter-header">
            <span>Verified Proficiency</span>
            <span class="font-mono">${lang.level}</span>
          </div>
          <div class="level-track" role="progressbar" aria-valuenow="${lang.percentage}" aria-valuemin="0" aria-valuemax="100" aria-label="${lang.name} proficiency meter">
            <div class="level-fill ${lang.accentClass}" style="width: ${lang.percentage}%;"></div>
          </div>
        </div>
      </article>
    `).join("");
  }

  if (catContainer) {
    catContainer.innerHTML = categorizedSkills.map(cat => `
      <div class="tech-cat-card">
        <div class="tech-cat-header">
          <span class="tech-cat-icon" aria-hidden="true">${cat.icon}</span>
          <h4 class="tech-cat-title">${cat.category}</h4>
        </div>
        <div class="tech-pill-list">
          ${cat.skills.map(skill => `
            <span class="tech-pill">
              <span class="tech-pill-dot" aria-hidden="true"></span>
              ${skill}
            </span>
          `).join("")}
        </div>
      </div>
    `).join("");
  }
}

function renderProjects(filter = "all") {
  const container = document.getElementById("projects-grid-container");
  if (!container) return;

  const filtered = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.categoryFilter === filter || filter === "all");

  container.innerHTML = filtered.map(project => `
    <article class="project-card" data-category="${project.categoryFilter}">
      <div class="project-preview">
        <img src="${project.imageSrc}" alt="${project.imageAlt}" loading="lazy" width="600" height="340">
        <span class="project-category-tag">${project.category}</span>
        <span class="project-status-tag">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          ${project.status}
        </span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-overview">${project.overview}</p>

        <div class="project-problem-box">
          <div class="problem-label">Problem Solved</div>
          <p class="problem-text">${project.problemSolved}</p>
        </div>

        <div class="project-contribution-box">
          <div class="contribution-label">Key Contribution</div>
          <p class="contribution-text">${project.keyContribution}</p>
        </div>

        <div class="project-tech-stack" aria-label="Technologies used">
          ${project.technologies.map(tech => `<span class="stack-tag">${tech}</span>`).join("")}
        </div>

        <div class="project-actions">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="View source code on GitHub for ${project.title}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub Profile / Source
          </a>
          <button class="btn btn-outline-accent btn-sm" onclick="window.openProjectModal('${project.id}')" aria-label="View project architecture breakdown">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Architecture Overview
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderProjects(filter);
    });
  });
}

// ==========================================================================
// 5. RESUME MODAL & ACTIONS
// ==========================================================================
function initResumeModal() {
  const modalOverlay = document.getElementById("resume-modal");
  const openButtons = document.querySelectorAll("[data-action='open-resume']");
  const closeButtons = document.querySelectorAll("[data-action='close-modal']");
  const printButton = document.getElementById("print-resume-btn");
  const downloadButton = document.getElementById("download-resume-btn");

  if (!modalOverlay) return;

  function openModal() {
    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const focusable = modalOverlay.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
    if (focusable) focusable.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  openButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", closeModal);
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  if (printButton) {
    printButton.addEventListener("click", () => {
      window.print();
    });
  }

  if (downloadButton) {
    downloadButton.addEventListener("click", () => {
      const resumeContent = `================================================================================
PRATHVI - RESUME / CURRICULUM VITAE
MCA Student | Software Development & Web Technologies
================================================================================

Contact Details:
- Location: Udupi, Karnataka
- Email: bhatprathvi750@gmail.com
- Phone: +91 6363365916
- GitHub: https://github.com/PrathviBhat750

--------------------------------------------------------------------------------
PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
I am an MCA student passionate about software development, web technologies, and 
solving practical problems through clean code. Eager to contribute to software 
engineering and full-stack development initiatives.

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
Master of Computer Applications (MCA)
Institution: Poornaprajna Institute of Management (PIM), Udupi, Karnataka
Duration: 2026 - 2028
Status: Pursuing (First Year)
Specialization: Computer Applications & Software Development

Bachelor of Computer Applications (BCA)
Institution: Milagres College Kallianpur, Kallianpur
Duration: 2023 - 2026
Status: Completed
Specialization: Computer Applications
Academic Score: CGPA 8.44

--------------------------------------------------------------------------------
TECHNICAL SKILLS & VERIFIED PROFICIENCY
--------------------------------------------------------------------------------
Core Programming Languages (Verified Self-Evaluation):
- Python: Intermediate
- C: Basic
- JavaScript: Basic

Frontend Development:
- HTML, CSS

Backend Development:
- Flask, Node.js

Databases & Storage:
- MySQL

Data Science & AI:
- NumPy, Pandas

Development Tools & IDEs:
- Visual Studio Code, Google Antigravity

Computer Science Fundamentals:
- Data Structures and Algorithms

--------------------------------------------------------------------------------
PROJECTS & TECHNICAL ARTIFACTS
--------------------------------------------------------------------------------
Pneumon Vision AI (Machine Learning / Healthcare) - Completed
- Overview: Pneumonia detection artificial intelligence application using machine learning.
- Problem Solved: Saves patient time and reduces lengthy hospital triage waiting queues.
- Technologies Used: Python, Flask, HTML
- Key Contributions: Built the frontend user interface and connected it with the model backend.

--------------------------------------------------------------------------------
CAREER AMBITIONS & INTERESTS
--------------------------------------------------------------------------------
- Target Roles: Software Developer, Web Developer
- Primary Areas: Web Development, Full-Stack Development
- Short-Term Learning Focus: Data Structures & Algorithms and Problem Solving Practice
- Long-Term Vision: Secure a role as a Software Engineer or Full-Stack Developer
- Languages Spoken: English, Kannada
- Hobbies: Reading and problem solving
================================================================================
`;
      const blob = new Blob([resumeContent], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const tempLink = document.createElement("a");
      tempLink.href = url;
      tempLink.download = "Prathvi_MCA_Resume.txt";
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      URL.revokeObjectURL(url);
    });
  }
}

// ==========================================================================
// 6. THEME MANAGEMENT (DEFAULT: LIGHT THEME)
// ==========================================================================
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  let activeTheme = "light";
  
  try {
    const storedTheme = localStorage.getItem("prathvi-theme");
    if (storedTheme) activeTheme = storedTheme;
  } catch (e) {
    // Fallback if localStorage is restricted under file:// origin
    activeTheme = "light";
  }

  document.documentElement.setAttribute("data-theme", activeTheme);
  updateThemeToggleAccessibility(activeTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", nextTheme);
      try {
        localStorage.setItem("prathvi-theme", nextTheme);
      } catch (e) {}
      updateThemeToggleAccessibility(nextTheme);
      showToast(`Switched to ${nextTheme === "light" ? "Light" : "Dark"} Mode`);
    });
  }
}

function updateThemeToggleAccessibility(theme) {
  const btn = document.getElementById("theme-toggle-btn");
  if (btn) {
    const isDark = theme === "dark";
    btn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    btn.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
  }
}

// ==========================================================================
// 7. MOBILE DRAWER NAVIGATION
// ==========================================================================
function initMobileDrawer() {
  const toggleBtn = document.getElementById("mobile-nav-toggle");
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("drawer-overlay");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");
  const drawerLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navLinks || !overlay) return;

  function openDrawer() {
    navLinks.classList.add("drawer-open");
    overlay.classList.add("active");
    toggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    navLinks.classList.remove("drawer-open");
    overlay.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  toggleBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("drawer-open");
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", closeDrawer);
  }

  overlay.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("drawer-open")) {
      closeDrawer();
    }
  });
}

// ==========================================================================
// 8. ACTIVE SECTION SCROLLSPY
// ==========================================================================
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!window.IntersectionObserver) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, {
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  });

  sections.forEach(sec => observer.observe(sec));
}

// ==========================================================================
// 9. CONTACT FORM HANDLER
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim() || `Portfolio Inquiry from ${name}`;
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all required fields.");
      return;
    }

    const recipient = "bhatprathvi750@gmail.com";
    const bodyContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

    window.location.href = mailtoUrl;
    showToast("Opening email client to send message...");
    form.reset();
  });
}

// ==========================================================================
// 10. PROJECT ARCHITECTURE DETAIL MODAL
// ==========================================================================
window.openProjectModal = function(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById("project-detail-modal");
  const modalContent = document.getElementById("project-modal-content");
  if (!modalOverlay || !modalContent) return;

  modalContent.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem;">
        <span class="project-category-tag" style="position: static;">${project.category}</span>
        <span class="project-status-tag" style="position: static;">${project.status}</span>
      </div>
      <h3 style="font-size: 1.75rem; color: var(--text-primary); margin-bottom: 0.5rem;">${project.title}</h3>
      <p style="color: var(--text-secondary); font-size: 1.05rem;">${project.overview}</p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-bottom: 1.5rem;">
      <div style="background: var(--bg-subtle); padding: 1.25rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent);">
        <h4 style="font-size: 0.95rem; color: var(--accent); margin-bottom: 0.35rem; text-transform: uppercase;">Real-World Problem Addressed</h4>
        <p style="color: var(--text-primary); font-size: 0.95rem;">${project.problemSolved}</p>
      </div>

      <div style="background: var(--accent-light); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid rgba(234, 88, 12, 0.3);">
        <h4 style="font-size: 0.95rem; color: var(--accent); margin-bottom: 0.35rem; text-transform: uppercase;">Prathvi's Verified Role & Contribution</h4>
        <p style="color: var(--text-primary); font-size: 0.95rem; font-weight: 600;">${project.keyContribution}</p>
      </div>

      <div style="background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h4 style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 0.75rem;">Technical Implementation Stack</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${project.technologies.map(t => `<span class="stack-tag" style="font-size: 0.9rem; padding: 0.35rem 0.75rem;">${t}</span>`).join("")}
        </div>
      </div>
    </div>

    <div style="display: flex; gap: 1rem; justify-content: flex-end; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        View GitHub Profile
      </a>
      <button class="btn btn-secondary btn-sm" onclick="document.getElementById('project-detail-modal').classList.remove('active')">
        Close
      </button>
    </div>
  `;

  modalOverlay.classList.add("active");
};

// ==========================================================================
// 11. BOOTSTRAP APPLICATION
// ==========================================================================
function initApp() {
  initTheme();
  renderSkills();
  renderProjects("all");
  initProjectFilters();
  initResumeModal();
  initMobileDrawer();
  initScrollSpy();
  initContactForm();

  const copyEmailBtn = document.getElementById("copy-email-btn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      copyToClipboard("bhatprathvi750@gmail.com", "Email address");
    });
  }

  const copyPhoneBtn = document.getElementById("copy-phone-btn");
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener("click", () => {
      copyToClipboard("6363365916", "Phone number");
    });
  }

  const projectModal = document.getElementById("project-detail-modal");
  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) {
        projectModal.classList.remove("active");
      }
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
