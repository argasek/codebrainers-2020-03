import Student from './Student';

const student = new Student('Kamil');
const student2 = new Student('Tom', 3);
const student3 = new Student('Jan');
const student4 = new Student('Agata', 1);
const student5 = new Student('React', 10)
const student6 = new Student('Anastazja');


const codebrainersStudents = [
  new Student('Adam', 1),
  student,
  student5,
  student4,
  student2,
  student6,
  student3,
  new Student('Anna', 2),
  new Student('Marharyta'),
];

const someOtherBootcampStudents = [
  new Student('Szymon'),
  student2,
  student,
  student3,
  student4,
  student5,
  student6,
  new Student('Marharyta')
];

const studentsOfTwoCourses = []

class Students {

  constructor () {
    this.items = [];
  }

  addStudent(student) {
    this.items.push(student);
  }

  sortByFrequencyAsc() {
    this.items.sort((a, b) => b.fullName < a.fullName);
  }

  sortByFrequencyDesc(group) {
    group.sort((a, b) => b.frequency - a.frequency);
  }

  setStudents(students) {
    this.items = students.map(student => student.clone());
  }

  compareStudents(firstGroup, secondGroup) {
    firstGroup.map(firstElGroup => secondGroup.map(secondElGroup => {
      if (firstElGroup === secondElGroup) {
        studentsOfTwoCourses.push(firstElGroup)
      }
    }
    ))
    return studentsOfTwoCourses;
  }

  sortByBeersThenNames(group) {
    group.sort((a, b) => {

      return (b.beers - a.beers) !== 1 ? (b.beers - a.beers) : (a.fullName > b.fullName)
    });
  }



}


export { codebrainersStudents, Students, someOtherBootcampStudents, studentsOfTwoCourses };

