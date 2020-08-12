import React from 'react';
import './App.css';
import {codebrainersStudents} from './models/Students';
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
function notDivideByZero(signInput, zeroInput){
  if((signInput === '/') && (parseInt(zeroInput) === 0)){
    return alert('Nie dziel przez zero Ty... brzydki człowieku.');
  }
}

class StudentsTable extends React.Component {

  render() {
    const {students} = this.props;
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
  constructor(props) {
    super(props);
    this.state = {
      students: codebrainersStudents,
      firstValue: '',
      inputSign: '',
      secondValue: '',
    };
  }


  onButtonClick = () => {

    const student = new Student();

    console.log(this.state.students);
    const studentsKubus = [...this.state.students];
    studentsKubus[student.getRandomInt(studentsKubus.length)].fullName = 'Kubus';
    this.setState({students: studentsKubus});
  }

  changeFirst = (event) => {
    this.setState({firstValue: event.target.value});
  }
  changeSign = (event) => {
    notDivideByZero(event.target.value, this.state.secondValue);
    this.setState({inputSign: event.target.value});
  }
  changeSecond = (event) => {
    notDivideByZero(this.state.inputSign, event.target.value);
    this.setState({secondValue: event.target.value});
  }


  render() {

    const backgroundColor = '#ccc';

    return (
      <React.Fragment>
        <StudentsTable students={this.state.students}/>
        <div style={{backgroundColor, padding: '1em'}}>
          <label htmlFor='FirstNumber'>First number:</label>
          <input value={this.state.inputValue} id='FirstNumber' type='text' onChange={this.changeFirst}/>
          <label htmlFor='Operation'>Operation:</label>
          <input value={this.state.inputValue} id='Operation' type='text' onChange={this.changeSign}/>
          <label htmlFor='SecondNumber'>Second number:</label>
          <input value={this.state.inputValue} id='SecondNumber' type='text' onChange={this.changeSecond}/>
          <button style={{fontSize: '120%'}} onClick={this.onButtonClick}>
            Calculate
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
