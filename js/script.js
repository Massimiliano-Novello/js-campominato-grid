// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//Dichiarazioni
let playBtn = document.querySelector(".play-btn");
playBtn.addEventListener("click", function(){

    //Per ogni numero genero una casella
    const grid = document.querySelector(".grid");

    // reset contenuto precedente
    grid.innerHTML = "";

    for (let i = 1; i <= 100; i++) {
        const currentNumber = i;
        let newItem = generateGrid(currentNumber)
        newItem.addEventListener("click", clickChoice);
        grid.append(newItem)
    }
})




//FUNCTION

//Function DOM
function generateGrid (text) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.innerHTML = text;
    return newBox;
}

function clickChoice () {
    this.classList.toggle("blue")
}



