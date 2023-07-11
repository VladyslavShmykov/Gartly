export function langSwitcher({target}) {
    document.documentElement.lang = target.textContent.toLowerCase();
    localStorage.setItem('lang', target.textContent.toLowerCase());
    const langSwitcherButtonsArr = document.getElementsByClassName('lang-switcher');
    for (let element of langSwitcherButtonsArr) {
        element.classList.remove('active-lang');
    }
    target.classList.add('active-lang');
}

export const menuOpener = (menu) => {
    console.log(menu);
    let isOpen = menu.classList.contains('opened');
    if (isOpen) {
        menu.classList.remove('opened');
    } else {
        menu.classList.add('opened');
    }
};