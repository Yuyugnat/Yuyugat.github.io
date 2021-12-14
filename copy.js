let num = document.getElementById('num');

num.addEventListener('click', () => {

    navigator.clipboard.writeText(num.innerText);
    alert('Numéro de téléphone copié');
    
});

let email = document.getElementById('email');

email.addEventListener('click', () => {

    navigator.clipboard.writeText(email.innerText);
    alert('Adresse email copié');
    
});