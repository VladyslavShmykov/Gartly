import {MANIFEST_TEMPLATE} from "./manifest-template.constant.js";

export function manifestSwitcherFn() {
    if (isManifestOpen) {
        document.body.removeChild(manifestTemplate);
        isManifestOpen = false;
    } else {
        document.body.appendChild(manifestTemplate);
        isManifestOpen = true;
    }
}

export function listSwitcher(liArray, index) {
    manifestDescription.innerText = descSwitcher(index);
    for (let i = 0; i < liArray.length; i++) {
        if (i === index) {
            liArray[i].classList.add('active-list-btn');
        } else {
            liArray[i].classList.remove('active-list-btn');
        }
    }
}

const descSwitcher = (idx) => {
    switch (idx) {
        case 0:
            return 'Unsere Setzlinge und Substrate kommen von Bauern und Gärtnereien aus Ihrer Umgebung. Kürzere Lieferketten und die Stärkung des lokalen Marktes sind das Ergebnis.'
        case 1:
            return 'Wir möchten den nächsten Generationen eine Welt hinterlassen, in der ein erfülltes Leben möglich ist. Eine Möglichkeit durch das Produkt das Umwelt-KnowHow an Eure Kinder zu geben.'
        case 2:
            return 'Flory benötigt keine Einwegkapseln mit den Samen, die nach der Verwendung wieder weggeschmiessen werden.' +
                '\n' + '\n' +
                'Auch die Usables entsprechen dem Minimal-Waste-Gedanken, so können die Wachstumskapseln mehrfach benutzt werden, das Substrat ist abbaubar und kann einfach ausgewechselt werden. '
    }
}

let isManifestOpen;
export const manifestTemplate = document.createElement('div');
manifestTemplate.classList.add('manifest-page', 'flex', 'jcsb');
manifestTemplate.innerHTML = MANIFEST_TEMPLATE

const manifestDescription = manifestTemplate.querySelector('p#description');