let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".last-result");
const lowOrHi = document.querySelector(".low-or-hi");
const guessSubmit = document.querySelector(".guess-submit");
const guessField = document.querySelector(".guess-field");

let guessCount = 1;
let resetButton;

function checkGuess () {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "حدس های قبلی : ";
    } 
    guesses.textContent = `${guesses.textContent} ${userGuess}`;
    if (userGuess === randomNumber) {
        lastResult.textContent = "تبریییییک ! درست گفتی ! ";
        lastResult.style.fontWeight = "600";
        lastResult.style.marginTop = "10px";
        lastResult.style.textAlign = "center";
        lastResult.style.padding = "10px 20px";
        lastResult.style.borderRadius = "50px";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "!!! 10 تا حدست اشتباه بود !!!";
        lastResult.style.fontWeight = "600";
        lastResult.style.marginTop = "10px";
        lastResult.style.textAlign = "center";
        lastResult.style.padding = "10px 20px";
        lastResult.style.borderRadius = "50px";
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "اشتباه بود!";
        lastResult.style.fontWeight = "600";
        lastResult.style.textAlign = "center";
        lastResult.style.marginTop = "10px";
        lastResult.style.padding = "10px 20px";
        lastResult.style.borderRadius = "50px";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "آخرین حدست خیلی کم بود! ";
            lowOrHi.style.fontWeight = "600";
            lowOrHi.style.marginTop = "10px";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "آخرین حدست خیلی زیاد بود! ";
            lowOrHi.style.fontWeight = "600";
            lowOrHi.style.marginTop = "10px";
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click",checkGuess);

function setGameOver () {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.classList.add("resetbtn");
    resetButton.textContent = "دوباره تلاش کن";
    resetButton.style.position = "absolute"
    resetButton.style.marginTop = "450px"
    document.body.append(resetButton);
    resetButton.addEventListener("click",resetGame);
}

function resetGame () {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".result-paras p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}