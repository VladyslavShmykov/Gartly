import {langSwitcher} from "./main.js";
import {listSwitcher, manifestSwitcherFn, manifestTemplate} from "./manifest/manifest.js";

export const langSwitcherDe = document.getElementById('lang-switcher-de');
langSwitcherDe.addEventListener('click', (ev) => langSwitcher(ev));

export const langSwitcherEn = document.getElementById('lang-switcher-en');
langSwitcherEn.addEventListener('click', (ev) => langSwitcher(ev));

const openManifestMobile = document.getElementById('open-manifest-mobile');
const twoSectionBody = document.getElementById('two-section-body');
if (openManifestMobile) {
    openManifestMobile.addEventListener('click', () => manifestSwitcherFn(twoSectionBody));
}

const openManifest = document.getElementById('open-manifest');
openManifest.addEventListener('click', () => manifestSwitcherFn());

const closeBtn = manifestTemplate.querySelector('button#close-manifest');
closeBtn.addEventListener('click', () => manifestSwitcherFn());

const manifestListButtons = manifestTemplate.querySelectorAll('li.list-button');
manifestListButtons.forEach((li, index) => li.addEventListener('click', () => listSwitcher(manifestListButtons, index)))