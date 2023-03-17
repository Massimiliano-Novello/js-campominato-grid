// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//Dichiarazioni
const playBtn = document.querySelector(".play-btn");


//Per ogni numero genero una casella
const grid = document.querySelector(".grid");
for (let i = 1; i <= 100; i++) {
    const currentNumber = i;
    console.log(currentNumber);
}



//FUNCTION

//Function DOM
function generateGrid (contentBox) {
    const newBox = document.querySelector("div");
    newBox.classList.add("box");
    newBox.innerHTML = contentBox;
    return newBox;
}

