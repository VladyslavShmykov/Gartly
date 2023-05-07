import {langSwitcherDe, langSwitcherEn} from "./event-listeners.js";

switch (document.documentElement.lang) {
    case 'de':
        langSwitcherDe.classList.add('active-lang');
        break;
    case 'en':
        langSwitcherEn.classList.add('active-lang');
        break;
    default:
        langSwitcherDe.classList.add('active-lang');
}