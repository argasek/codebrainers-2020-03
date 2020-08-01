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

let drawnNumber;

let drawnNumbers = [];

let number = 0

for (let i=0; i < 6; i++){
  drawnNumber = getRandomInt(1, 49);
  drawnNumbers.push(drawnNumber);
}
console.log(drawnNumbers);
// do {
//   drawnNumber = getRandomInt(1, 49);
//   console.log(drawnNumber);
// } while(searchNumber(drawnNumber))