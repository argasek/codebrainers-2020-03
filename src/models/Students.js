import Student from './Student';

const codebrainersStudents = [
  new Student('Adam', 1),
  new Student('Anna', 2),
  new Student('Kamil'),
  new Student('Szymon'),
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
    this.items.sort((a,b) => a-b);
  }

  setStudents (students){
    this.items= students.map(student => student.clone() );
  }

}


export {codebrainersStudents, Students};

