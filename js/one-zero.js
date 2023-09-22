function myModule(numbers) {

  // Перебираємо масив та вставляємо кожен блок цифр
  for (let i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    // Створюємо елемент для блока
    let gridItem = document.createElement("div");
    gridItem.className =
      "bg-secondary m-2 flex justify-center items-center text-text font-fixel-regular text-tableNumbers";
    gridItem.id = "number " + [i];

    // Створюємо елемент <p> та вставляємо цифру.
    let paragraph = document.createElement("p");
    paragraph.id = "number" + [i];
    paragraph.textContent = number;

    // Додаємо <p> в блок
    gridItem.appendChild(paragraph);

    // Додаємо <div> в контейнер
    container.appendChild(gridItem);
  }
};
