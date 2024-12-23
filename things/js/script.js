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
        title: "Прецизност и качество във всяко заточване!",
        // cspell:disable-next-line
        description: "Ние сме професионални точила, които се грижат за вашите инструменти и ножове с внимание и прецизност.С дългогодишен опит в занаята, нашата мисия е да предоставим на всеки клиент перфектно заточени инструменти, които работят като нови.Независимо дали става дума за домакински ножове, професионални инструменти или специализирани остриета, можете да ни се доверите. Използваме само най-висококачествените методи иматериали за осигуряване на дълготрайни и надеждни резултати.",
        services: "Услуги",
        servicesdescriptionElement: "Ние предлагаме голям набор от услуги за заточване и поддръжка на инструменти, като се стремим да осигурим най-високо качество и дълготрайни резултати за всеки наш клиент.",
        // cspell:disable-next-line
        galleryTitle: "Галерия",
        galleryDescription: "Това е малка част от примерите за някои от случаите, които имахме.",
        // cspell:disable-next-line
        priceTitle: "Ценa",
        // cspell:disable-next-line
        priceDescription: "Критерии за оценка на реставрацията на предмета. За всеки нож те са персонални и зависят от състоянието на самия нож и заявките на клиента, като впоследствие се изчислява колко ще струва всичко.",
        // cspell:disable-next-line
        button: "Смени езика"
    },
    en: {
        title: "Precision and Quality in Every Sharpening",
        description: "We are professional sharpeners who take care of your tools and knives with attention and precision.With many years of experience in the craft, our mission is to provide every customer with perfectly sharpened tools that work like new.Whether it’s household knives, professional tools, or specialized blades, you can trust us. We use only the highest quality methods and materials to ensure long-lasting and reliable results.",
        services:"Services",
        servicesdescriptionElement: "We offer a wide range of services for sharpening and restoring knives, scissors, and other tools. We use only the highest quality methods and materials to ensure long-lasting and reliable results.",
        galleryTitle: "Gallery",
        galleryDescription: "This is a little part of the examples of some of the cases that we had.",
        priceTitle: "Price",
        priceDescription: "Criteria for evaluating the restoration of the item. For each knife, they are personal and depend on the condition of the knife itself and the customer's requests, and subsequently it is calculated how much everything will cost.",
        button: "Change Language"
    }
};

let currentLanguage = "en";

const buttonElement = document.getElementById("language-toggle");
const titleElement = document.getElementById("title");
const descriptionElement = document.querySelector(".introduction p");

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
    servicesElement.textContent = translations[currentLanguage].services;
    servicesdescriptionElement.textContent = translations[currentLanguage].description;
    galleryTitleElement.textContent = translations[currentLanguage].galleryTitle;
    galleryDescriptionElement.textContent = translations[currentLanguage].galleryDescription;
    priceTitleElement.textContent = translations[currentLanguage].priceTitle;
    priceDescriptionElement.textContent = translations[currentLanguage].priceDescription;
    buttonElement.textContent = translations[currentLanguage].button;
});     



