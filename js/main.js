const pairs = [];
function generateRandomPairs(count) {
  const numbers = Array.from({ length: count }, (_, i) => i + 1);

  while (numbers.length > 0) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const number = numbers.splice(randomIndex, 1)[0];

    pairs.push(number, number);
  }
  return pairs;
}
const numberOfPairs = 1; // Кількість пар, яку ми хочемо створити.
const pairsArray = generateRandomPairs(numberOfPairs);

const shuffle = (numbers) => {
  let numLength = numbers.length;
  let currentIndex, nextIndex;

  while (numLength) {
    nextIndex = Math.floor(Math.random() * numLength--);

    currentIndex = numbers[numLength];
    numbers[numLength] = numbers[nextIndex];
    numbers[nextIndex] = currentIndex;
  }
  return numbers;
};

generateRandomPairs(14);
let gameContainer = document.getElementById("game");
gameContainer.appendChild(oneZero(shuffle(pairsArray)));
