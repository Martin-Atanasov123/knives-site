// site.js

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});


const translations = {
    bg: {
        title: "Добре дошли!",
        description: "Това е примерен текст на български.",
        button: "Смени езика"
    },
    en: {
        title: "Welcome!",
        description: "This is a sample text in English.",
        button: "Change Language"
    }
};

let currentLanguage = "bg";

const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const buttonElement = document.getElementById("language-toggle");

buttonElement.addEventListener("click", () => {
    // Смени езика
    currentLanguage = currentLanguage === "bg" ? "en" : "bg";

    // Актуализирай текста
    titleElement.textContent = translations[currentLanguage].title;
    descriptionElement.textContent = translations[currentLanguage].description;
    buttonElement.textContent = translations[currentLanguage].button;
});
