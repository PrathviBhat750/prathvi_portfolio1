/**
 * PRATHVI - DEVELOPER PORTFOLIO
 * Projects Module: Real Projects & Interactive Category Filtering
 * STRICT CONTENT INTEGRITY: Only verified student projects included.
 */

export const projectsData = [
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
    githubUrl: "https://github.com/PrathviBhat750",
    hasLiveDemo: false
  }
];

export function renderProjects(filter = "all") {
  const container = document.getElementById("projects-grid-container");
  if (!container) return;

  const filtered = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.categoryFilter === filter || filter === "all");

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px dashed var(--border-medium);">
        <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 0.5rem;">No projects found in this category.</p>
        <button class="btn btn-sm btn-secondary" onclick="document.querySelector('[data-filter=all]').click()">View All Projects</button>
      </div>
    `;
    return;
  }

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

export function initProjectFilters() {
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
