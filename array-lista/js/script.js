// Abbiamo un frigorifero pieno di frutta:
// 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
// Fasi
// 1. creare l'array con la frutta del frigorifero
// 2. aggiungere la pesca all'array della frutta
// 3. verificare se nell'array di frutta c'è il cocomero:
//    - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"

const frutta = [
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'mandarino',
    'cocomero',
    'limone',
    'fragola'
];

frutta.push('pesca');

const frigo = document.getElementById('fridge');

const checkBtn = document.querySelector('button');

let found = false;

checkBtn.addEventListener ('click', function(){
    for (let i = 0; i < frutta.length; i++){
        let listaFrutta = document.createElement('li')
        frigo.append(listaFrutta);
        listaFrutta.innerHTML = frutta[i];
        const cocomero = 6;
        if (i === cocomero){
            found = true;
            frutta.splice(6, cocomero);
        }  
    }
    let text = document.getElementById('cocomero');
    if (found) {
        text.innerText = 'Il cocomero è in frigo';
    } else {
        text.innerText = 'Il cocomero non è in frigo';
    }
});
