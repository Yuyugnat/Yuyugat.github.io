

document.getElementById('principal').addEventListener('mouseover', () => {
    let bigs = document.getElementsByClassName('big-ones');

    if (window.matchMedia('(orientation : landscape) and (min-width: 751px)').matches){

        for (let i = 0; i < 4; i++) {

            bigs[i].style.filter = 'blur(5px)';
    
        }
        
    }

});

document.getElementById('principal').addEventListener('mouseleave', () => {
    let bigs = document.getElementsByClassName('big-ones');

    if (window.matchMedia('(orientation : landscape) and (min-width: 751px)').matches){

        for (let i = 0; i < 4; i++) {

            bigs[i].style.filter = 'blur(0px)';
    
        }
        
    }

});