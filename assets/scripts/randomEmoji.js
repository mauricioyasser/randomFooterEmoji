// <<< GENERIC EMOJIS >>>
let genericEmojis = [
    ["๐", false],
    ["๐", false],
    ["๐", false],
    ["๐ฅฐ", false],
    ["๐ค", "โ"],
    ["๐คจ", "Meteu essa?"],
    ["๐", "How you doin?"],
    ["๐คฏ", false],
    ["๐คช", false],
    ["๐ฅธ", false],
    ["๐ค", false],
    ["๐ฝ", "ALIENS!!"],
    ["๐พ", false],
    ["๐ค", false],
    ["๐ฆ", false],
    ["๐๏ธ", "๐๏ธ"],
    ["๐ง ", false],
    ["๐ต๐ป", false],
    ["๐ฅท๐ป", false],
    ["๐ง๐ปโ๐ฌ", false],
    ["๐จ๐ปโ๐ป", false],
    ["๐จ๐ปโ๐", false],
    ["๐บ๐ป", "You should be dancing... ๐ถ"],
    ["๐ช๐ป", false],
    ["๐ค๐ป", "E o salรกrio รณ..."],
    ["โ๐ป", false],
    ["๐๐ป", "Vida longa e prรณspera"],
    ["๐ค๐ป๐ค๐ป", "Tamo Junto!"],
    ["๐ค๐ป", false],
    ["๐", false],
    ["๐จ", false],
    ["๐ฏ", false],
    ["๐ฎ", false],
    ["๐ช", "Nรฃo รฉ feitiรงaria, รฉ tecnologia"],
    ["๐ช", false],
    ["๐ถ", false],
    ["๐ ๏ธ", false],
    ["๐งช", false],
    ["๐ป", false],
    ["โจ๏ธ", false],
    ["๐ธ", "Diga xis!"],
    ["๐ก", "Eureka!"],
    ["๐", false],
    ["๐", false],
    ["๐ฃ", false],
    ["๐ซ", false],
    ["โ", "Quero cafรฉรฉรฉ!"],
    ["๐", false],
    ["๐ธ", "๐"],
    ["๐ณ๏ธโ๐", false],
    ["๐๏ธ", false],
    ["๐", false],
    ["โค๏ธ", false]
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
