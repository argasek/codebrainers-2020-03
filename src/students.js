class Student {
  constructor(fullName, beers = 0) {
    this.fullName = fullName;
    this.beers = beers;
    this.frequency = 0;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  clone() {
    const student = new Student();
    Object.keys(this).forEach(key => student[key] = this[key]);
    return student;
  }
}

const codebrainersStudents = [
  new Student('Adam'),
  new Student('Anna', 2),
  new Student('Kamil'),
  new Student('Szymon'),
  new Student('Marharyta')
];

codebrainersStudents.forEach(student => student.frequency = student.getRandomInt(10-1)+1);

const studentsFrequencies = codebrainersStudents
    .sort((a, b) => a.frequency - b.frequency)
    .filter((item, index, arr) => index === arr.length - 1)
    .reduce((accumulator, value) => value.fullName, null);

console.log(studentsFrequencies);

