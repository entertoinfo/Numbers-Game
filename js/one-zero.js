function oneZero(numbers) {
  //Створення області для цифр
  let gridContainer = document.createElement("div");
  gridContainer.className = "grid grid-cols-5 gap-3 p-2 border-4 rounded-sm border-secondary";
  // Перебираємо масив та вставляємо кожен блок цифр
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    let gameNumbers = document.createElement("div");
    gameNumbers.id = "number " + [i];
    gameNumbers.textContent = number;
    gameNumbers.className = "bg-secondary flex justify-center items-center text-text w-[50px] h-[50px]";

    gridContainer.appendChild(gameNumbers);
  }
  return gridContainer;
}

const pairs = [];
//Генерація двох однакорих чисел.
function generateRandomPairs(count) {
  const numbers = Array.from({ length: count }, (_, i) => i + 1);

  while (numbers.length > 0) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const number = numbers.splice(randomIndex, 1)[0];

    pairs.push(number, number);
  }
  return pairs;
}
const pairsArray = generateRandomPairs(pairs);

//Перемішування чисел в масиві
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