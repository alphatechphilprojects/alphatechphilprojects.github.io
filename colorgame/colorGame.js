var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".squares");
var pickedColorDisplay = document.getElementById("messageColor");
var message = document.querySelector("#message");
var header = document.getElementById("header");
var newGame = document.querySelector("#reset");
var easyButton = document.getElementById("easy");
var hardButton = document.querySelector("#hard");
var pickedColor = pickColor();

pickedColorDisplay.textContent = pickedColor;

easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    pickedColorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    pickedColorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

newGame.addEventListener("click", function(){
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    pickedColorDisplay.textContent = pickedColor;
    header.style.backgroundColor = "#1E90FF";
    this.textContent = "New Colors";
    message.textContent = "";
    backgroundChange();
});

backgroundChange();

function backgroundChange() {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                colored();
                message.textContent = "Correct!";
                newGame.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Incorrect. Try again!";
            }
        })
    }
}

function colored(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
        header.style.backgroundColor = pickedColor;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];

    for(var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}