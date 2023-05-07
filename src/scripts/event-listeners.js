import {langSwitcher} from "./main.js";

export const langSwitcherDe = document.getElementById('lang-switcher-de');
langSwitcherDe.addEventListener('click', (ev) => langSwitcher(ev));

export const langSwitcherEn = document.getElementById('lang-switcher-en');
langSwitcherEn.addEventListener('click', (ev) => langSwitcher(ev));