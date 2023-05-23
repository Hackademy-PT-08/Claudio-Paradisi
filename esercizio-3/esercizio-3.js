//esercizio 1

// let v = 45;

//  if (v < 18) {
//     console.log(`insufficiente! il tuo punteggio è ${v}`);
// } else if (v >= 18 && v < 21) {
//     console.log(`sufficiente!!! il tuo punteggio è ${v}`);
// } else if (v >= 21 && v < 24) {
//     console.log(`buono! il tuo punteggio è ${v}`);
// } else if  (v >= 24 && v < 27) {
//     console.log(`distinto! il tuo punteggio è ${v}`);  
// } else if (v >= 27 && v <= 29) {
//     console.log (`ottimo!!! ill tuo punteggio è ${v}`);
// } else if (v == 30) {
//     console.log (`eccellente hai preso il massimo!! ma senza lode capra`)
// } else {
// console.log (`esagerato metti il voto vero`)
// }

//esercizio 2

// for(let i = 1 ; i < 11 ; i++ ) {
// console.log(`10 x ${i} = ${i* 10}`)
// };

//esercizio 3

// let password = prompt(`inserisci la tua password con almeno un numero ed un carattere speciale`);
// let word = "_"
// let word_1 = "!"
// let word_2 = "?"

// if(password.length < 6 || password.length > 20) {
//     console.log(`la tua password deve avere almeno tra i 6 e i 20 cafratteri`)
// } 
//  else if( !/\d/.test(password) || !password.includes(word || word_1 ||word_2 )) {
//     console.log (`inserisci almeno un numero e un carattere speciale`)
// } else {
//     console.log(`password accettata`)
// }

//esercizio 4
//         const testo = `Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. La sezione 1.10.32 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Traduzione del 1914 di H. Rackham But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? La sezione 1.10.33 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." Traduzione del 1914 di H. Rackham "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.”`

// let a = 0;
// let e = 0;
// let vocal_i = 0;
// let o = 0;
// let u = 0;
// let totVocali = 0

// for (let i = 0; i < testo.length; i++ ) {
//     const char = testo.charAt(i).toLowerCase()

//     switch(char) {
//         case "a": a += 1;
//                totVocali += 1;
//                break;
//         case "e" : e += 1;
//                 totVocali +=1;
//                 break;
//         case "i" : vocal_i += 1;
//                 totVocali +=1;
//                 break;
//         case "o" : o += 1;
//                 totVocali +=1
//                 break; 
//         case "u" : u += 1;
//                 totVocali +=1
//                 break;  
                  
//     }
//     console.log(totVocali)
//     console.log(a)
//     console.log(e)
//     console.log(vocal_i)
//     console.log(o)
//     console.log(u)

    
//}

//esercizio 5


// let utente_1 = `giocatore 1`;
// let utente_2 = `giocatore 2`;

// let N = 3
// let max = 6
// let min = 1
// let score_1
// let score_2

// score_1 = Math.floor((Math.random() * (max - min + 1)  + min) * N);
// console.log(`il punteggio di ${utente_1} è di: ${score_1}`)
// score_2 = Math.floor((Math.random() * (max - min + 1)  + min) * N);
// console.log(`il punteggio di ${utente_2} è di: ${score_2}`)

// if(score_1 > score_2){
//     console.log(`${utente_1} ha vinto`)
// } else if(score_2 > score_1){
//     console.log(`${utente_2} ha vinto`)
// } else if(score_1 == score_2){
//     console.log(`pareggio`)
// }

//esercizio 6

let password = prompt(`inserisci la tua password`)
let specialCase1 = `!` 
let specialCase2 = `?` 
let specialCase3 = `_` 

for(let i = 0; i < password.length; i++)
if(password.length  < 6) {
    alert(`password troppo corta`);
    password = prompt(`inserisci la tua password`);
    continue;
    
}
else if(password.length > 20){
    alert(`password troppo lunga`);
    password = prompt(`inserisci la tua password`);
    continue;
} else if(!/\d/.test(password) || !password.includes(specialCase1 || specialCase2 || specialCase3)){
alert(`la password deve contenere almeno un numero ed uno di questi caratteri: ${specialCase1}, ${specialCase2}, ${specialCase3}`)
password = prompt(`inserisci la tua password`)
continue;
} else if(password.length >= 6 && password.length <= 20 && /\d/.test(password) || password.includes(specialCase1 || specialCase2 || specialCase3)) {
    alert(`password accettata`)
    break;
    
}

