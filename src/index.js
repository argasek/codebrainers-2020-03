// Toto lotek homework version

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const expectedNumbers = [8,21,10,26,30,49];
const numberOfDraws = expectedNumbers.length;
const numbersInThePool = 49;

let poolOfNumbers = [];

function createThePool() {
  for(let i=1; i <= numbersInThePool; i++) {
    poolOfNumbers.push(i);
  }
  return poolOfNumbers;
}

let drawNumber;

function drawNumbers() {
  let drawIndex;
  let maxIndex = numbersInThePool-1;
  drawNumber = [];


  for(let i=0; i < numberOfDraws; i++){
    drawIndex = getRandomIntInclusive(0, maxIndex);
    // console.log(maxIndex, drawIndex, pool[drawIndex]);
    drawNumber.push(poolOfNumbers[drawIndex]);
    poolOfNumbers.splice(drawIndex, 1);
    maxIndex--;
  }
  return drawNumber.sort;
}

expectedNumbers.sort();

function compareArrays(arr1, arr2) {
  let equality = true;
  for(let i=0; i<numberOfDraws; i++) {
    if (arr1[i] !== arr2[i])
    equality = false;
  }
  return equality;
}

let compare;
let repeats = 0;

do{
  createThePool();
  drawNumbers();
  compare = compareArrays(drawNumber, expectedNumbers);
  repeats++;
} while (compare === false && repeats < 10000000)

console.log(repeats, drawNumber);






