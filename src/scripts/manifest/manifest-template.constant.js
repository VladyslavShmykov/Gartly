export const MANIFEST_TEMPLATE = `
    <header class="header logo-header w50p manifest-header">
        <p class="logo uppercase f-size24 pl20px flex jcc aifs">gärtly</p>
        <p class="greetings uppercase text-center flex jcc border-white">der smarte garten für dein zuhause</p>
    </header>
    
    <div class="manifest-body flex f-row f-grow1">
        <ul class="btn-container">
            <li class="list-button active-list-btn uppercase f-size16">kreiswirtschaft unterstützen</li>
            <li class="list-button uppercase f-size16">wissen teilen</li>
            <li class="list-button uppercase f-size16">minimal waste fördern</li>
        </ul>
        <p id="description" class="manifest-description f-size36">Unsere Setzlinge und Substrate kommen von Bauern und Gärtnereien aus Ihrer Umgebung. 
            Kürzere Lieferketten und die Stärkung des lokalen Marktes sind das Ergebnis.</p>
    </div>

    <button id="close-manifest" class="close-btn f-size24 uppercase w50p manifest-header text-start">manifest</button>
`