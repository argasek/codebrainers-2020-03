import React from 'react';
import './App.css';


function onlyNumber(field) {
  if (isNaN(parseFloat(field)) && field !== '') {
    return alert('Tutaj trzeba wpisać liczbę!');
  }
}

function onlySign(field) {
  const signs = ['+', '-', '*', '/', ''];
  let check = false;
  for (let i = 0; i < signs.length; i++) {
    if (field === signs[i]) {
      check = true;
      return check;
    }
    // return field === signs[i] ? check=true : check
  }
  return check ? signs : alert('Tutaj wpisz jeden ze znaków: +, -, * lub /.');
}

function notDivideByZero(signInput, zeroInput) {
  if ((signInput === '/') && (parseInt(zeroInput) === 0)) {
    return alert('Nie dziel przez zero Ty... brzydki człowieku.');
  }
}

function doMathOperation(firstValue, operationSign, secondValue) {
  const a = parseFloat(firstValue);
  const b = parseFloat(secondValue);
  return operationSign === '' || firstValue === '' || secondValue === '' ? alert('Wypełnij wszystkie pola!') :
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
    // doMathOperation(this.state.firstValue, this.state.inputSign, this.state.secondValue);
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
            <tr>
              <th><label htmlFor='FirstNumber'>First number</label></th>
              <th><label htmlFor='Operation'>Operation</label></th>
              <th><label htmlFor='SecondNumber'>Second number</label></th>
            </tr>
            <tr>
              <td><input value={this.state.firstValue} id='FirstNumber' type='text' onChange={this.changeFirst}/></td>
              <td><input value={this.state.inputSign} id='Operation' type='text' onChange={this.changeSign}/></td>
              <td><input value={this.state.secondValue} id='SecondNumber' type='text' onChange={this.changeSecond}/>
              </td>
            </tr>
          </table>
          <button onClick={this.onButtonClick}>
            Calculate
          </button>
          <span>Wynik działania to: {this.state.result}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
