import {langSwitcherDe, langSwitcherEn} from "./event-listeners.js";

function initLang () {
    let lang = localStorage.getItem('lang');
    if (lang) {
        document.documentElement.lang = lang;
    } else {
        lang = document.documentElement.lang;
    }

    switch (lang) {
        case 'de':
            langSwitcherDe.classList.add('active-lang');
            break;
        case 'en':
            langSwitcherEn.classList.add('active-lang');
            break;
        default:
            langSwitcherDe.classList.add('active-lang');
    }
}
initLang();