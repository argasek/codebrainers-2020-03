import React from 'react';
import './App.css';
import { codebrainersStudents, Students } from './models/Students';

function getRows(students) {
  const arr = students.map(function (student, index) {
    return <tr key={index}>

      <td>{student.fullName}</td>
      {' '}
      <td>{student.beers}</td>
      {' '}
      <td>{student.frequency}</td>
    </tr>
      ;
  });
  return arr;
}

function StudentsTable({ students }) {
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
        { rows }
      </tbody>
    </table>
  )
}

function App() {
  const students = new Students();

  students.setStudents(codebrainersStudents);
  students.sortByFrequencyAsc();

  console.log(codebrainersStudents);

  return (
    <React.Fragment>
      <StudentsTable students={students.items} />
      <StudentsTable students={codebrainersStudents} />
    </React.Fragment>
  );

}

export default App;
