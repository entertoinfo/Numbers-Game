import fiveNumbers from "./modules/one-zero.mjs";

let container = document.getElementById("tile");

// Перебираємо масив та вставляємо кожен блок цифр
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

  // Додаємо <div> в контейнер
  container.appendChild(gridItem);
}