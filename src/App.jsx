import React from 'react';
import './App.css';
import { codebrainersStudents, Students } from './models/Students';

function GetRows(students) {
  const arr = students.items.map(function (student, index) {
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

function App() {
  const students = new Students();
  students.setStudents(codebrainersStudents);
  students.sortByFrequencyAsc();

  console.log(codebrainersStudents);

  return (

    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Beers</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {GetRows(students.items)}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Beers</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {GetRows(codebrainersStudents)}
        </tbody>
      </table>
    </React.Fragment>


  );

}

export default App;
