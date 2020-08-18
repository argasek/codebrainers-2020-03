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

  onlySign = (field) => {
    const errorMessage = 'Invalid character!'
    const signs = ['+', '-', '*', '/', ''];
    let check = true;
    let sign;
    for (let i = 0; i < signs.length; i++) {
      if (field === signs[i]) {
        check = false;
        sign = signs[i];
        return check;
      }
    }
    if (check) {
      this.setState({errorMessage: errorMessage});
      console.log(field, sign);
      return true;
    }
  }

  onlyNumber(field) {
    if (isNaN(parseFloat(field))) {
      const errorMessage = 'It\'s not a number!!!';
      this.setState({errorMessage: errorMessage});
      return true;
    }
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
      this.onlyNumber(firstValue) || this.onlyNumber(secondValue) || this.onlySign(operationSign) ? false :
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
            <Table responsive>
              <tbody>
              <tr>
                <InputField
                  value={firstNumber}
                  name='First Number'
                  type="text"
                  onChange={event => this.changeFieldValue(event, firstNumber)}
                  placeholder="number"
                  errorMessage={firstNumberValid}
                  onBlur={() => this.onlyNumber('firstNumber')}
                />
                <InputField
                  value={operator}
                  name='Operator'
                  type="text"
                  onChange={event => this.changeFieldValue(event, operator)}
                  placeholder="+, -, * or / "
                  errorMessage={operatorValid}
                  onBlur={() => this.onlySign('operator')}
                />
                <InputField
                  value={secondNumber}
                  name='Second Number'
                  type="text"
                  onChange={event => this.changeFieldValue(event, secondNumber)}
                  placeholder="number"
                  errorMessage={secondNumberValid}
                  onBlur={() => {
                    this.onlyNumber(secondNumber);
                    this.notDivideByZero(operator, secondNumber);
                  }
                  }
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
