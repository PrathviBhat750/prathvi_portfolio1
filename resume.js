/**
 * PRATHVI - DEVELOPER PORTFOLIO
 * Resume Module: Interactive Modal, Native Print & Download Handlers
 * STRICT CONTENT INTEGRITY: Purely authentic student credentials.
 */

export function initResumeModal() {
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
    // Focus first focusable element inside modal
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

  // Close on backdrop click
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  // Native Print
  if (printButton) {
    printButton.addEventListener("click", () => {
      window.print();
    });
  }

  // Downloadable Plain-Text / Markdown Resume Generator
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
