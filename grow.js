let bpr = document.getElementById('b-principal');
let bigpr = document.getElementById('principal');
let bprState = true;
bpr.addEventListener('click', () => {

    if (!bprState){
        bpr.classList.remove('grow-button');
        bpr.classList.add('grow-button-r');
        bprState = true;
    } else {
        bpr.classList.add('grow-button');
        bpr.classList.remove('grow-button-r');
        bprState = false;
    }
});

let bigpf = document.getElementById('projets-finis');
let bpf = document.getElementById('b-projets-finis');
let bpfState = true;
bpf.addEventListener('click', () => {

    bigpf.classList.toggle('big-bigs');
    bigpf.classList.toggle('normal-bigs');

    if (!bpfState){
        bpf.classList.remove('grow-button');
        bpf.classList.add('grow-button-r');

        bigpf.style.borderRadius = '';
        bigpf.style.zIndex = '0';

        bigpf.childNodes[3].style.bottom = '';

        bigpf.childNodes[1].style.top = '';
        bigpf.childNodes[1].style.height = '';
        bigpf.childNodes[1].style.borderBottom = 'solid 2px #0000';

        if (window.matchMedia('(orientation : landscape)').matches && window.matchMedia('(min-width: 751px)').matches) {

            bigpf.childNodes[3].style.bottom = '';

        } else {

            bigpf.style.top = '';
            for (let i = 0; i < 4; i++) {

                if (i !== 0){

                    document.getElementsByClassName('big-ones')[i].style.filter = 'blur(0px)';

                }
        
            }

            document.getElementById('principal').style.filter = 'blur(0px)';

        }

        bpfState = true;
    } else {
        bpf.classList.add('grow-button');
        bpf.classList.remove('grow-button-r');

        bigpf.style.borderRadius = '1.5em';
        bigpf.style.zIndex = '5';

        bigpf.childNodes[3].style.bottom = '3vh';

        bigpf.childNodes[1].style.top = '1vh';
        bigpf.childNodes[1].style.height = '11vh';
        bigpf.childNodes[1].style.borderBottom = 'solid 2px #0009';

        if (window.matchMedia('(orientation : landscape)').matches && window.matchMedia('(min-width: 751px)').matches) {

            

        } else {

            bigpf.style.top = '5vh';
            for (let i = 0; i < 4; i++) {

                if (i !== 0){

                    document.getElementsByClassName('big-ones')[i].style.filter = 'blur(5px)';

                }
        
            }

            document.getElementById('principal').style.filter = 'blur(5px)';

        }

        bpfState = false;
    }
});

let bigp = document.getElementById('projets');
let bp = document.getElementById('b-projets');
let bpState = true;
bp.addEventListener('click', () => {

    bigp.classList.toggle('big-bigs');
    bigp.classList.toggle('normal-bigs');

    if (!bpState){
        bp.classList.remove('grow-button');
        bp.classList.add('grow-button-r');

        bigp.style.borderRadius = '';
        bigp.style.zIndex = '0';

        bigp.childNodes[3].style.bottom = '';

        bigp.childNodes[1].style.top = '';
        bigp.childNodes[1].style.height = '';
        bigp.childNodes[1].style.borderBottom = 'solid 2px #0000';

        bpState = true;
    } else {
        bp.classList.add('grow-button');
        bp.classList.remove('grow-button-r');

        bigp.style.borderRadius = '1.5em';
        bigp.style.zIndex = '5';

        bigp.childNodes[3].style.bottom = '3vh';

        bigp.childNodes[1].style.top = '1vh';
        bigp.childNodes[1].style.height = '11vh';
        bigp.childNodes[1].style.borderBottom = 'solid 2px #0009';

        bpState = false;
    }
});

let bigr = document.getElementById('reseaux');
let br = document.getElementById('b-reseaux');
let brState = true;
br.addEventListener('click', () => {

    bigr.classList.toggle('big-bigs');
    bigr.classList.toggle('normal-bigs');

    if (!brState){
        br.classList.remove('grow-button');
        br.classList.add('grow-button-r');

        bigr.style.borderRadius = '';
        bigr.style.zIndex = '0';

        bigr.childNodes[3].style.bottom = '';

        bigr.childNodes[1].style.top = '';
        bigr.childNodes[1].style.height = '';
        bigr.childNodes[1].style.borderBottom = 'solid 2px #0000';

        brState = true;
    } else {
        br.classList.add('grow-button');
        br.classList.remove('grow-button-r');
        
        bigr.style.borderRadius = '1.5em';
        bigr.style.zIndex = '5';

        bigr.childNodes[3].style.bottom = '3vh';

        bigr.childNodes[1].style.top = '1vh';
        bigr.childNodes[1].style.height = '11vh';
        bigr.childNodes[1].style.borderBottom = 'solid 2px #0009';

        brState = false;
    }
});

let biga = document.getElementById('autre');
let ba = document.getElementById('b-autre');
let baState = true;
ba.addEventListener('click', () => {

    biga.classList.toggle('big-bigs');
    biga.classList.toggle('normal-bigs');

    if (!baState){
        ba.classList.remove('grow-button');
        ba.classList.add('grow-button-r');

        biga.style.borderRadius = '';
        biga.style.zIndex = '0';

        biga.childNodes[3].style.bottom = '';

        biga.childNodes[1].style.top = '';
        biga.childNodes[1].style.height = '';
        biga.childNodes[1].style.borderBottom = 'solid 2px #0000';

        baState = true;
    } else {
        ba.classList.add('grow-button');
        ba.classList.remove('grow-button-r');

        biga.style.borderRadius = '1.5em';
        biga.style.zIndex = '5';

        biga.childNodes[3].style.bottom = '3vh';

        biga.childNodes[1].style.top = '1vh';
        biga.childNodes[1].style.height = '11vh';
        biga.childNodes[1].style.borderBottom = 'solid 2px #0009';

        baState = false;
    }
});


