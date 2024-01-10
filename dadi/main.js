// **Gioco dei dadi**
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let RandomUno = Math.floor(Math.random() * (7 - 1) + 1)
let RandomDue = Math.floor(Math.random() * (7 - 1) + 1)


document.getElementsByTagName("main")[0].innerHTML += `<p>Numero per il Giocatore: ${RandomUno}</p>`
document.getElementsByTagName("main")[0].innerHTML += `<p>Numero per il computer: ${RandomDue}</p>`




if( RandomUno > RandomDue ){
    document.getElementsByTagName("main")[0].innerHTML += `<p>Il vincitore è il Giocatore</p>`
} else if ( RandomUno < RandomDue ){
    document.getElementsByTagName("main")[0].innerHTML += `<p>Il vincitore è il Computer</p>`
}else{
    document.getElementsByTagName("main")[0].innerHTML += `<p>La partita è finita in pareggio</p>`
}












