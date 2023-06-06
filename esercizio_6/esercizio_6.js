//esercizio 1
// let canzoni = {
//     primaCanzone: [
//         {titolo: `In The End`,
//          nomeCantante: `Linkin Park`,
//          anno: 2002   
//     } 
//     ]
// }
// console.log(canzoni)

// canzoni.secondaCanzone = [
//     {
//         titolo: `Bring me to Life`,
//         nomeCantante: `Evanescence`,
//         anno: 2001
//     }
// ]

// console.log(canzoni)


//esercizio 2

// let rubrica = {

//     utente_1:
//     {
//         nome : `Claudio`,
//         cognome : `Paradisi`,
//         email : `a@a.it`,
//         telefono : 34758245689,
//         info:  function(){
//             return `${this.nome}, ${this.cognome}, tel: ${this.telefono} `}
        
//     ,
//         indirizzo :{
//             via: `caltavuturo`,
//             civico: 7,
//             città : `Roma`,
//         }},
        
 
//    utente_2:  {
//         nome: `Mario`,
//         cognome: `Rossi`,
//         email : `b@b.it`,
//         telefono: 39245875126,
//         info:  function(){
//             return `${this.nome}, ${this.cognome}, tel: ${this.telefono} `}
//         ,
//         indirizzo: {
//             via: `le mani dal naso`,
//             civico:`8/A`,
//             città: `Milano`,
//         }
//     }}
     
// console.log(rubrica);
// console.log(rubrica.utente_1.info());
// console.log(rubrica.utente_2.info());
    
// delete rubrica.utente_1.indirizzo.via;

// console.log(rubrica);
// function cicla(oggetto){
//     for (const i in oggetto) {
   // console.log(oggetto[i]);
            
//     }
// }

// cicla(rubrica)

//esercizio 3

// let automobili= {
//     auto_1:{
//     brand: `Renault`,
//     model: `Clio`,
//     info: function(){
//         return `${this.brand}, ${this.model}`
//     },
// },
//     auto_2:{
//     brand:`Fiat`,
//     model:`Panda`,
//     info: function(){
//         return `${this.brand}, ${this.model}`
//     },
// }

// }
// console.log(automobili);
// console.log(automobili.auto_1.info());

// automobili.info= function(){
//     return `${this.auto_1.model}, ${this.auto_2.model}`
// }

// function modelli(oggetto){
//     for (const i in oggetto) {
//        console.log(oggetto.info());
            
//         }
//     }
    
// modelli(automobili)

//risultao ok - svolgimento pessimo lol

//esercizio 4

let LIBRI = [
    {
      titolo: "Il Signore degli Anelli",
      autore: "Tolkien",
      categoria: "fantasy"
    },
    {
      titolo: "Harry Potter",
      autore: "Rowling",
      categoria: "fantasy",
    },
    {
      titolo: "Il Conte di Montecristo",
      autore: "Dumas",
      categoria: "narrativa classica"
    },
    {
      titolo: "Dune",
      autore: "Herbert",
      categoria: "fantascienza"
    },
    {
      titolo: "Fight Club",
      autore: "Palahniuk",
      categoria: "narrativa moderna"
    }
  ];
  let input = prompt(`inserisci una categoria`)
  function findBook(input){

    //trasformo l'oggetto in lowercase ... con il metodo filter bisogna mettere === al parametro di ingresso che ci intereesa

    let books = LIBRI.filter(libro => libro.categoria.toLowerCase() === input);
    

    //gestisco l'errore

    if (!books.includes(input)) {
      alert(`libro non trovato`)
    } //else sottointeso
    //faccio un ciclo per accedere a tutti gli elementi dell'arrey e inserisco l'href
    books.forEach(book => {
      
      alert(`<a href=”www.lamiasuperlibreria.aulab/${book.autore.replaceAll(` `, `-`).toLocaleLowerCase()}/${book.titolo.replaceAll(` `, `-`).toLocaleLowerCase()}.html”>${book.titolo}</a>`)
    })

  };
  
  
  findBook(input)
 // nonostante il piccolo bug finale lo ritengo un successo ci ho impiegato troppo tempo per definirlo un fallimento
  