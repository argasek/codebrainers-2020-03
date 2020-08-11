import React from 'react';
import './App.css';
import { codebrainersStudents } from './models/Students';
import Student from './models/Student';

function getRows(students) {
  const arr = students.map(function (student, index) {
    return <tr key={index}>
      <td>{student.fullName}</td>
      <td>{student.beers}</td>
      <td>{student.frequency}</td>
    </tr>;
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
          {rows}
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

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      students: codebrainersStudents
    };
  }

  onButtonClick = () => {

    const student = new Student();

    console.log(this.state.students);
    const studentsKubus = [...this.state.students];
    studentsKubus[student.getRandomInt(studentsKubus.length)].fullName = 'Kubus';
    this.setState({ students: studentsKubus });
  }

  render() {

    const backgroundColor = '#ccc';

    return (
      <React.Fragment>
        <StudentsTable students={this.state.students} />
        <div style={{ backgroundColor, padding: '1em' }}>
          <button style={{ fontSize: '120%' }} onClick={this.onButtonClick}>
            Sort students, please
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
