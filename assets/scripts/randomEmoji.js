// <<< GENERIC EMOJIS >>>
let genericEmojis = [
    ["😊", false],
    ["😎", false],
    ["😍", false],
    ["🥰", false],
    ["🤔", "❓"],
    ["🤨", "Meteu essa?"],
    ["😏", "How you doin?"],
    ["🤯", false],
    ["🤪", false],
    ["🥸", false],
    ["🤓", false],
    ["👽", "ALIENS!!"],
    ["👾", false],
    ["🤖", false],
    ["🦄", false],
    ["👁️", "👁️"],
    ["🧠", false],
    ["🕵🏻", false],
    ["🥷🏻", false],
    ["🧑🏻‍🔬", false],
    ["👨🏻‍💻", false],
    ["👨🏻‍🚀", false],
    ["🕺🏻", "You should be dancing... 🎶"],
    ["💪🏻", false],
    ["🤏🏻", "E o salário ó..."],
    ["✌🏻", false],
    ["🖖🏻", "Vida longa e próspera"],
    ["🤜🏻🤛🏻", "Tamo Junto!"],
    ["🤟🏻", false],
    ["🎉", false],
    ["🎨", false],
    ["🎯", false],
    ["🎮", false],
    ["🪄", "Não é feitiçaria, é tecnologia"],
    ["🪅", false],
    ["🎶", false],
    ["🛠️", false],
    ["🧪", false],
    ["💻", false],
    ["⌨️", false],
    ["📸", "Diga xis!"],
    ["💡", "Eureka!"],
    ["🍕", false],
    ["🍔", false],
    ["🍣", false],
    ["🍫", false],
    ["☕", "Quero cafééé!"],
    ["🚀", false],
    ["🛸", "🐄"],
    ["🏳️‍🌈", false],
    ["🏖️", false],
    ["🌈", false],
    ["❤️", false]
];

// <<< Functions >>>
// Executes right when the page is loaded and updates de 'innerHTML' content of the 'emojiContent' div
window.onload = function randomEmoji() {
    let emojiSpace = document.getElementById("footerEmoji");

    emojiArray = genericEmojis;
    
    let randomElement = generateRandom(emojiArray);

    if(!genericEmojis[randomElement][1]){
        emojiSpace.innerHTML = `<span id="emojiContent">${genericEmojis[randomElement][0]}</span>`
    }else{
        emojiSpace.innerHTML = `<span id="emojiContent">${genericEmojis[randomElement][0]}</span><span id="tooltipText">${genericEmojis[randomElement][1]}</span>`
    }
};

// Generates a random number based on the length of the 'genericEmojis' array
function generateRandom(emojiArray) {
    const randomNumber = Math.floor(Math.random() * emojiArray.length);

    return randomNumber;
}
