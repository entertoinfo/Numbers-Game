function oneZero(count) {
  function createField(numbers) {
    //Створення області для цифр
    let gridContainer = document.createElement("div");
    gridContainer.className =
      "grid grid-cols-10 gap-3 p-2 border-4 rounded-sm border-secondary";
    // Перебираємо масив та вставляємо кожен блок цифр

    //Порівняння двох чисел + анімація плитки. 
    const сheckNumbers = [];
    const handleClick = (event) => {
      let numId = event.target.id;
      let numCurrentlyActive  = parseInt(event.target.innerText);

      //*(зміна кольору текста) Відкриття плитки при натисканні.
      const numStyle = document.getElementById(event.target.id);
      numStyle.style.color = "#BFCDE0";

      const number = {
        id: numId,
        style: numStyle,
        value: numCurrentlyActive,
      }; 
      сheckNumbers.push(number);
      
      if (сheckNumbers.length == 2) {
        function numOperations(сheckNumbers) {
          if (сheckNumbers[0].value === сheckNumbers[1].value) {
            сheckNumbers.length = 0;
          } else {
            for (let i = 0; i < сheckNumbers.length; i++) {
              const element = сheckNumbers[i].style;
              setTimeout(() => (element.style = ""), 1000);
            }
            сheckNumbers.length = 0;
          }
        }
        numOperations(сheckNumbers);
      }
    };

    for (let i = 0; i < numbers.length; i++) {
      let number = numbers[i];

      let gameNumbers = document.createElement("div");
      gameNumbers.id = "number " + [i];
      gameNumbers.textContent = number;
      gameNumbers.className =
        "bg-secondary flex justify-center items-center w-[50px] h-[50px] text-secondary cursor-pointer duration-300";
      gameNumbers.addEventListener("click", handleClick);
      gridContainer.appendChild(gameNumbers);
    }
    return gridContainer;
  }
  //Генерація двох однакорих чисел.
  function generateRandomPairs(count) {
    const numbers = Array.from({ length: count }, (_, i) => i + 1);
    const pairs = [];

    while (numbers.length > 0) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      const number = numbers.splice(randomIndex, 1)[0];

      pairs.push(number, number);
    }
    return pairs;
  }
  const pairsArray = generateRandomPairs(count);

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
  return createField(shuffle(pairsArray));
}
