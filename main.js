/**
 * PRATHVI - DEVELOPER PORTFOLIO
 * Main Application Orchestration Script
 */

import { renderSkills } from './skills.js';
import { renderProjects, initProjectFilters, projectsData } from './projects.js';
import { initResumeModal } from './resume.js';

// --- Toast System ---
export function showToast(message) {
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

// --- Clipboard Copy Helper ---
export function copyToClipboard(text, label = "Item") {
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

// --- Theme Management (Orange & Charcoal | Default: Light Theme) ---
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const storedTheme = localStorage.getItem("prathvi-theme");
  
  // Default is Light Theme per design specifications
  const activeTheme = storedTheme ? storedTheme : "light";
  document.documentElement.setAttribute("data-theme", activeTheme);
  updateThemeToggleAccessibility(activeTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("prathvi-theme", nextTheme);
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

// --- Mobile Drawer Navigation ---
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

// --- Active Section Scrollspy ---
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

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

// --- Contact Form Handler ---
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

    // Construct mailto link to student's exact email address
    const recipient = "bhatprathvi750@gmail.com";
    const bodyContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

    window.location.href = mailtoUrl;
    showToast("Launching your email client to send message...");
    form.reset();
  });
}

// --- Project Architecture Detail Modal ---
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

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderSkills();
  renderProjects("all");
  initProjectFilters();
  initResumeModal();
  initMobileDrawer();
  initScrollSpy();
  initContactForm();

  // Attach copy listeners
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

  // Close project detail modal on overlay click
  const projectModal = document.getElementById("project-detail-modal");
  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) {
        projectModal.classList.remove("active");
      }
    });
  }
});
