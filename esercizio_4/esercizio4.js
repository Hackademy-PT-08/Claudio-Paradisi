//esercizio 1
// let imput = parseInt(prompt(`inserisci un numero`))
// function check (Num) {
//     let result;
//     if (imput < 0) {
//         result = `numero negativo`
//     } if (imput == 0 ) {
//         result = `il numero è zero`
//     } else if (imput >= 1 ){
//         result =`il numero è positivo`
//     } 
//      return result;
// }

// let final = check(imput)
// console.log(final)

//esercizio 2

// let input = parseInt(prompt(`inserisci un numero`))
// let input_1 = parseInt(prompt(`inserisci un altro numero`))

// function check(Num1,Num2) {
//     let result;
//     if(input === input_1) {
//     result = true
// } else {
//   result = false
// } return result}

// let final = check(input, input_1)
// console.log(final)

//esercizio 3
// let input 
// function contaLettera(frase, lettera){
//     let conteggio = 0
// for(let i = 0; i < frase.length; i++)

// switch(frase.charAt(i)){
//     case lettera : conteggio += 1
// }return conteggio
// }

// input =contaLettera(prompt(`scrivi qualcosa e vedi di funzionare dio buono`), `l`)
// console.log(input)

// esercizio 4


// let area;

// function calculateArea(raggio, precision){
    
//     let area = Math.pow(raggio, 2) * Math.PI
    
//     return area, 
// }

// area=calculateArea(5)
// console.log(area)
//non ho la minima idea di come far mettere il parametro in ingresso precision

//esercizio 5

// function calcoloFantavoto(baseVoto, golFatti, assistEffettuati, AutogolFatti, Ammonizioni, Espulsioni ){
//     let gol = golFatti * 3
//     let assist = assistEffettuati
//     let autogol = AutogolFatti * 2
//     let ammonizione = 0
//     let espulsione = 0

//     if(Ammonizioni == true) {
//         ammonizione = 0.5
//     }
//     if(Espulsioni == true) {
//         espulsione = 1
//     } 
//     let bonus = gol + assist
//     let malus = autogol + ammonizione + espulsione

//     let votoFinale = baseVoto + (bonus - malus)

//     return votoFinale
//     }

//     let Immobile = calcoloFantavoto(7,1,2,0,true,false)
//     console.log(Immobile)
//     let Berardi = calcoloFantavoto(6,1,0,1,false,true)
//     console.log(Berardi)


//esercizio 6

// function NumeroTiri (tiri) {
//     let max = 6
//     let min = 1
//     let score = Math.floor((Math.random() * (max - min + 1)  + min) * tiri)
//     return `il tuo punteggio è ${score}`
// }

// let punteggio = NumeroTiri(3)
// console.log(punteggio)

//


