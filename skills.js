/**
 * PRATHVI - DEVELOPER PORTFOLIO
 * Skills Module: Verified Expertise & Categorized Technical Stacks
 * STRICT CONTENT INTEGRITY: Exact self-assessed levels preserved.
 */

export const coreLanguages = [
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

export const categorizedSkills = [
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

export function renderSkills() {
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
