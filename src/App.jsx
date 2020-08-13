import React from 'react';
import './App.css';


function onlyNumber(field) {
  if (isNaN(parseFloat(field)) && field !== '') {
    alert('Enter the number.');
    return true;
  }
}

function onlySign(field) {
  const signs = ['+', '-', '*', '/', ''];
  let check = true;
  for (let i = 0; i < signs.length; i++) {
    if (field === signs[i]) {
      check = false;
      return check;
    }
  }
  if (check) {
    alert('Enter one of the signs +, -, * or /.');
    return true;
  }
}

function notDivideByZero(operationSign, secondValue) {
  while ((operationSign === '/') && (parseInt(secondValue) === 0)) {
    alert('Don\'t divide by zero!!!!');
    return true;
  }
}

function doMathOperation(firstValue, operationSign, secondValue) {
  const a = parseFloat(firstValue);
  const b = parseFloat(secondValue);

  return operationSign === '' || firstValue === '' || secondValue === '' ? alert('Complete all fields!') :
    notDivideByZero(operationSign, secondValue) ? false :
      onlyNumber(firstValue) || onlyNumber(secondValue) || onlySign(operationSign) ? false :
        operationSign === '+' ? a + b :
          operationSign === '-' ? a - b :
            operationSign === '*' ? a * b :
              a / b;
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: '',
      inputSign: '',
      secondValue: '',
      result: '',
    };
  }


  onButtonClick = () => {
    this.setState({result: doMathOperation(this.state.firstValue, this.state.inputSign, this.state.secondValue)});
  }

  changeFirst = (event) => {
    onlyNumber(event.target.value);
    this.setState({firstValue: event.target.value});
  }
  changeSign = (event) => {
    onlySign(event.target.value);
    notDivideByZero(event.target.value, this.state.secondValue);
    this.setState({inputSign: event.target.value});
  }
  changeSecond = (event) => {
    onlyNumber(event.target.value);
    notDivideByZero(this.state.inputSign, event.target.value);
    this.setState({secondValue: event.target.value});
  }


  render() {

    const backgroundColor = '#ccc';

    return (
      <React.Fragment>
        <div style={{backgroundColor, padding: '1em'}}>
          <header>
            <h1>Calculator</h1>
            <h4>You can see three fields below to enter your Math operation on two numbers. In the middle field you have
              to enter one of the sign: +, -, *, /. Have fun!</h4>
          </header>
          <table>
            <thead>
            <tr>
              <th><label htmlFor='FirstNumber'>First number</label></th>
              <th><label htmlFor='Operation'>Operation</label></th>
              <th><label htmlFor='SecondNumber'>Second number</label></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><input value={this.state.firstValue} id='FirstNumber' type='text' onChange={this.changeFirst}/></td>
              <td><input value={this.state.inputSign} id='Operation' type='text' onChange={this.changeSign}/></td>
              <td><input value={this.state.secondValue} id='SecondNumber' type='text' onChange={this.changeSecond}/>
              </td>
            </tr>
            </tbody>
          </table>
          <button onClick={this.onButtonClick}>
            Calculate
          </button>
          <span>Result the operation is: {this.state.result}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
