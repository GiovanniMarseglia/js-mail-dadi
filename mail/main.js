// **Mail**
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.



let email = ["abc@gmail.com", "abcdef@gmail.com", "abcdefghi@gmail.com", "abcdefghilmno@gmail.com"]
let emailHTML = document.getElementById("email") 
let bttonHTML = document.getElementById("btn")



bttonHTML.addEventListener("click", function(){


for(i=0; i < email.length; i++){
    if(email[i] === emailHTML.value){
        alert("La tua email è presente nella lista")
        i = email.length
    }else if(i === (email.length - 1)){
        alert("La tua email non è presente nella lista...contattare l'amministratore per richiederne l'inserimento")
    }

}

})