const ptBtn = document.getElementById("ptBtn");
const enBtn = document.getElementById("enBtn");

const translations = {
  "pt-br": {
    htmlLang: "pt-BR",
    navAbout: "Sobre",
    navExp: "Experiencia",
    navSkills: "Habilidades",
    navProjects: "Projetos",
    title: "QA Engineer | Automação de Testes | Testes de API",
    heroSummary:
      "QA Engineer com experiencia em testes manuais, Automação com Cypress e validacao de APIs. Focada em qualidade para aplicacoes web e melhoria continua com Automação e praticas de CI/CD.",
    openToWork: "Disponivel para oportunidades internacionais remotas",
    aboutTitle: "Sobre mim",
    aboutText:
      "Profissional de Qualidade de Software com experiencia em Automação Cypress, testes de API e garantia de qualidade em produtos digitais.",
    certTitle: "Certificacoes",
    learningTitle: "Aprendendo atualmente",
    expTitle: "Experiencia",
    projectsTitle: "Projetos QA",
    knowledgeTitle: "Conhecimentos e Ferramentas",
    skillsTitle: "Habilidades",
    learningDevopsTitle: "Formação DevOps",
    learningDevopsDesc:
      "Formação profissional em DevOps focada em CI/CD, Docker, pipelines e cloud.",
    learningFrontendTitle: "Desenvolvimento Frontend",
    learningFrontendDesc:
      "Formação em Frontend na Origamid: HTML, CSS, JavaScript e interfaces modernas.",
    expJob1Title: "Testing Senior Specialist - NTT DATA",
    expJob1Date: "2025 - Atual",
    expJob1Desc:
      "Testes manuais, Automação com Cypress, testes de API e validacao de pipelines CI/CD.",
    expJob2Title: "Analista de QA - WayCarbon",
    expJob2Date: "2023 - 2024",
    expJob2Desc:
      "Cenarios BDD, testes exploratorios e regressivos na plataforma ESG.",
    expJob3Title: "Analista de Qualidade de Software - CWI Software",
    expJob3Date: "2022 - 2023",
    expJob3Desc: "Testes mobile.",
    expJob4Title: "Software Tester - Senior Sistemas",
    expJob4Date: "2021 - 2023",
    expJob4Desc: "Automação de testes.",
    proj1Title: "Automação E2E com Cypress",
    proj1Desc:
      "Automação completa do fluxo de compra usando Page Objects e BDD.",
    proj2Title: "Testes de API",
    proj2Desc:
      "Validacao de APIs REST usando Postman, collections e checks automatizados.",
    proj3Title: "Estrategia de Testes",
    proj3Desc:
      "Plano e estrategia completa de testes para aplicacao fintech.",
    footerText: "(c) 2026 - Tiele Fernandes",
    cvText: "Baixar CV",
    cvHref: "cv-pt.pdf",
    hireText: "Vamos trabalhar juntos ->",
  },
  en: {
    htmlLang: "en",
    navAbout: "About",
    navExp: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    title: "QA Engineer | Test Automation | API Testing",
    heroSummary:
      "QA Engineer with experience in manual testing, Cypress automation and API validation. Focused on delivering quality in web applications and improving testing processes with automation and CI/CD practices.",
    openToWork: "Open to remote international opportunities",
    aboutTitle: "About me",
    aboutText:
      "Software QA professional with experience in Cypress automation, API testing and quality assurance for digital products.",
    certTitle: "Certifications",
    learningTitle: "Currently Learning",
    expTitle: "Experience",
    projectsTitle: "QA Projects",
    knowledgeTitle: "Knowledge and Tools",
    skillsTitle: "Skills",
    learningDevopsTitle: "DevOps Formation",
    learningDevopsDesc:
      "DevOps professional training focused on CI/CD, Docker, pipelines and cloud.",
    learningFrontendTitle: "Frontend Development",
    learningFrontendDesc:
      "Frontend training at Origamid: HTML, CSS, JavaScript and modern interfaces.",
    expJob1Title: "Testing Senior Specialist - NTT DATA",
    expJob1Date: "2025 - Present",
    expJob1Desc:
      "Manual testing, Cypress automation, API testing and CI/CD pipeline validation.",
    expJob2Title: "QA Analyst - WayCarbon",
    expJob2Date: "2023 - 2024",
    expJob2Desc:
      "BDD scenarios, exploratory testing and regression testing in ESG platform.",
    expJob3Title: "Software Quality Analyst - CWI Software",
    expJob3Date: "2022 - 2023",
    expJob3Desc: "Mobile testing.",
    expJob4Title: "Software Tester - Senior Sistemas",
    expJob4Date: "2021 - 2023",
    expJob4Desc: "Test automation.",
    proj1Title: "Automation E2E Cypress",
    proj1Desc:
      "Complete purchase flow automation using Page Objects and BDD.",
    proj2Title: "API Testing",
    proj2Desc:
      "REST API validation using Postman, collections and automated checks.",
    proj3Title: "Test Strategy",
    proj3Desc:
      "Complete test plan and strategy for fintech application.",
    footerText: "(c) 2026 - Tiele Fernandes",
    cvText: "Download CV",
    cvHref: "cv-en.pdf",
    hireText: "Let's work together ->",
  },
};

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.innerText = value;
  }
}

