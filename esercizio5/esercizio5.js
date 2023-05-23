//esercizio 1

// const a =[54, 58, 69, 7, 35];
// const b =[25, 31, 75, 81, 12];

// console.log(a)
// console.log(b)
// function calculate(num, num_2) {

// return num + b[num_2]  
// }
 
// let c = a.map(calculate)

// console.log(c)

//esercizio 2

// let array1 = [`pera`, `arancia`, `lumaca`]

//     function check(value) {
//         return array1.indexOf(value) !== -1
//     }
// let input = prompt(`inserisci qualcosa`)
   

//    let result = check(input)
//    if (result) {
//     alert(`prodotto trovato `)
//    } else { alert(`prodotto non trovato`)}

//esercizio 3

// let array= [12, 15, -5, 15, 20, -23]


// function sumPositive(numeri ) {
//     let sum = 0
//      for(let i = 0; i < numeri.length; i++){
     
//    if (numeri[i] > 0){
//          sum += numeri[i]}
//    }return sum
// }
// let array2= [ -8, - 10, - 5, - 8]
// let result = sumPositive(array2)
// console.log(result)

//esercizio 4

let prodotti = [`Nintendo Switch`, `Playstation 5`,`Xbox Series X`,`Xbox Series S`, `Playstation 4 pro`, `Xbox One X`, `Nintendo Switch Oled`, `Nintendo switch Lite`]

function find(prodotto) {
      for(let i = 0; i < prodotti.lenght; i++) {
        if (!prodotti[i].toLowerCase().includes(prodotto)) {
            console.log(`${prodotto} non trovato`)
            continue;
        } if (prodotti[i].toLowerCase().includes(prodotto)){
            console.log(`${prodotto} trovato`)
        } return;
}}

let input = find(prompt(`cerca il tuo prodotto`))
console.log(input)

//esercizio da completare poiche ancora non funziona 