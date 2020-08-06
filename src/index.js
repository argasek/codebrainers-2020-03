


const smartStudent = new Student();
smartStudent.beers = 3;
smartStudent.fullName = 'Smart Student';

const lazyStudent = new Student();
lazyStudent.fullName = 'Lazy Student';

// let anotherSmartStudent = smartStudent.clone();
// let yetAnotherSmartStudent = smartStudent.clone();


// console.log(smartStudent, anotherSmartStudent);

const anotherSmartStudent = Object.assign(new Student(), smartStudent);
// anotherSmartStudent.beers = 5;

console.log(anotherSmartStudent instanceof Student);

// console.log();