function setTextBySelector(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerText = value;
  }
}

function setLang(lang) {
  const selectedLang = translations[lang] ? lang : "pt-br";
  const t = translations[selectedLang];

  localStorage.setItem("lang", selectedLang);
  document.documentElement.lang = t.htmlLang;

  if (ptBtn && enBtn) {
    ptBtn.classList.toggle("active", selectedLang === "pt-br");
    enBtn.classList.toggle("active", selectedLang === "en");
  }

  setText("navAbout", t.navAbout);
  setText("navExp", t.navExp);
  setText("navSkills", t.navSkills);
  setText("navProjects", t.navProjects);
  setText("title", t.title);
  setText("heroSummary", t.heroSummary);
  setText("openToWork", t.openToWork);
  setText("aboutTitle", t.aboutTitle);
  setText("aboutText", t.aboutText);
  setText("certTitle", t.certTitle);
  setText("learningTitle", t.learningTitle);
  setText("expTitle", t.expTitle);
  setText("projectsTitle", t.projectsTitle);
  setText("knowledgeTitle", t.knowledgeTitle);
  setTextBySelector("#skills h3", t.skillsTitle);
  setTextBySelector(".learning .card:nth-of-type(1) .card-top h4", t.learningDevopsTitle);
  setTextBySelector(".learning .card:nth-of-type(1) .desc", t.learningDevopsDesc);
  setTextBySelector(".learning .card:nth-of-type(2) .card-top h4", t.learningFrontendTitle);
  setTextBySelector(".learning .card:nth-of-type(2) .desc", t.learningFrontendDesc);
  setTextBySelector("#exp .job:nth-of-type(1) .job-header h4", t.expJob1Title);
  setTextBySelector("#exp .job:nth-of-type(1) .date", t.expJob1Date);
  setTextBySelector("#exp .job:nth-of-type(1) .job-desc", t.expJob1Desc);
  setTextBySelector("#exp .job:nth-of-type(2) .job-header h4", t.expJob2Title);
  setTextBySelector("#exp .job:nth-of-type(2) .date", t.expJob2Date);
  setTextBySelector("#exp .job:nth-of-type(2) .job-desc", t.expJob2Desc);
  setTextBySelector("#exp .job:nth-of-type(3) .job-header h4", t.expJob3Title);
  setTextBySelector("#exp .job:nth-of-type(3) .date", t.expJob3Date);
  setTextBySelector("#exp .job:nth-of-type(3) .job-desc", t.expJob3Desc);
  setTextBySelector("#exp .job:nth-of-type(4) .job-header h4", t.expJob4Title);
  setTextBySelector("#exp .job:nth-of-type(4) .date", t.expJob4Date);
  setTextBySelector("#exp .job:nth-of-type(4) .job-desc", t.expJob4Desc);
  setTextBySelector("#projects .cards > a:nth-of-type(1) .card-top h4", t.proj1Title);
  setTextBySelector("#projects .cards > a:nth-of-type(1) .desc", t.proj1Desc);
  setTextBySelector("#projects .cards > a:nth-of-type(2) .card-top h4", t.proj2Title);
  setTextBySelector("#projects .cards > a:nth-of-type(2) .desc", t.proj2Desc);
  setTextBySelector("#projects .cards > .card:last-child .card-top h4", t.proj3Title);
  setTextBySelector("#projects .cards > .card:last-child .desc", t.proj3Desc);
  setTextBySelector("footer", t.footerText);

  const cvBtnMain = document.getElementById("cvBtnMain");
  if (cvBtnMain) {
    cvBtnMain.innerText = t.cvText;
    cvBtnMain.href = t.cvHref;
  }

  const hireLink = document.getElementById("hireLink");
  if (hireLink) {
    hireLink.innerHTML = '<i class="fab fa-linkedin"></i> ' + t.hireText;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "pt-br";
  setLang(savedLang);
});
