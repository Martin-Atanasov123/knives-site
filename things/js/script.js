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
        priceDescription: "Критерии за оценка на реставрацията на предмета. За всеки нож те са персонални и зависят от състоянието на самия нож и заявките на клиента, като впоследствие се изчислява колко ще струва всичко.",
        navHome: "Начало",
        navAboutUs: "За нас",
        navServices: "Услуги",
        navGalleryPrice: "Галерия / Ценa",
        navContact: "Контакт",
        seeMore: "ВИЖ ПОВЕЧЕ",
        visitGallery: "посетете",
        socialTitle: "Социални мрежи",
        facebook: "Фейсбук",
        instagram: "Инстаграм",
        linkedin: "Линкедин",
        navigationTitle: "Навигация",
        contactTitle: "Контакт",
        contactEmail: "Имейл: matanasov573@gmail.com",
        contactPhone: "Телефон: +359 87...",
        contactLocation: "Местоположение: Плевен, България",
        allRightsReserved: "Всички права запазени",
        createdBy: "_Създадено от <a href=\"mailto:matanasov573@gmail.com\">Мартин Атанасов</a>_",
        copyright: "Авторско право &copy; 2024 Заточвач"
    },
    en: {
        button: "Change Language",
        title: "Precision and Quality in Every Sharpening",
        aboutUs: "About us",
        description: "We are professional sharpeners who take care of your tools and knives with attention and precision.With many years of experience in the craft, our mission is to provide every customer with perfectly sharpened tools that work like new.Whether it’s household knives, professional tools, or specialized blades, you can trust us. We use only the highest quality methods and materials to ensure long-lasting and reliable results.",
        services: "Services",
        servicesdescription: "We offer a wide range of services for sharpening and restoring knives, scissors, and other tools. We use only the highest quality methods and materials to ensure long-lasting and reliable results.",
        galleryTitle: "Gallery",
        galleryDescription: "This is a little part of the examples of some of the cases that we had.",
        priceTitle: "Price",
        priceDescription: "Criteria for evaluating the restoration of the item. For each knife, they are personal and depend on the condition of the knife itself and the customer's requests, and subsequently it is calculated how much everything will cost.",
        navHome: "Home",
        navAboutUs: "About Us",
        navServices: "Services",
        navGalleryPrice: "Gallery / Price",
        navContact: "Contact",
        seeMore: "SEE MORE",
        visitGallery: "visit",
        socialTitle: "Social",
        facebook: "Facebook",
        instagram: "Instagram",
        linkedin: "Linkedin",
        navigationTitle: "Navigation",
        contactTitle: "Contact",
        contactEmail: "Email: matanasov573@gmail.com",
        contactPhone: "Phone: +359 87...",
        contactLocation: "Location: Pleven, Bulgaria",
        allRightsReserved: "All rights reserved",
        createdBy: "_Created by <a href=\"mailto:matanasov573@gmail.com\">Martin Atanasov</a>_",
        copyright: "Copyright &copy; 2024 Sharpener"
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

const navHomeElement = document.querySelector("nav ul li a[href='#section1']");
const navAboutUsElement = document.querySelector("nav ul li a[href='#section2']");
const navServicesElement = document.querySelector("nav ul li a[href='#section3']");
const navGalleryPriceElement = document.querySelector("nav ul li a[href='#section4']");
const navContactElement = document.querySelector("nav ul li a[href='#section6']");

const seeMoreElement = document.getElementById("seemore");

const socialTitleElement = document.querySelector(".Social h2");
const facebookElement = document.querySelector(".Social a[href*='facebook']");
const instagramElement = document.querySelector(".Social a[href*='instagram']");
const linkedinElement = document.querySelector(".Social a[href*='linkedin']");

const navigationTitleElement = document.querySelector(".navigation h2");

const contactTitleElement = document.querySelector(".contact h2");
const contactEmailElement = document.querySelector(".contact p:nth-of-type(1)");
const contactPhoneElement = document.querySelector(".contact p:nth-of-type(2)");
const contactLocationElement = document.querySelector(".contact p:nth-of-type(3)");
const allRightsReservedElement = document.querySelector(".contact p:nth-of-type(4)");

const createdByElement = document.querySelector("#creator p:nth-of-type(1)");
const copyrightElement = document.querySelector("#creator p:nth-of-type(2)");

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

    navHomeElement.textContent = translations[currentLanguage].navHome;
    navAboutUsElement.textContent = translations[currentLanguage].navAboutUs;
    navServicesElement.textContent = translations[currentLanguage].navServices;
    navGalleryPriceElement.textContent = translations[currentLanguage].navGalleryPrice;
    navContactElement.textContent = translations[currentLanguage].navContact;

    seeMoreElement.textContent = translations[currentLanguage].seeMore;

    socialTitleElement.textContent = translations[currentLanguage].socialTitle;
    facebookElement.textContent = translations[currentLanguage].facebook;
    instagramElement.textContent = translations[currentLanguage].instagram;
    linkedinElement.textContent = translations[currentLanguage].linkedin;

    navigationTitleElement.textContent = translations[currentLanguage].navigationTitle;

    contactTitleElement.textContent = translations[currentLanguage].contactTitle;
    contactEmailElement.textContent = translations[currentLanguage].contactEmail;
    contactPhoneElement.textContent = translations[currentLanguage].contactPhone;
    contactLocationElement.textContent = translations[currentLanguage].contactLocation;
    allRightsReservedElement.textContent = translations[currentLanguage].allRightsReserved;

    createdByElement.innerHTML = translations[currentLanguage].createdBy;
    copyrightElement.textContent = translations[currentLanguage].copyright;
});


