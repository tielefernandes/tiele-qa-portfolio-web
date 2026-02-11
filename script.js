const ptBtn = document.getElementById("ptBtn");
const enBtn = document.getElementById("enBtn");

function setLang(lang) {

    // salva idioma no navegador
    localStorage.setItem("lang", lang);

    // remove ativo dos dois
    ptBtn.classList.remove("active");
    enBtn.classList.remove("active");

    // adiciona ativo no selecionado
    if (lang === "pt") {
        ptBtn.classList.add("active");
    } else {
        enBtn.classList.add("active");
    }

    // ===== TRADUÇÕES =====

    if (lang === "en") {
        document.getElementById("title").innerText = "Software QA Engineer";
        document.getElementById("summary").innerText =
            "QA Engineer with experience in manual testing, automation and API testing.";

        document.getElementById("aboutTitle").innerText = "About me";
        document.getElementById("aboutText").innerText =
            "Software QA professional with experience in Cypress automation, API testing and quality assurance.";

        document.getElementById("expTitle").innerText = "Experience";

        document.getElementById("cvBtn2").innerText = "Download Resume";
        document.getElementById("cvBtn2").href = "cv-en.pdf";
    }

    if (lang === "pt") {
        document.getElementById("title").innerText = "Analista de Qualidade de Software";
        document.getElementById("summary").innerText =
            "QA Engineer com experiência em testes manuais, automação e testes de API.";

        document.getElementById("aboutTitle").innerText = "Sobre mim";
        document.getElementById("aboutText").innerText =
            "Profissional de QA com experiência em automação Cypress, testes de API e garantia de qualidade.";

        document.getElementById("expTitle").innerText = "Experiência";

        document.getElementById("cvBtn2").innerText = "Baixar CV";
        document.getElementById("cvBtn2").href = "cv-pt.pdf";
    }
}

// ⭐ quando abrir o site, carregar idioma salvo
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "pt";
    setLang(savedLang);
});
