/*
algorytm losuje tak długo 6 liczb dopóki nie wylosuje zadanego zestawu
losujemy liczby z zakresu 1-49
wylosowanie pierwszej liczby powoduje zawężenie zakresu 1-48 itd..
*/

const expectedNumbers = [7, 11, 12, 17, 39, 40];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function searchNumber(x) {
  for (let i=0; i < expectedNumbers.length; i++) {
    if(x === expectedNumbers[i]) {
      return true;
    }
  }
  return false;
}
//                  0  1  2  3  4  5  6  7  8  9
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];
// const numbers = [1, 2, 3, 5, 6, 8, 9, 10];
// const numbers = [1, 3, 5, 6, 8, 9, 10];
// const numbers = [3, 5, 6, 8, 9, 10];
// const numbers = [3, 6, 8, 9, 10];

let possibleNumbers = [];
for (let i =1; i < 49 + 1; i++) {
    possibleNumbers.push(i);
}

function drawNumber(possibleNumbers) {
    let index = getRandomInt(0, possibleNumbers.length - 1);
    let x = possibleNumbers[index];
    possibleNumbers.splice(index, 1);
    return x;
}

let drawnNumber;

function compareDrawnNumbers(numbers) {
  let result = true;
  for(let i =0; i<expectedNumbers.length; i++){
    if (numbers[i] !== expectedNumbers[i]){
      result = false;
    }
  }
  return result;
}


let drawnNumbers = [];

let number = 0



do {
  for (let i=0; i < 6; i++){
    drawnNumber = drawNumber(possibleNumbers);
    drawnNumbers.push(drawnNumber);
  }
  console.log(drawnNumbers);
} while(!compareDrawnNumbers(drawnNumbers))