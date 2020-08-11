import Student from './Student';

const student = new Student('Kamil');

const codebrainersStudents = [
  new Student('Adam', 1),
  student,
  new Student('Anna', 2),
  new Student('Marharyta'),
  new Student('Fejkowy student A', 13),
  new Student('Fejkowy student H', 6),
  new Student('Fejkowy student Ż', 2),
];

const someOtherBootcampStudents = [
  new Student('Szymon'),
  student,
  new Student('Marharyta')
];


class Students {

  constructor() {
    this.items = []; 
  }

  addStudent(student){
    this.items.push(student);
  }

  sortByFrequencyAsc (){
    this.items.sort((a,b) => a.frequency-b.frequency);
  }

  setStudents (students){
    this.items= students.map(student => student.clone() );
  }

}


export {codebrainersStudents, Students};

