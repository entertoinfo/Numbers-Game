
// Кількість пар які створяться для ігрового поля.
generateRandomPairs(15);
let gameContainer = document.getElementById("game");
gameContainer.appendChild(oneZero(shuffle(pairsArray)));