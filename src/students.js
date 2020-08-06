class Student {
  constructor(fullName, beers = 0) {
    this.fullName = fullName;
    this.beers = beers;
    this.frequency = 0;
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
  new Student('Kamil')
];

console.log(codebrainersStudents);
