import React from 'react';
import './App.css';
import {codebrainersStudents, someOtherBootcampStudents, Students} from './models/Students';

function getRows(students) {
  const studentArray = students.map(function (student, index) {
    return <tr key={index}>
      <td>{student.fullName}</td>
      <td>{student.beers}</td>
      <td>{student.frequency}</td>
    </tr>
      ;
  });
  return studentArray;
}

function getRepeated(students1, students2) {
  const repeated = [];
  for (let i = 0; i < students1.length; i++) {
    for (let j = 0; j < students2.length; j++) {
      if (students1[i].fullName === students2[j].fullName) {
        repeated.push(students1[i].fullName);
      }
    }
  }

  const studentArray = repeated.map(function (studentName, index) {
    return <tr key={index}>
      <td>{studentName}</td>
    </tr>
      ;
  });
  return studentArray;
}


function StudentsTable({students}) {
  const rows = getRows(students);
  return (
    <table>
      <thead>
      <tr>
        <th>Full Name</th>
        <th>Beers</th>
        <th>Frequency</th>
      </tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </table>
  )
}

function StudentsBothTable({students1, students2}) {
  const rows = getRepeated(students1, students2);
  return (
    <table>
      <thead>
      <tr>
        <th>Full Name</th>
      </tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </table>
  )
}

function App() {
  const students1 = new Students();
  students1.setStudents(codebrainersStudents);
  students1.sortStudents();

  const students2 = new Students();
  students2.setStudents(someOtherBootcampStudents);
  students2.sortStudents();

  return (
    <React.Fragment>
      <StudentsTable students={students1.items}/>
      <StudentsTable students={students2.items}/>
      <StudentsBothTable students1={codebrainersStudents} students2={someOtherBootcampStudents}/>
    </React.Fragment>
  );

}

export default App;
