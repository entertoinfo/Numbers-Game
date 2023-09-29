const numbers = [
    8, 18, 4, 14, 6, 26, 16, 20, 28, 22, 2, 30, 12, 10, 24, 6, 8, 16, 12, 26, 24,
    28, 14, 18, 30,
  ];


  const shuffle = (numbers) => {
    let m = numbers.length, t, i;
  
    while (m) {
  
      i = Math.floor(Math.random() * m--);
  
      t = numbers[m];
      numbers[m] = numbers[i];
      numbers[i] = t;
    }
  
    return numbers;
  }

  generateRandomPairs(14)
  let gameContainer = document.getElementById("game");
  gameContainer.appendChild(fieldСreation(shuffle(pairsArray)));