class Student {
  fullName = '';
  beers = 0;
  frequency = 0;
}

const smartStudent = new Student();
const lazyStudent = new Student();
let anotherSmartStudent = smartStudent;


smartStudent.beers = 3;
smartStudent.fullName = 'Smart Student';
lazyStudent.fullName = 'Lazy Student';

console.log(smartStudent, anotherSmartStudent);

anotherSmartStudent.beers = 5;

console.log(smartStudent, anotherSmartStudent);

let a = "string";
let b = a;

b = 'ciasto';

console.log(a, b);
