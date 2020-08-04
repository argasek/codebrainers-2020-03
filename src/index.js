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

function addNumbers() {
  for(let i=1; i <= numbersInThePool; i++) {
    poolOfNumbers.push(i);
  }
  return poolOfNumbers;
}

addNumbers();
// console.log(poolOfNumbers);

function draw(pool) {
  let drawIndex;
  let drawNumber = [];
  let maxIndex = numbersInThePool-1;

  for(let i=0; i < numberOfDraws; i++){
    drawIndex = getRandomIntInclusive(0, maxIndex);
    // console.log(maxIndex, drawIndex, pool[drawIndex]);
    drawNumber.push(pool[drawIndex]);
    pool.splice(drawIndex, 1);
    maxIndex--;
  }
  return drawNumber;
}
let drawNumbers = draw(poolOfNumbers);

console.log(drawNumbers, expectedNumbers);
console.log(drawNumbers.sort(), expectedNumbers.sort());

function compareArrays(arr1, arr2) {
  let equality = true;
  for(let i=0; i<numberOfDraws; i++) {
    if (arr1[i] !== arr2[i])
    equality = false;
  }
  return equality;
}

console.log(compareArrays(drawNumbers, expectedNumbers));








