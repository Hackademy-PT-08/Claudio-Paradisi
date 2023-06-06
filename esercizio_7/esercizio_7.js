// let h1 = document.getElementById(`h1`)
// function titolo(title){
//     title.innerHtml(`esercizio javascript 7`)
// }

// titolo(h1)

//esercizio 1
//creo libreria
// const books = [
//     {
//         title: `Harry Potter`,
//         author: `J.K. Rowling`,
//         readingStatus: true,
//     },
//     {
//         title: `Il Signore degli Anelli`,
//         author: `J.R.R Tolkien`,
//         readingStatus : true,
//     },
//     {
//         title: `Libro`,
//         author: `Maccio Capatonda`,
//         readingStatus: false,
//     },
// ]

//invoco la funzione

// function libriLetti(books){
//     //ciclo for each per accedere ad ogni elemento dell'array
// books.forEach(book => {
//     //console.log(book) controllo ok
//     //faccio la condizione if poiche boolean
//     if(book.readingStatus )//true sottointeso
//                                                 {
//         console.log(`${book.title} di ${book.author} è stato letto`)                                            

//     }  else{
//         console.log(`${book.title} di ${book.author} non è stato letto`)
//     }
// });

// }

// //chiamo la funzione
// libriLetti(books)


//esercizio 2

const bowling= {
    players:[
    {
        name: `BoccioFett`,
        score: [10,9,8,10,7,9,10,7,10,8],   
    },
    {   name:`Davide428`,
        score: [2,4,6,4,2,1,7,8,10,2]
    },
    {
        name:`WillowySoda`,
        score:[8,6,7,2,5,4,3,5,10,1]
    }
        
    ]
}
//creo la funzione per calcolare il punteggio totalScore

function calculateScore(bowling){
    //ciclo i players
    bowling.players.forEach(player =>{
        //assegno variabile di appoggio
        let scores = player.score;
        console.log(scores);
        //sommo i punteggi
        let totalScores = [scores.reduce((accumolator, number)=>{
            return accumolator + number
        },0)]; console.log(totalScores)
        //funzionaaaaaaaaaaaaaaaa
        totalScores.forEach(totalScore =>{
         return   bowling.players.push(totalScore)
        })
        //bowling.players.push(totalScores)
        })
    
}

//chiamo la funzione

bowling.players.totalScore=calculateScore(bowling)
//provo ad assegnare la proprietà con la funzione


console.log(bowling)