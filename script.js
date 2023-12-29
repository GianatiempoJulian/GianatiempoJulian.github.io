/*==INDEX==*/

let shapes_container = document.getElementById("shapes-of-colors");
let colors = ['#cacaca', '#a1a1a1', '#898989', '#818181', '#6c6c6c', '#535353', '#393939', '#252525'];

for (let i = 0; i < 8; i++) {
    var span = document.createElement("span");
    span.style.backgroundColor = colors[i];
    shapes_container.appendChild(span);
}

var text = document.createElement("p");
text.innerHTML = "BackEndDeveloper";
text.classList.add("subtitle");
shapes_container.appendChild(text);




/*==PROJECTS==*/

window.onload = function() {

    // Variables
    const $images = [
        'img/bakuganapi.jpg',
        'img/potrero.jpg',
        'img/myhg.jpg'
    ];

    const $titles = [
        'Bakugan API',
        'Potrero',
        'MyHG'
    ]

    const $languages = [
        'Laravel',
        'PHP',
        'HTML, CSS, JS'
    ]

    const $descriptions = [
        'A API for the toy game Bakugan. This API has the information of all the Bakugan toys, their release series (or sets) and their attributes.',
        'A website where you can save your football matches!',
        'Website for Dragon Ball HG Gashapon collectors. The reason for create this project is just practise my PHP and SQL abilities.'
    ]

    const $links = [
        'https://github.com/GianatiempoJulian/Bakugan-API',
        'https://github.com/GianatiempoJulian/Potrero',
        'https://github.com/GianatiempoJulian/myHG'
    ]

    let actualPosition = 0;
    let backward = document.getElementById('project-backward');
    let forward = document.getElementById('project-forward');
    let imagen = document.getElementById('project-img');
    let title = document.getElementById('project-title');
    let language = document.getElementById('project-language');
    let description = document.getElementById('project-text');
    let link = document.getElementById('project-link');

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function nextPicture() {
        if (actualPosition >= $images.length - 1) {
            actualPosition = 0;
        } else {
            actualPosition++;
        }
        renderImage();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function previousPicture() {
        if (actualPosition <= 0) {
            actualPosition = $images.length - 1;
        } else {
            actualPosition--;
        }
        renderImage();
    }

    function renderImage() {
        imagen.style.backgroundImage = `url(${$images[actualPosition]})`;
        title.innerHTML = $titles[actualPosition];
        language.innerHTML = $languages[actualPosition];
        description.innerHTML = $descriptions[actualPosition];
        link.href = $links[actualPosition];
    }

    // Eventos
    forward.addEventListener('click', nextPicture);
    backward.addEventListener('click', previousPicture);
    // Iniciar
    renderImage();
}

/*==MUSIC PLAYER==*/



// Variables
const $images = [
    'img/linkedin_disc.png',
    'img/github_disc.png',
    'img/mail_disc.png'
];

const $now_playing = [
    'Now Playing - Linkedin',
    'Now Playing - Github',
    'Now Playing - Mail Me'
]

const $media_redirection = [
    'https://www.linkedin.com/in/jgianatiempo/',
    'https://github.com/GianatiempoJulian',
    'mailto:gianatiempojulian@gmail.com'
]

let actualPosition = 0;
let backward = document.getElementById('backward');
let forward = document.getElementById('forward');
let imagen = document.getElementById('media-img');
let playing = document.getElementById('now-playing');
let redirection = document.getElementById('media-redirection');

// Funciones

/**
 * Funcion que cambia la foto en la siguiente posicion
 */
function nextPicture() {
    if (actualPosition >= $images.length - 1) {
        actualPosition = 0;
    } else {
        actualPosition++;
    }
    renderImage();
}

/**
 * Funcion que cambia la foto en la anterior posicion
 */
function previousPicture() {
    if (actualPosition <= 0) {
        actualPosition = $images.length - 1;
    } else {
        actualPosition--;
    }
    renderImage();
}

function renderImage() {
    imagen.style.backgroundImage = `url(${$images[actualPosition]})`;
    playing.innerHTML = $now_playing[actualPosition];
    redirection.href = $media_redirection[actualPosition];

}

// Eventos
forward.addEventListener('click', nextPicture);
backward.addEventListener('click', previousPicture);
// Iniciar
renderImage();