function myModule(numbers) {
  let gridContainer = document.createElement("div");
  gridContainer.className = "grid grid-cols-5 w-[400px] h-[400px] border-4 rounded-sm border-secondary";
  // Перебираємо масив та вставляємо кожен блок цифр
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    let gridItem = document.createElement("div");
    gridItem.id = "number " + [i];
    gridItem.textContent = number;
    gridItem.className = "bg-secondary m-2 flex justify-center items-center text-text font-fixel-regular text-tableNumbers";

    gridContainer.appendChild(gridItem);
  }
  return gridContainer;
}
