const people = [
  ['Janek', 18],
  ['Basia', 35],
  ['Mieczysław', 7],
  ['Ola', 14],
];

const peopleAges = people.map((item) => item[1]);
const reducer = (accumulator, value, index, arr) => accumulator + value;
const averageAge = peopleAges.reduce(reducer) / peopleAges.length;

console.log(`Average age of people in array is ${averageAge}`);







