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

  // console.log(students1[i], students2[i]);
  for (let i = 0; i < students1.length; i++) {
    for (let j = 0; j < students2.length; j++) {
      if (students1[i].fullName === students2[j].fullName) {
        repeated.push(students1[i].fullName);
      }
    }
  }
  console.log(repeated);
  const studentArray = repeated.map(function (studentName, index) {
    return <tr key={index}>
      <td>{studentName}</td>
    </tr>
      ;
  });
  return studentArray;
}

// function getRepeated(table1, table2) {
//   const keysArray = Object.keys(table1[0]);
//   console.log(keysArray);
//
//   const repeated = table1.map(function (student, index) {
//     let arr = [];
//     for (let i = 0; i < table2.length; i++) {
//       keysArray.map(function (prop) {
//         if (student.prop !== table2[i].prop) {
//           console.log('Student not equal: ' + student);
//           return;
//         }
//       })
//       arr.push(student);
//     }
//     console.log('Arr: '+ arr + 'Students equal: '+ student);
//     return arr;
//   });
//   return repeated;
// }

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
      { rows }
      </tbody>
    </table>
  )
}

function App() {
  // const students = new Students();
  // students.setStudents(codebrainersStudents);
  // students.sortByFrequencyAsc();
  //
  // console.log(codebrainersStudents);

  return (
    <React.Fragment>
      <StudentsTable students={codebrainersStudents}/>
      <StudentsTable students={someOtherBootcampStudents}/>
      <StudentsBothTable students1={codebrainersStudents} students2={someOtherBootcampStudents}/>
    </React.Fragment>
  );

}

export default App;
