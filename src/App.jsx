import React from 'react';
import './App.css';
import codebrainersStudents from './models/Students';

function App() {
  const arr = codebrainersStudents.map(function(student) {
    return student.fullName
  });
  console.log(codebrainersStudents);
  return <ul>
   {arr}
  </ul>;

}

export default App;
