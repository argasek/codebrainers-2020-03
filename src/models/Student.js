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
