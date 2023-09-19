const fiveNumbers = {
  numbersTable: [
    8, 18, 4, 14, 6, 26, 16, 20, 28, 22, 2, 30, 12, 10, 24, 6, 8, 16, 12, 26,
    24, 28, 14, 18, 30,
  ],

  createTable: function () {
    let container = document.getElementById("tile");

    // Перебираємо масив та вставляємо кожен блок цифр
    for (let i = 0; i < numbersTable.length; i++) {
      var number = numbersTable[i];

      // Створюємо елемент для блока
      let gridItem = document.createElement("div");
      gridItem.className =
        "bg-secondary m-2 flex justify-center items-center text-text font-fixel-regular text-2xl";
        gridItem.id = "number " + [i];

      // Створюємо елемент <p> та вставляємо цифру.
      let paragraph = document.createElement("p");
      paragraph.id = "number"  + [i];
      paragraph.textContent = number;

      // Додаємо <p> в блок
      gridItem.appendChild(paragraph);

      // Додаємо <div> в контейнер
      container.appendChild(gridItem);
    }
  },
};

export const createTable = fiveNumbers.createTable;
export const numbersTable = fiveNumbers.numbersTable;