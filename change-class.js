
document.getElementById('principal').addEventListener('mouseover', () => {
    let bigs = document.getElementsByClassName('big-ones');

    for (let i = 0; i < 4; i++) {

        bigs[i].style.filter = 'blur(5px)';

    }
});

document.getElementById('principal').addEventListener('mouseleave', () => {
    let bigs = document.getElementsByClassName('big-ones');

    for (let i = 0; i < 4; i++) {

        bigs[i].style.filter = 'blur(0px)';

    }
});

let boutons = document.getElementsByClassName('bouton');

boutons[0].addEventListener('click', () => {
    let a = document.getElementById('projets-finis');

    switch (a.style.borderRadius) {

        case '5em':
            a.style.borderRadius = '5em 0 0 0';
            a.style.width = '47.5%';
            a.style.height = '46%';
            a.style.zIndex = '0';
            boutons[0].style.top = '';
            boutons[0].style.left = '';
            boutons[0].style.transform = '';
            a.childNodes[1].style.top = '';
            a.childNodes[1].style.borderBottom = '';
            a.childNodes[1].style.height = '';
            break;

        default:
            a.style.borderRadius = '5em';
            a.style.zIndex = '5';
            a.style.height = '96%';
            a.style.width = '97%';
            boutons[0].style.top = '3vmin';
            boutons[0].style.left = '3vmin';
            boutons[0].style.transform = 'rotate(-405deg)';
            a.childNodes[1].style.top = '0';
            a.childNodes[1].style.borderBottom = 'solid 2px #0007';
            a.childNodes[1].style.height = '10%';
            break;
    }

});

boutons[1].addEventListener('click', () => {
    let a = document.getElementById('projets');

    switch (a.style.borderRadius) {

        case '5em':
            a.style.borderRadius = '0 5em 0 0';
            a.style.width = '47.5%';
            a.style.height = '46%';
            a.style.zIndex = '0';
            boutons[1].style.top = '';
            boutons[1].style.left = '';
            boutons[1].style.transform = '';
            a.childNodes[1].style.top = '';
            a.childNodes[1].style.borderBottom = '';
            a.childNodes[1].style.height = '';
            break;

        default:
            a.style.borderRadius = '5em';
            a.style.zIndex = '5';
            a.style.height = '96%';
            a.style.width = '97.1%';
            boutons[1].style.top = '3vmin';
            boutons[1].style.left = 'calc(100% - 13vmin)';
            boutons[1].style.transform = 'rotate(405deg)';
            a.childNodes[1].style.top = '0';
            a.childNodes[1].style.borderBottom = 'solid 2px #0007';
            a.childNodes[1].style.height = '10%';
            break;
    }

});

boutons[2].addEventListener('click', () => {
    let a = document.getElementById('reseaux');

    switch (a.style.borderRadius) {

        case '5em':
            a.style.borderRadius = '0 0 0 5em';
            a.style.width = '47.5%';
            a.style.height = '46%';
            a.style.zIndex = '0';
            boutons[2].style.top = '';
            boutons[2].style.left = '';
            boutons[2].style.transform = '';
            a.childNodes[1].style.top = '';
            a.childNodes[1].style.borderBottom = '';
            a.childNodes[1].style.height = '';
            break;

        default:
            a.style.borderRadius = '5em';
            a.style.zIndex = '5';
            a.style.height = '96%';
            a.style.width = '97.1%';
            boutons[2].style.top = '3vmin';
            boutons[2].style.left = '3vmin';
            boutons[2].style.transform = 'rotate(-405deg)';
            a.childNodes[1].style.top = '0';
            a.childNodes[1].style.borderBottom = 'solid 2px #0007';
            a.childNodes[1].style.height = '10%';
            break;
    }

});

boutons[3].addEventListener('click', () => {
    let a = document.getElementById('autre');

    switch (a.style.borderRadius) {

        case '5em':
            a.style.borderRadius = '0 0 5em 0';
            a.style.width = '47.5%';
            a.style.height = '46%';
            a.style.zIndex = '0';
            boutons[3].style.top = '';
            boutons[3].style.left = '';
            boutons[3].style.transform = '';
            a.childNodes[1].style.top = '';
            a.childNodes[1].style.borderBottom = '';
            a.childNodes[1].style.height = '';
            break;

        default:
            a.style.borderRadius = '5em';
            a.style.zIndex = '5';
            a.style.height = '96%';
            a.style.width = '97.1%';
            boutons[3].style.top = '3vmin';
            boutons[3].style.left = 'calc(100% - 13vmin)';
            boutons[3].style.transform = 'rotate(405deg)';
            a.childNodes[1].style.top = '0';
            a.childNodes[1].style.borderBottom = 'solid 2px #0007';
            a.childNodes[1].style.height = '10%';
            break;
    }

});

let num = document.getElementById('num');

num.addEventListener('click', () => {

    navigator.clipboard.writeText(num.innerText);
    alert('Numéro de téléphone copié');
    
});

let email = document.getElementById('email');

email.addEventListener('click', () => {

    navigator.clipboard.writeText(email.innerText);
    
    
});
