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
  return operationSign === '+' ? firstValue + secondValue : alert('nie dodadawanie');
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: '',
      inputSign: '',
      secondValue: '',
    };
  }


  onButtonClick = () => {
    console.log('Calculate');
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
          <label htmlFor='FirstNumber'>First number:</label>
          <input value={this.state.firstValue} id='FirstNumber' type='text' onChange={this.changeFirst}/>
          <label htmlFor='Operation'>Operation:</label>
          <input value={this.state.inputSign} id='Operation' type='text' onChange={this.changeSign}/>
          <label htmlFor='SecondNumber'>Second number:</label>
          <input value={this.state.secondValue} id='SecondNumber' type='text' onChange={this.changeSecond}/>
          <button style={{fontSize: '120%'}} onClick={this.onButtonClick}>
            Calculate
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
