const SOCIAL_LINKDATAS = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/bazafoundation",
        iconName: "fa fa-fw fa-facebook",
    },
    {
        label: "Twitter",
        href: "https://twitter.com/BazaFoundation",
        iconName: "fa fa-fw fa-twitter",
    },
    {
        label: "Linkedin",
        href: "https://www.linkedin.com/company/bazafoundation/",
        iconName: "fa fa-fw fa-linkedin",
    },
    {
        label: "Reddit",
        href: "https://www.reddit.com/r/BazaFoundation/",
        iconName: "fa fa-fw fa-reddit",
    },
    {
        label: "Telegram",
        href: "https://t.me/bazafoundation",
        iconName: "fa fa-fw fa-telegram",
    },
    {
        label: "Discord",
        href: "https://discord.gg/De92vhVD2m",
        iconName: "fab fa-discord",
    },
    {
        label: "Youtube",
        href: "https://youtu.be/ObkuKcqjC_k",
        iconName: "fa fa-fw fa-youtube",
    },
];

const SITE_LINKDATAS = [
    { label: "Explorer", href: "https://explorer.baza.foundation" },
    {
        label: "GUI Wallet",
        href: "https://gitlab.ekata.io/baza-foundation/baza-fondo-wallet",
    },
    {
        label: "Coin Source",
        href: "https://gitlab.ekata.io/baza-foundation/baz-token",
    },
];

const EKATAIO_LINKS = [
    {
        label: "Payment Processor",
        href: "https://ekata.io",
    },
    {
        label: "Android and Desktop Miner",
        href: "https://gitlab.ekata.io/ekata-io-projects/ekata-pool-companion",
    },
];

const OTHER_LINKS = [
    {
        label: "Mining Pool Stats",
        href: "https://miningpoolstats.stream/bazacoin",
    },
];

function constructAndAppendFooterLinks(listClass, links) {
    const linksList = document.querySelector(listClass);
    links.forEach(function (item) {
        const linkListItem = document.createElement("li");
        if (item.hasOwnProperty("iconName")) {
            const icon = document.createElement("i");
            icon.setAttribute("class", item.iconName);
            linkListItem.appendChild(icon);
        }
        if (item.hasOwnProperty("href")) {
            const link = document.createElement("a");
            link.setAttribute("href", item.href);
            link.setAttribute("target", "_blank");
            link.innerText = item.label;
            linkListItem.appendChild(link);
        }
        linksList.appendChild(linkListItem);
    });
}

constructAndAppendFooterLinks(".social-links", SOCIAL_LINKDATAS);
constructAndAppendFooterLinks(".site-links", SITE_LINKDATAS);
constructAndAppendFooterLinks(".ekataio-links", EKATAIO_LINKS);
constructAndAppendFooterLinks(".other-links", OTHER_LINKS);
