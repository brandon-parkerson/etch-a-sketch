let color = "black";

document.addEventListener(`DOMContentLoaded`, function() {
    createBoard(16);
    let btnPopup = document.querySelector("#popup");
    btnPopup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        board.insertAdjacentElement("beforeend", div);
        div.addEventListener("mouseover", colorDiv);
        }
}

function getSize() {
    let input = prompt("What size?");
    let message = document.querySelector("#message");
    if (input == "") {
        message.innerHTML = "Please provide a number";
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = "Give number between 0 and 100";
    }
    else {
        message.innerHTML = "Enjoy!";
        return input;
    }
};


function colorDiv() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = "black"
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function reset() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}