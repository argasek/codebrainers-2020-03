import React from 'react';
import InputField from "./components/inputField";
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


  // operationSign === '' || firstValue === '' || secondValue === '' ? alert('Complete all fields!') :
    // notDivideByZero(operationSign, secondValue) ? false :
      return onlyNumber(firstValue) || onlyNumber(secondValue) || onlySign(operationSign) ? false :
        operationSign === '+' ? a + b :
          operationSign === '-' ? a - b :
            operationSign === '*' ? a * b :
              a / b;
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: '',
      operator: '',
      secondNumber: '',
      result: '',
    };
  }


  onButtonClick = () => {
    this.setState({result: doMathOperation(this.state.firstNumber, this.state.operator, this.state.secondNumber)});
  }
    // notDivideByZero(this.state.operator, event.target.value);

  changeNumberValue = (event, key) => {
    onlyNumber(event.target.value);
    this.setState({[key]: event.target.value});
  }

  changeOperatorValue = (event) => {
    onlySign(event.target.value);
    this.setState({operator: event.target.value});
  }


  render() {
    const {firstNumber,
      operator,
      secondNumber,
    } = this.state

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
            <tbody>
            <tr>
              <InputField
                value={firstNumber}
                id='FirstNumber'
                type="text"
                onChange={event => this.changeNumberValue(event, 'firstNumber')}
                placeholder="First Number" />
              <InputField
                value={operator}
                id='Operator'
                type="text"
                onChange={event => this.changeOperatorValue(event)}
                placeholder="+, -, * or / "/>
              <InputField
                value={secondNumber}
                id='SecondNumber'
                type="text"
                onChange={event => this.changeNumberValue(event, 'secondNumber')}
                placeholder="Second Number"/>
            </tr>
            </tbody>
          </table>
          <button onClick={this.onButtonClick}>
            Calculate
          </button>
          <span>{firstNumber}{operator}{secondNumber} = {this.state.result}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
