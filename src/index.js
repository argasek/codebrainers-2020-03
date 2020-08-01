/*
algorytm losuje tak długo 6 liczb dopóki nie wylosuje zadanego zestawu
losujemy liczby z zakresu 1-49
wylosowanie pierwszej liczby powoduje zawężenie zakresu 1-48 itd..
*/

const expectedNumbers = [ 7, 11, 12, 17, 39, 40 ];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function searchNumber(x) {
  for (let i = 0; i < expectedNumbers.length; i++) {
    if (x === expectedNumbers[i]) {
      return true;
    }
  }
  return false;
}

function drawNumber(possibleNumbers) {
  let index = getRandomInt(0, possibleNumbers.length - 1);
  let x = possibleNumbers[index];
  possibleNumbers.splice(index, 1);
  return x;
}

function compareDrawnNumbers(numbers) {
  let numberOfMatches = 0;
  for (let i = 0; i < expectedNumbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (expectedNumbers[i] === numbers[j]) {
        numberOfMatches++;
      }
    }
  }
  return numberOfMatches === expectedNumbers.length;
}

let drawnNumber;
let drawnNumbers;
let number = 0;
let possibleNumbers;

let numberOfIterations = 0;

do {
  possibleNumbers = [];

  for (let i = 1; i < 49 + 1; i++) {
    possibleNumbers.push(i);
  }

  drawnNumbers = [];

  for (let i = 0; i < 6; i++) {
    drawnNumber = drawNumber(possibleNumbers);
    drawnNumbers.push(drawnNumber);
  }

  // console.log(drawnNumbers);
  // console.log(possibleNumbers);
  numberOfIterations++;

} while (!compareDrawnNumbers(drawnNumbers) && numberOfIterations < 1000000);

console.log(numberOfIterations);