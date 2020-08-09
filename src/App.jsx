import React from 'react';
import './App.css';
import {codebrainersStudents, Students} from './models/Students';

function App() {
  const students = new Students();
  students.setStudents(codebrainersStudents);
  students.sortByFrequencyAsc();
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
  console.log(codebrainersStudents);
  
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
      {arr}
      </tbody>
    </table>
  );

}

export default App;
