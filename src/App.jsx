import React from 'react';
import './App.css';
import codebrainersStudents from './models/Students';

function App() {
  const arr = codebrainersStudents.map(function (student, index) {
    return <li key={index}>
      {student.fullName}
      {' '}
      {student.beers}
      {' '}
      {student.frequency}
    </li>;
  });
  console.log(codebrainersStudents);
  return <ul>
    {arr}
  </ul>;

}

export default App;
