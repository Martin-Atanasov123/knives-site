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
        button: "Смени езика",

        title: "Прецизност и качество във всяко заточване!",

        aboutUs: "За нас",
        description: "Ние сме професионални точила, които се грижат за вашите инструменти и ножове с внимание и прецизност.С дългогодишен опит в занаята, нашата мисия е да предоставим на всеки клиент перфектно заточени инструменти, които работят като нови.Независимо дали става дума за домакински ножове, професионални инструменти или специализирани остриета, можете да ни се доверите. Използваме само най-висококачествените методи и материали за осигуряване на дълготрайни и надеждни резултати.",
        services: "Услуги",
        servicesdescription: "Предлагаме широка гама от услуги за заточване и възстановяване на ножове, ножици и други инструменти. Използваме само най-висококачествените методи и материали за осигуряване на дълготрайни и надеждни резултати.",

        galleryTitle: "Галерия",
        galleryDescription: "Това е малка част от примерите за някои от случаите, които имахме.",

        priceTitle: "Ценa",
        priceDescription: "Критерии за оценка на реставрацията на предмета. За всеки нож те са персонални и зависят от състоянието на самия нож и заявките на клиента, като впоследствие се изчислява колко ще струва всичко."

    },
    en: {
        button: "Change Language",

        title: "Precision and Quality in Every Sharpening",
        aboutUs: "About Us",
        description: "We are professional sharpeners who take care of your tools and knives with attention and precision.With many years of experience in the craft, our mission is to provide every customer with perfectly sharpened tools that work like new.Whether it’s household knives, professional tools, or specialized blades, you can trust us. We use only the highest quality methods and materials to ensure long-lasting and reliable results.",

        services:"Services",
        servicesdescription: "We offer a wide range of services for sharpening and restoring knives, scissors, and other tools. We use only the highest quality methods and materials to ensure long-lasting and reliable results.",

        galleryTitle: "Gallery",
        galleryDescription: "This is a little part of the examples of some of the cases that we had.",

        priceTitle: "Price",
        priceDescription: "Criteria for evaluating the restoration of the item. For each knife, they are personal and depend on the condition of the knife itself and the customer's requests, and subsequently it is calculated how much everything will cost."
        
    }
};

let currentLanguage = "en";

const buttonElement = document.getElementById("language-toggle");
const titleElement = document.getElementById("title");

const aboutUsElement = document.querySelector(".about-us h2");
const descriptionElement = document.querySelector(".about-us p");

const servicesElement = document.querySelector(".services h2");
const servicesdescriptionElement = document.querySelector(".services p");


const galleryTitleElement = document.querySelector(".gallery h2");
const galleryDescriptionElement = document.querySelector(".gallery p");

const priceTitleElement = document.querySelector(".price-list h2");
const priceDescriptionElement = document.querySelector(".price-list p");

buttonElement.addEventListener("click", () => {
    currentLanguage = currentLanguage === "bg" ? "en" : "bg";

    titleElement.textContent = translations[currentLanguage].title;
    descriptionElement.textContent = translations[currentLanguage].description;
    aboutUsElement.textContent = translations[currentLanguage].aboutUs;
    servicesElement.textContent = translations[currentLanguage].services;
    servicesdescriptionElement.textContent = translations[currentLanguage].servicesdescription;
    galleryTitleElement.textContent = translations[currentLanguage].galleryTitle;
    galleryDescriptionElement.textContent = translations[currentLanguage].galleryDescription;
    priceTitleElement.textContent = translations[currentLanguage].priceTitle;
    priceDescriptionElement.textContent = translations[currentLanguage].priceDescription;
    buttonElement.textContent = translations[currentLanguage].button;
});     



