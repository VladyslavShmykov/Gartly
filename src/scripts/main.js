export function langSwitcher({target}) {
    document.documentElement.lang = target.textContent.toLowerCase();
    localStorage.setItem('lang', target.textContent.toLowerCase());
    const langSwitcherButtonsArr = document.getElementsByClassName('lang-switcher');
    for (let element of langSwitcherButtonsArr) {
        element.classList.remove('active-lang');
    }
    target.classList.add('active-lang');
}

export const menuOpener = ({classList}) => {
    if (classList.contains('opened')) {
        classList.remove('opened');
    } else {
        classList.add('opened');
    }
};