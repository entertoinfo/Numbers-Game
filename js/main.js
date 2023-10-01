 // Створюємо порожній масив для зберігання пар.
const pairs = []; 

function generateRandomPairs(count) {
  // Спочатку ми створюємо масив чисел від 1 до count.
  const numbers = Array.from({ length: count }, (_, i) => i + 1);

  // Поки масив чисел не пустий...
  while (numbers.length > 0) {
    // Генеруємо випадковий індекс з чисел, які залишилися в масиві.
    const randomIndex = Math.floor(Math.random() * numbers.length);
    // Видаляємо число з масиву чисел і зберігаємо його значення.
    const number = numbers.splice(randomIndex, 1)[0];
    // Додаємо це число двічі до масиву пар.
    pairs.push(number, number);
  }

  // Повертаємо масив пар.
  return pairs;
}

//! тут трохи дивно працює, тому що тре вказати тут вапу і в майні задати кількість.
//! і виходить умосно що в мейні ми задаємо 8, а тут ще створюється пара тобто виходить 10 цифр.
const numberOfPairs = 1; // Кількість пар, яку ми хочемо створити.
const pairsArray = generateRandomPairs(numberOfPairs); // Викликаємо функцію для генерації пар.

console.log(pairsArray); // Виводимо результат у консоль.

  const shuffle = (numbers) => {
    let numLength = numbers.length, a, b;
  
    while (numLength) {
  
      b = Math.floor(Math.random() * numLength--);
  
      a = numbers[numLength];
      numbers[numLength] = numbers[b];
      numbers[b] = a;
    }
  
    return numbers;
  }

  generateRandomPairs(14)
  let gameContainer = document.getElementById("game");
  gameContainer.appendChild(oneZero(shuffle(pairsArray)));