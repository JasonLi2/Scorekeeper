const buttonP1  = document.querySelector("#buttonP1");
const buttonP2  = document.querySelector("#buttonP2");
const trackerP1 = document.querySelector("#trackerP1");
const trackerP2 = document.querySelector("#trackerP2");
const resetButton = document.querySelector("#resetButton");
const maxScoreSelect = document.querySelector("#scoreSelect");

let scoreP1 = 0;
let scoreP2 = 0;
let maxScore = 1;
let gameOver = false;

// Logic for increasing p1's score
buttonP1.addEventListener("click", function ()  {
    if (!gameOver) {
        scoreP1 += 1;
        if(scoreP1 === maxScore) {
            gameOver = true;
            // changing color of text when p1 wins
            trackerP1.classList.add("has-text-success");
            trackerP2.classList.add("has-text-danger");
        }
        trackerP1.textContent = scoreP1;
    }
})

// Logic for increasing p2's score
buttonP2.addEventListener("click", function ()  {
    if (!gameOver) {
        scoreP2 += 1;
        if(scoreP2 === maxScore) {
            gameOver = true;
            // changing color of text when p1 wins
            trackerP2.classList.add("has-text-success");
            trackerP1.classList.add("has-text-danger");
        }
        trackerP2.textContent = scoreP2;
    }
})

//logic for the reset button
resetButton.addEventListener("click", reset)

//logic for selecting the score to play to
maxScoreSelect.addEventListener("change", function () {
    maxScore = parseInt(this.value);
    reset();
})

//reset function that will return everything to starting state
function reset() {
    gameOver = false;
    scoreP1 = 0;
    scoreP2 = 0;

    trackerP1.textContent = scoreP1;
    trackerP2.textContent = scoreP2;

    //removing color of score for p1 and p2
    trackerP1.classList.remove("has-text-success");
    trackerP1.classList.remove("has-text-danger");
    trackerP2.classList.remove("has-text-success");
    trackerP2.classList.remove("has-text-danger");
}