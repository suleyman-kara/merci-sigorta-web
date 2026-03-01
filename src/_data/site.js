export default {
    // Base URL for the site
    url: "https://www.mercisigorta.com",

    // Contact
    phone: "+905334925454",
    phoneDisplay: "+90 533 492 54 54",
    email: "info@mercisigorta.com",
    whatsapp: "905334925454",

    // Social Media
    instagram: "https://instagram.com/mercisigorta",
    facebook: "https://facebook.com/mercisigorta",
    telegram: "https://t.me/mercisigorta",

    // Map
    mapUrl: "https://maps.google.com/maps?q=Erdemli+Mersin+Turkey",

    // Address
    address: {
        street: "Çeşmeli Mah. Sahil 1 Cad.",
        building: "Liparis 5 Sitesi No: 6NA",
        locality: "Erdemli / Mersin, Türkiye",
        // Schema.org fields
        city: "Erdemli",
        region: "Mersin",
        country: "TR",
    },

    // Business
    name: "Merci Sigorta & Danışmanlık",
    logoUrl: "/img/new_logo.webp",

    // Opening Hours
    openingHours: {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
    },

    // Languages & target countries
    defaultLang: "ru",
    languages: ["ru", "tr", "en"],
    langUrls: {
        ru: "/ru/",
        tr: "/tr/",
        en: "/en/",
    },
    // hreflang mappings: lang-country → language URL
    hreflangMap: [
        { hreflang: "ru", url: "/ru/" },
        { hreflang: "ru-RU", url: "/ru/" },
        { hreflang: "ru-BY", url: "/ru/" },
        { hreflang: "ru-KZ", url: "/ru/" },
        { hreflang: "ru-KG", url: "/ru/" },
        { hreflang: "ru-UZ", url: "/ru/" },
        { hreflang: "tr-TR", url: "/tr/" },
        { hreflang: "en", url: "/en/" },
        { hreflang: "en-AZ", url: "/en/" },
        { hreflang: "x-default", url: "/ru/" },
    ],
};
