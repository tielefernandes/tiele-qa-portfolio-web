const REVEAL_OFFSET = 80;

const ptBtn = document.getElementById("ptBtn");
const enBtn = document.getElementById("enBtn");

const translations = {
  "pt-br": {
    htmlLang: "pt-BR",
    nav: {
      about: "Sobre",
      exp: "Experiência",
      skills: "Habilidades",
      projects: "Projetos",
    },
    title: "QA Engineer | Automação de Testes | Testes de API",
    heroSummary:
      "QA Engineer com Experiência em testes manuais, Automação com Cypress e validacao de APIs. Focada em qualidade para aplicacoes web e melhoria continua com Automação e praticas de CI/CD.",
    openToWork: "Disponivel para oportunidades internacionais remotas",
    aboutTitle: "Sobre mim",
    aboutText:
      "Profissional com mais de 5 anos de experiência em Quality Assurance, especializado em automação de testes, testes de API e metodologias ágeis. Apaixonado por garantir a qualidade do software através de processos bem estruturados e ferramentas modernas.",
    certification: "Certificações",
    learning: "Aprendendo atualmente",
    experience: "Experiência",
    projects: "Projetos QA",
    knowledge: "Conhecimentos e Ferramentas",
    skills: "Habilidades",
    learnings: [
      {
        title: "Formação DevOps",
        description: "Formação profissional em DevOps focada em CI/CD, Docker, pipelines e cloud.",
        selector: ".learning .card:nth-of-type(1)",
      },
      {
        title: "Desenvolvimento Frontend",
        description: "Formação em Frontend na Origamid: HTML, CSS, JavaScript e interfaces modernas.",
        selector: ".learning .card:nth-of-type(2)",
      },
    ],
    jobs: [
      {
        title: "Testing Senior Specialist - NTT DATA",
        date: "2025 - Atual",
        description: "Testes manuais, Automação com Cypress, testes de API e validacao de pipelines CI/CD.",
        selector: "#exp .job:nth-of-type(1)",
      },
      {
        title: "Analista de QA - WayCarbon",
        date: "2023 - 2024",
        description: "Cenarios BDD, testes exploratorios e regressivos na plataforma ESG.",
        selector: "#exp .job:nth-of-type(2)",
      },
      {
        title: "Analista de Qualidade de Software - CWI Software",
        date: "2022 - 2023",
        description: "Testes mobile.",
        selector: "#exp .job:nth-of-type(3)",
      },
      {
        title: "Software Tester - Senior Sistemas",
        date: "2021 - 2023",
        description: "Automação de testes.",
        selector: "#exp .job:nth-of-type(4)",
      },
    ],
    projectList: [
      {
        title: "Automação E2E com Cypress",
        description: "Automação completa do fluxo de compra usando Page Objects e BDD.",
        selector: "#projects .cards > a:nth-of-type(1)",
      },
      {
        title: "Testes de API",
        description: "Validacao de APIs REST usando Postman, collections e checks automatizados.",
        selector: "#projects .cards > a:nth-of-type(2)",
      },
      {
        title: "Estrategia de Testes",
        description: "Plano e estrategia completa de testes para aplicacao fintech.",
        selector: "#projects .cards > .card:last-child",
      },
    ],
    footer: "© 2026 — Developed by Tiele Fernandes 🧪",
    cv: {
      text: "Currículo em PDF",
      href: "cv-pt.pdf",
    },
    hire: "Vamos trabalhar juntos ->",
  },
  en: {
    htmlLang: "en",
    nav: {
      about: "About",
      exp: "Experience",
      skills: "Skills",
      projects: "Projects",
    },
    title: "QA Engineer | Test Automation | API Testing",
    heroSummary:
      "QA Engineer with experience in manual testing, Cypress automation and API validation. Focused on delivering quality in web applications and improving testing processes with automation and CI/CD practices.",
    openToWork: "Open to remote international opportunities",
    aboutTitle: "About me",
    aboutText:
      "Software QA professional with experience in Cypress automation, API testing and quality assurance for digital products.",
    certification: "Certifications",
    learning: "Currently Learning",
    experience: "Experience",
    projects: "QA Projects",
    knowledge: "Knowledge and Tools",
    skills: "Skills",
    learnings: [
      {
        title: "DevOps Formation",
        description: "DevOps professional training focused on CI/CD, Docker, pipelines and cloud.",
        selector: ".learning .card:nth-of-type(1)",
      },
      {
        title: "Frontend Development",
        description: "Frontend training at Origamid: HTML, CSS, JavaScript and modern interfaces.",
        selector: ".learning .card:nth-of-type(2)",
      },
    ],
    jobs: [
      {
        title: "Testing Senior Specialist - NTT DATA",
        date: "2025 - Present",
        description: "Manual testing, Cypress automation, API testing and CI/CD pipeline validation.",
        selector: "#exp .job:nth-of-type(1)",
      },
      {
        title: "QA Analyst - WayCarbon",
        date: "2023 - 2024",
        description: "BDD scenarios, exploratory testing and regression testing in ESG platform.",
        selector: "#exp .job:nth-of-type(2)",
      },
      {
        title: "Software Quality Analyst - CWI Software",
        date: "2022 - 2023",
        description: "Mobile testing.",
        selector: "#exp .job:nth-of-type(3)",
      },
      {
        title: "Software Tester - Senior Sistemas",
        date: "2021 - 2023",
        description: "Test automation.",
        selector: "#exp .job:nth-of-type(4)",
      },
    ],
    projectList: [
      {
        title: "Automation E2E Cypress",
        description: "Complete purchase flow automation using Page Objects and BDD.",
        selector: "#projects .cards > a:nth-of-type(1)",
      },
      {
        title: "API Testing",
        description: "REST API validation using Postman, collections and automated checks.",
        selector: "#projects .cards > a:nth-of-type(2)",
      },
      {
        title: "Test Strategy",
        description: "Complete test plan and strategy for fintech application.",
        selector: "#projects .cards > .card:last-child",
      },
    ],
    footer: "© 2026 — Developed by Tiele Fernandes 🧪",
    cv: {
      text: "Resume in PDF",
      href: "cv-en.pdf",
    },
    hire: "Let's work together ->",
  },
};

