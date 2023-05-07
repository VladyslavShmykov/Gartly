export function langSwitcher({target}) {
    document.documentElement.lang = target.textContent.toLowerCase();
    const langSwitcherButtonsArr = document.getElementsByClassName('lang-switcher');
    for (let element of langSwitcherButtonsArr) {
        element.classList.remove('active-lang');
    }
    target.classList.add('active-lang');
}