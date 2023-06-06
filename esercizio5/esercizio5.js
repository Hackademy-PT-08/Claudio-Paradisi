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

// let archivio = [`Nintendo Switch`, `Playstation 5`,`Xbox Series X`,`Xbox Series S`, `Playstation 4 pro`, `Xbox One X`, `Nintendo Switch Oled`, `Nintendo switch Lite`];

// let input = prompt(`inserisci un prodotto`);

// ;
// function find(prodotto) {
// let archivioLower = archivio.map(archivio => archivio.toLowerCase());

// if(!archivioLower.includes(prodotto)){
//     return `${prodotto} non è presente in stock`
// } return `${prodotto} è presente in stock`
//     }

// let result = find(input)
// console.log(result)

//esercizio 5 

// const risultati =["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]
// console.log(risultati)
// //for(let i = 0; i < risultati.length; i++){

//     let result = risultati.map(el=>parseInt(el)));
//     console.log(result);
//     let vittorie = result.slice(0, 4);
//     console.log(vittorie);
//     let sconfitte =result.slice(5, 9);
//     console.log(sconfitte)
// //}
// function calcolaPunti(){ }
    
//troppo complicato sei una bestia di satana

//esercizio 6

// let frase = "Ciao sono un esercizio sui metodi degli array"

// function primaLettera (input){
//     let array =[]
//     const parole = input.split(` `) 
//     for(let i = 0; i < parole.length; i++){
//    // return(parole[i][0])}
//     array.push(parole[i][0])}
//     return array
// }
// let result = primaLettera(frase)
// console.log(result)

// //esercizio 7

// let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
// let myArray = myString.split(`+`);
// console.log(myArray);
// let arrayLength = myArray.length;
// console.log(arrayLength);
// let lastItem = myArray.slice(7);
// console.log(lastItem);

// //esercizio 8

// myArray.splice(6,2);
// console.log(myArray);
// myArray.push(`Luffy`, `Zoro`)
// console.log(myArray)
// myArray.splice(1,0,`Nami`,`Nico-Robin`)
// console.log()