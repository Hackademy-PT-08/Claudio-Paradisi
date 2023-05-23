// //esercizio 1: somma + media

let a = 10;
let b = 20;
let c = 35;
let d = 50;
let e = 70;

let sum = a + b + c + d + e;

console.log(sum)
let average = sum / 5

console.log(average)

//esercizio 2 : somma + media dati da utente esterno

let f = parseInt(prompt(`inserisci un numero`));
let g = parseInt(prompt(`inserisci un altro numero`));
let h = parseInt(prompt(`inserisci ancora un altro numero`));
let i = parseInt(prompt(`non demordere, siamo quasi alla fine: inserisci un altro numero`));
let j = parseInt(prompt(`un ultimo sforzo: inserisci un altro numero`));

let sumA = f + g + h + i + j;

let averageA = sumA / 5;

console.log( `congratulazioni questa è la somma dei numeri che hai scelto: ${sumA} e non è finita questa è la media dei numeri da te scelti: ${averageA} soddisfatto?` );

console.log(typeof sumA);

//esercizio 3: temperatura più alta e più bassa

let TempRoma = 25;
let TempNapoli = 29;
let TempMilano = 16;
let TempBari = 32;

let TempAlta = Math.max(TempRoma, TempNapoli, TempMilano, TempBari);
let TempBassa = Math.min(TempRoma, TempNapoli, TempMilano, TempBari);

console.log(`la temperatura più alta è: ${TempAlta}`);
console.log(`la temperatura più bassa è: ${TempBassa}`);

//esercizio 4: determinare anno di nascita e quanti anni ci vogliono per arrivare a 100

const annoCorrente = 2023;
let dataNascita = parseInt(prompt(`in che anno sei nat*?`));

let eta = annoCorrente - dataNascita;
let anniMancanti = 100 - eta;

console.log(`ciao! vedo che hai o vai per i ${eta} anni, te ne mancano solo ${anniMancanti} per raggiungere un secolo di età`);

//esercizio 5: controllare se il nome degli utenti è uguale

let utente_1 = prompt(`scegli il tuo nome utente`);
let utente_2 = prompt(`scegli il tuo nome utente`);

let check = utente_1 === utente_2;

console.log(check);

//esercizio 6: oscurare le cifre di un numero di telefono

let numeroTel = prompt(`inserisci il tuo numero di telefono`);

let risposta = numeroTel.slice(0,7).replace(/\d/g, '*');
let numeroVisibile = numeroTel.slice(7);
//console.log(risposta + numeroVisibile);
console.log(`tranquillo i tuoi dati sono oscurati, gli altri utenti vedranno il tuo numero cosi:${risposta}${numeroVisibile}`);

//esercizio 7: 44 gatti in fila per 6 col resto di 2

let totaleGatti = 44
let inFila = 6

let numeroFile = parseInt(totaleGatti / inFila);
let resto = totaleGatti % inFila;
let gattiMancanti = inFila - resto;

console.log(`${totaleGatti} gatti in fila per ${inFila} col resto di ${resto} viaggiavano compatti in fila per ${inFila} col resto di ${resto}, ${inFila} per ${numeroFile}: 42 più ${resto}: ${totaleGatti}`);

//esercizio 8: numero intero casuale da 1 a 6

 function getRandomInt(max) {
    return Math.floor(Math.random(1) * max);
  }
  
  console.log(getRandomInt(6));



