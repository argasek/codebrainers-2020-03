import React from 'react';
import InputField from "./components/inputField";
import {Form} from 'reactstrap';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: '',
      operator: '',
      secondNumber: '',
      firstNumberValid: '',
      operatorValid: '',
      secondNumberValid: '',
      result: '',
      errorMessage: '',
    };
  }

  function

  onlySign(field) {
    const value = this.state[field];
    const parsedValue = parseFloat(value);
    const errorMessage = 'Invalid character!';
    const signs = ['+', '-', '*', '/', ''];
    let check = true;
    for (let i = 0; i < signs.length; i++) {
      if (field === signs[i]) {
        check = false;
        return check;
      }
    }
    if (check) {
      this.setState({errorMessage: errorMessage});
      return true;
    }
  }

  onlyNumber(field) {
    const value = this.state[field];
    const parsedValue = parseFloat(value);
    const errorMessage =  isNaN(parsedValue) && value !== ''? 'It\'s not a number!!!': '';
    this.setState({[field+'Valid']: errorMessage});
    // console.log(field,field+'Valid', errorMessage);
    return true;

  }

  notDivideByZero(operationSign, secondValue) {
    if ((operationSign === '/') && (parseInt(secondValue) === 0)) {
      const errorMessage = 'Don\'t divide by zero!!!!';
      this.setState({errorMessage: errorMessage});
      return true;
    }
  }

  doMathOperation(firstValue, operationSign, secondValue) {
    const a = parseFloat(firstValue);
    const b = parseFloat(secondValue);

    // operationSign === '' || firstValue === '' || secondValue === '' ? alert('Complete all fields!') :
    return this.notDivideByZero(operationSign, secondValue) ? false :
      // this.onlyNumber(firstValue) || this.onlyNumber(secondValue) || this.onlySign(operationSign) ? false :
        operationSign === '+' ? a + b :
          operationSign === '-' ? a - b :
            operationSign === '*' ? a * b :
              a / b;
  }

  onButtonClick = () => {
    this.setState({result: this.doMathOperation(this.state.firstNumber, this.state.operator, this.state.secondNumber)});
  }
  // notDivideByZero(this.state.operator, event.target.value);

  changeFieldValue = (event, key) => {
    // this.onlyNumber(event.target.value);
    this.setState({[key]: event.target.value});
  }

  render() {
    const {
      firstNumber,
      operator,
      secondNumber,
      firstNumberValid,
      secondNumberValid,
      operatorValid,
      errorMessage,
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
          <Form>
            <table>
              <tbody>
              <tr>
                <InputField
                  value={firstNumber}
                  id='FirstNumber'
                  name='First Number'
                  type="text"
                  onChange={event => this.changeFieldValue(event, 'firstNumber')}
                  placeholder="First Number"
                  errorMessage={firstNumberValid}
                  onBlur = {() => this.onlyNumber('firstNumber')}
                />
                <InputField
                  value={operator}
                  id='Operator'
                  name='Operator'
                  type="text"
                  onChange={event => this.changeFieldValue(event, 'operator')}
                  placeholder="+, -, * or / "
                  errorMessage={operatorValid}
                  // onBlur = {() => this.onlyNumber('operator')}
                />
                <InputField
                  value={secondNumber}
                  id='SecondNumber'
                  name='Second Number'
                  type="text"
                  onChange={event => this.changeFieldValue(event, 'secondNumber')}
                  placeholder="Second Number"
                  errorMessage={secondNumberValid}
                  onBlur = {() => this.onlyNumber('secondNumber')}
                />
              </tr>
              </tbody>
            </table>
          </Form>
          <button onClick={this.onButtonClick}>
            Calculate
          </button>
          <span>{errorMessage}</span>
          <span>{firstNumber} {operator} {secondNumber} = {this.state.result}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
