function generateKeyboard() {
    const container = document.querySelector("#game .content .keyboard");
    for (let i = 65; i <= 90; ++i) {
        const btn = document.createElement("button");
        btn.textContent = String.fromCharCode(i);
        container.appendChild(btn);
    }
}

export default generateKeyboard;
