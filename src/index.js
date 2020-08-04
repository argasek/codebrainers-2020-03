// Toto lotek homework version

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const expectedNumbers = [8,10,21,26,30,49];

let poolOfNumbers = [];

function addNumbers() {
  for(let i=1; i <=49; i++) {
    poolOfNumbers.push(i);
  }
  return poolOfNumbers;
}

addNumbers();
console.log(poolOfNumbers);



