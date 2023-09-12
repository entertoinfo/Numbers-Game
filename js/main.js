const fiveNumbers = [
  8, 18, 4, 14, 6, 26, 16, 20, 28, 22, 2, 30, 12, 10, 24, 6, 8, 16, 12, 26, 24,
  28, 14, 18, 30,
];
// Получите контейнер, в который вы хотите вставить блоки
let container = document.getElementById("tile");

// Перебираємо масив та вставляємо кожен блок
for (let i = 0; i < fiveNumbers.length; i++) {
  var number = fiveNumbers[i];

  // Створюємо елемент для блока
  let gridItem = document.createElement("div");
  gridItem.className = "bg-secondary m-2 flex justify-center items-center text-text font-fixel-regular text-2xl";

  // Створюємо елемент <p> та вставляємо цифру.
  let paragraph = document.createElement("p");
  paragraph.id = "number";
  paragraph.textContent = number;

  // Додаємо <p> в блок
  gridItem.appendChild(paragraph);

  // Добавьте блок в контейнер
  container.appendChild(gridItem);
}