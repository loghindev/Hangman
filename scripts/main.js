import draggables from "./draggables.js";
import generateKeyboard from "./generateKeyboard.js";

const banner = document.querySelector(".set-word");
let word;

document.addEventListener("DOMContentLoaded", () => {
    draggables();
    generateKeyboard();
    banner.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            setWord();
        }
    });
});

function setWord() {
    const input = document.getElementById("setWordInput");
    word = input.value.toUpperCase().split("");
    console.log(word);

    input.value = "";
    input.blur();
}
