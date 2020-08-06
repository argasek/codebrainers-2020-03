let someField = 'aaa';

class Car {
  numberOfWheels = 4;
  numberOfDoors = 3;
}

class CombiCar extends Car {
  numberOfDoors = 5;
}

const genericCar = new Car();
const combiCar = new CombiCar();

console.log(genericCar.numberOfDoors, genericCar.numberOfWheels);
console.log(combiCar.numberOfDoors, combiCar.numberOfWheels);

// person.name = 'Jakub';
// person.surname = 'Argasiński';
//
// person.name = undefined;
// console.log(Object.keys(person));
//
// delete person.name;
//
// console.log(Object.keys(person));


//
// const person = {
//   name: 'Janina',
//   surname: 'Kowalska',
//   getFullName() {
//     return this.name + ' ' + this.surname;
//   },
//   setFullName(fullName) {
//     if (typeof fullName !== 'string' || fullName === '') {
//       return;
//     }
//     const splitName = fullName.split(' ');
//     this._setNameAndSurname(splitName[0], splitName[1])
//   },
//   _setNameAndSurname(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
// };
//
// const person2 = {
//   name: 'Jan',
//   surname: 'Kowalski',
//   getFullName() {
//     return this.name + ' ' + this.surname;
//   },
//   setFullName(fullName) {
//     if (typeof fullName !== 'string' || fullName === '') {
//       return;
//     }
//     const splitName = fullName.split(' ');
//     this._setNameAndSurname(splitName[0], splitName[1])
//   },
// }
//
// console.log(person.getFullName());
// person.setFullName('Jan Kowalski');
// console.log(person.getFullName());
