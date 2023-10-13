// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali da 1 a 100 per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// Suggerimenti:
// Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array

const askedEl = [];

const askBtn = document.querySelector('button');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

askBtn.addEventListener('click', function(){
    const ask = document.querySelector('input').value;
    for (let i = 0; i < parseInt(ask); i++){
        askedEl.push(getRndInteger(1, 100));
        console.log(askedEl);
    } 
    let number = document.querySelector('div');
    number.innerHTML = askedEl.slice(askedEl.length - 5, askedEl.length);  
})
