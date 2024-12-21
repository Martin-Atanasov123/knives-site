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
        // cspell:disable-next-line
        title: "Здравейте",
        // cspell:disable-next-line
        description: "Ние сме професионални заточвачи...",
        // cspell:disable-next-line
        galleryTitle: "Галерия",
        galleryDescription: "Lorem ipsum...",
        // cspell:disable-next-line
        priceTitle: "Ценоразпис",
        // cspell:disable-next-line
        priceDescription: "Критерии за оценяване...",
        // cspell:disable-next-line
        button: "Смени езика"
    },
    en: {
        title: "Hello",
        description: "We are professional sharpeners...",
        galleryTitle: "Gallery",
        galleryDescription: "Lorem ipsum...",
        priceTitle: "Price List",
        priceDescription: "Criteria for evaluating...",
        button: "Change Language"
    }
};

let currentLanguage = "en";

const buttonElement = document.getElementById("language-toggle");
const titleElement = document.getElementById("title");
const descriptionElement = document.querySelector(".introduction p");
const galleryTitleElement = document.querySelector(".gallery h2");
const galleryDescriptionElement = document.querySelector(".gallery p");
const priceTitleElement = document.querySelector(".price-list h2");
const priceDescriptionElement = document.querySelector(".price-list p");

buttonElement.addEventListener("click", () => {
    currentLanguage = currentLanguage === "bg" ? "en" : "bg";

    titleElement.textContent = translations[currentLanguage].title;
    descriptionElement.textContent = translations[currentLanguage].description;
    galleryTitleElement.textContent = translations[currentLanguage].galleryTitle;
    galleryDescriptionElement.textContent = translations[currentLanguage].galleryDescription;
    priceTitleElement.textContent = translations[currentLanguage].priceTitle;
    priceDescriptionElement.textContent = translations[currentLanguage].priceDescription;
    buttonElement.textContent = translations[currentLanguage].button;
});



