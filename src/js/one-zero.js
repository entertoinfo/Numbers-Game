function oneZero(count) {
  function createField(numbers) {
    //Створення області для цифр
    const gridContainer = document.createElement("div");
    gridContainer.className = "grid grid-cols-10 gap-3 p-2 border-4 rounded-sm border-secondary";
    gridContainer.id = "gameFrame";

    const сheckNumbers = [];
    //Функція для порівняння двох чисел обраних чисел та анімація відкривання\закриття числа.
    function handleClick(event) {
      //Відкриття плитки при натисканні.
      document.getElementById(event.target.id).style.color = "#BFCDE0";
      const number = {
        id: event.target.id,
        style: document.getElementById(event.target.id),
        value: parseInt(event.target.innerText),
      };
        сheckNumbers.push(number);

      function comparisonNumbers(numbers) {
        if (numbers[0].value === numbers[1].value) {
          numbers.length = 0;
        } else {
          for (let i = 0; i < numbers.length; i++) {
            const element = numbers[i].style;
            setTimeout(() => (element.style = ""), 1000);
          }
          сheckNumbers.length = 0;
        }
      }

      if (сheckNumbers.length == 2) {
        comparisonNumbers(сheckNumbers);
      }
    }

    for (let i = 0; i < numbers.length; i++) {
      const gameNumbers = document.createElement("div");
      gameNumbers.id = "number " + [i];
      gameNumbers.textContent = numbers[i];
      gameNumbers.className = "bg-secondary flex justify-center items-center w-[50px] h-[50px] text-secondary cursor-pointer duration-300";
      gameNumbers.addEventListener("click", handleClick);
      gridContainer.appendChild(gameNumbers);
    }
    return gridContainer;
  }
  //Генерація двох однакорих чисел.
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
  return createField(shuffle(generateRandomPairs(count)));
}

  const reloadPage = () => {
    location.reload();
  };

  function changeLevel(event){
    const game = document.getElementById("game");
    const remove = game.removeChild(document.getElementById("gameFrame"));

    const currentLevel = event.target.innerText
      switch (currentLevel) {
        case 'eazy level': 
        event.target.innerText = 'grandfather level';
        gameContainer.appendChild(oneZero(30), remove);
        break;

        case 'grandfather level': 
          event.target.innerText = 'crazy level';
          gameContainer.appendChild(oneZero(50), remove);
        break;

        case 'crazy level':
          event.target.innerText = 'eazy level'
          gameContainer.appendChild(oneZero(15), remove);
        break;
      
        default:
          event.target.innerText = 'error level, reload'
          setTimeout(() => {
            reloadPage()
          }, 1500);
        break;
      }
  }

  function levelInfo() {
    const levelSelection = document.getElementById("level")
    levelSelection.addEventListener("click", changeLevel);
  }
    levelInfo()