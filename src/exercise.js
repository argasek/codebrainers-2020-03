

const someCar = {
  numberOfDoors: 5,
  // speed: 0,
  maximumSpeed: 230,
  type: 'sedan',
  tires: [2, 3, 2, 0]
};

const carsArray = [
  {
    numberOfDoors: 3,
    speed: 100,
    maximumSpeed: 230,
    type: '4x4',
    tires: [1, 3, 2, 0]
  },
  {
    numberOfDoors: 3,
    speed: 0,
    maximumSpeed: 230,
    type: 'sedan',
    tires: [2, 2, 2, 2]
  },
  {
    numberOfDoors: 5,
    speed: 0,
    maximumSpeed: 180,
    type: 'combi',
    tires: [0, 3, 2, 0]
  }
];

// const numberOfDoorsTotal = carsArray
//   .map(car => car.tires.reduce((x, y) => x + y) > 6);
//   // .reduce((accumulator, value) => accumulator + value);
//
// console.log(numberOfDoorsTotal);

const key = 'speed';

// someCar.speed = 15;
// someCar.speed = 18;
//
console.log(someCar.tires && someCar.tires[0]);

