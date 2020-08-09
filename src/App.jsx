import React from 'react';
import './App.css';
import codebrainersStudents from './models/Students';

function App() {
  const arr = codebrainersStudents.map(function (student, index) {
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
