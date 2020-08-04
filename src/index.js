// Toto lotek homework version

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const expectedNumbers = [8,10,21,26,30,49];

let poolOfNumbers = [];

function addNumbers() {
  for(let i=1; i<=49; i++) {
    poolOfNumbers.push(i);
  }
  return poolOfNumbers;
}

addNumbers();
// console.log(poolOfNumbers);

function drawNumbers(pool, maxIndex) {
  let drawIndex;
  let drawNumber = [];
  for(let i=0; i<=5; i++){
    drawIndex = getRandomIntInclusive(0, maxIndex);
    // console.log(maxIndex, drawIndex, pool[drawIndex]);
    drawNumber.push(pool[drawIndex]);
    pool.splice(drawIndex, 1);
    maxIndex--;
  }
  return drawNumber;
}

console.log(drawNumbers(poolOfNumbers, 48));
// console.log([1,2,3].indexOf(2));

