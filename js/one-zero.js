function oneZero(numbers) {
  //Створення області для цифр
  let gridContainer = document.createElement("div");
  gridContainer.className = "grid grid-cols-5 w-[400px] h-[400px] border-4 rounded-sm border-secondary";
  // Перебираємо масив та вставляємо кожен блок цифр
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    let gameNumbers = document.createElement("div");
    gameNumbers.id = "number " + [i];
    gameNumbers.textContent = number;
    gameNumbers.className = "bg-secondary m-2 flex justify-center items-center text-text font-fixel-regular text-tableNumbers";

    gridContainer.appendChild(gameNumbers);
  }
  return gridContainer;
}
