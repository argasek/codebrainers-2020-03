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

class StudentsTable extends React.Component {

  render() {
    const { students } = this.props;
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
}

// function StudentsTable({ students }) {
//   const rows = getRows(students);
//   return (
//     <table>
//       <thead>
//       <tr>
//         <th>Full Name</th>
//         <th>Beers</th>
//         <th>Frequency</th>
//       </tr>
//       </thead>
//       <tbody>
//         { rows }
//       </tbody>
//     </table>
//   )
// }

function App() {
  const students = new Students();

  students.setStudents(codebrainersStudents);
  students.sortByFrequencyAsc();

  console.log(codebrainersStudents);

  const backgroundColor = '#ccc';

  // -> students.items
  let studentsTableItems = codebrainersStudents;

  function onButtonClick() {
    studentsTableItems = students.items;
  }



  return (
    <React.Fragment>
      <StudentsTable students={studentsTableItems} />
      <div style={ { backgroundColor, padding: '1em' }}>
        <button style={ { fontSize: '120%' }} onClick={onButtonClick}>
          Sort students, please
        </button>
      </div>
    </React.Fragment>
  );

}

export default App;
