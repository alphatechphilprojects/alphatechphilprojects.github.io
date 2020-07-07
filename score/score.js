var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.getElementById("p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var win = 5;


p1Button.addEventListener("click", function(){
    if(!gameOver) {
        p1Score++;
        console.log("P1 scores!");
        if(p1Score === win) {
            gameOver = true;
            p1Display.classList.add("winner");
            alert("P1 wins!");
            console.log("P1 wins!");
        }
        p1Display.textContent = p1Score;  
    } 
})

p2Button.addEventListener("click", function(){
    if(!gameOver) {
        p2Score++;
        console.log("P2 scores!");
        if(p2Score === win) {
            gameOver = true;
            p2Display.classList.add("winner");
            alert("P2 wins!");
            console.log("P2 wins!");
        }
        p2Display.textContent = p2Score;
    }
})

resetButton.addEventListener("click", function(){
    reset();
});

function reset() {
    p1Score = 0;
    p1Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Score = 0;
    p2Display.textContent = 0;
    p2Display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    win = Number(numInput.value);
    reset();
})