/**
 * Unified function to set text content in DOM elements
 * @param {string} selector - ID (#id) or CSS selector
 * @param {string} value - Text content to set
 * @param {boolean} useId - If true, uses getElementById; if false, uses querySelector
 */
function setText(selector, value, useId = true) {
  const element = useId 
    ? document.getElementById(selector) 
    : document.querySelector(selector);
  if (element) {
    element.innerText = value;
  }
}

/**
 * Updates all language-dependent elements on the page
 * @param {string} lang - Language code ('pt-br' or 'en')
 */
function setLang(lang) {
  const selectedLang = translations[lang] ? lang : "pt-br";
  const t = translations[selectedLang];

  localStorage.setItem("lang", selectedLang);
  document.documentElement.lang = t.htmlLang;

  // Update language buttons
  if (ptBtn && enBtn) {
    ptBtn.classList.toggle("active", selectedLang === "pt-br");
    enBtn.classList.toggle("active", selectedLang === "en");
  }

  // Update simple text elements by ID
  setText("navAbout", t.nav.about);
  setText("navExp", t.nav.exp);
  setText("navSkills", t.nav.skills);
  setText("navProjects", t.nav.projects);
  setText("title", t.title);
  setText("heroSummary", t.heroSummary);
  setText("openToWork", t.openToWork);
  setText("aboutTitle", t.aboutTitle);
  setText("aboutText", t.aboutText);
  setText("certTitle", t.certification);
  setText("learningTitle", t.learning);
  setText("expTitle", t.experience);
  setText("projectsTitle", t.projects);
  setText("knowledgeTitle", t.knowledge);
  setText("#skills h3", t.skills, false);

  // Update learnings
  t.learnings.forEach((learning) => {
    setText(`${learning.selector} .card-top h4`, learning.title, false);
    setText(`${learning.selector} .desc`, learning.description, false);
  });

  // Update jobs
  t.jobs.forEach((job) => {
    setText(`${job.selector} .job-header h4`, job.title, false);
    setText(`${job.selector} .date`, job.date, false);
    setText(`${job.selector} .job-desc`, job.description, false);
  });

  // Update projects
  t.projectList.forEach((project) => {
    setText(`${project.selector} .card-top h4`, project.title, false);
    setText(`${project.selector} .desc`, project.description, false);
  });

  // Update footer
  setText("footer", t.footer, false);

  // Update CV button
  const cvBtnMain = document.getElementById("cvBtnMain");
  if (cvBtnMain) {
    cvBtnMain.innerText = t.cv.text;
    cvBtnMain.href = t.cv.href;
  }

  // Update hire link
  const hireLink = document.getElementById("hireLink");
  if (hireLink) {
    hireLink.innerHTML = '<i class="fab fa-linkedin"></i> ' + t.hire;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "pt-br";
  setLang(savedLang);

  // Initialize reveal elements for scroll animation
  const reveals = document.querySelectorAll(".reveal");
  
  window.addEventListener("scroll", () => revealOnScroll(reveals));
  revealOnScroll(reveals); // Initial check for elements already in view
});


/**
 * Handles scroll reveal animation for elements with .reveal class
 * Elements become visible when they come within REVEAL_OFFSET pixels from bottom of viewport
 * @param {NodeList} reveals - Elements with .reveal class
 */
function revealOnScroll(reveals) {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - REVEAL_OFFSET) {
      el.classList.add("active");
    }
  });
}
