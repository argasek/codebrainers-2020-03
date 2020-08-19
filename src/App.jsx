import React from 'react';
import InputField from "./components/inputField";
import {Form, Table} from 'reactstrap';
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

  onlyOperator(field) {
    const value = this.state[field];
    const signs = ['+', '-', '*', '/'];

    const check = signs.map(item => item === value).reduce((a, b) => a || b);
    const errorMessage = check ? '' : 'Invalid character!';
    this.setState({[field + 'Valid']: errorMessage});

    return true;
  }

  onlyNumber(field) {
    const value = this.state[field];
    const parsedValue = parseFloat(value);

    const errorMessage = isNaN(parsedValue) ? 'It\'s not a number!' : '';
    this.setState({[field + 'Valid']: errorMessage});
    return true;
  }

  doNotDivideByZero(operationSign, secondValue) {
    const errorMessage = operationSign === '/' && parseInt(secondValue) === 0 ? 'Don\'t divide by zero!' : '';
    this.setState({errorMessage: errorMessage});
    return true;
  }

  doMathOperation(firstValue, operationSign, secondValue) {
    const {
      firstNumberValid,
      operatorValid,
      secondNumberValid
    } = this.state;

    const errorMessage = firstNumberValid !== '' ? firstNumberValid :
      operatorValid !== '' ? operatorValid :
        secondNumberValid !== '' ? secondNumberValid : '';

    this.setState({errorMessage: errorMessage});

    const a = parseFloat(firstValue);
    const b = parseFloat(secondValue);

    const result = operationSign === '+' ? a + b :
      operationSign === '-' ? a - b :
        operationSign === '*' ? a * b :
          a / b;

    return errorMessage === '' ? result : '';
  }

  onButtonClick = () => {
    this.setState({result: this.doMathOperation(this.state.firstNumber, this.state.operator, this.state.secondNumber)});
  }

  changeFieldValue = (event, key) => {
    this.setState({[key]: event.target.value});
    this.setState({result: ''});
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
            <Table>
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
                  onBlur={() => this.onlyNumber('firstNumber')}
                />
                <InputField
                  value={operator}
                  id='Operator'
                  name='Operator'
                  type="text"
                  onChange={event => this.changeFieldValue(event, 'operator')}
                  placeholder="+, -, * or / "
                  errorMessage={operatorValid}
                  onBlur={() => {
                    this.onlyOperator('operator');
                    this.doNotDivideByZero(operator, secondNumber);
                  }}
                />
                <InputField
                  value={secondNumber}
                  id='SecondNumber'
                  name='Second Number'
                  type="text"
                  onChange={event => this.changeFieldValue(event, 'secondNumber')}
                  placeholder="Second Number"
                  errorMessage={secondNumberValid}
                  onBlur={() => {
                    this.onlyNumber('secondNumber');
                    this.doNotDivideByZero(operator, secondNumber);
                  }}
                />
              </tr>
              </tbody>
            </Table>
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
