// <<< Emojis Arrays >>>
let genericEmojis = ["😂", "😎", "😊", "😍", "🥰", "🤩", "🤔", "😏", "😴", "🤑", "🤯", "🥳", "🥸", "🤓", "👽", "👾", "🤖", "🦄", "🧠", "🧑🏻‍💻", "🕺🏻", "💪🏻", "✌🏻", "🤟🏻", "🎨", "🪄", "🎵", "🎶", "🛠️", "💻", "⌨️", "🖱️", "💡", "⌚", "🍣", "🍫", "☕", "🚀", "🛸", "🏳️‍🌈", "🌌", "🌚", "🌈", "🔥", "❤️"];

// <<< Functions >>>
// Executes right when the page is loaded and updates de 'innerHTML' content of the 'emojiContent' div
window.onload = function randomEmoji() {
    let emojiSpace = document.getElementById("emojiContent");

    emojiSpace.innerHTML = genericEmojis[generateRandom(genericEmojis)];
};

// Generates a random number based on the length of the 'genericEmojis' array
function generateRandom(emojiArray) {
    const randomNumber = Math.floor(Math.random() * emojiArray.length);

    return randomNumber;
};