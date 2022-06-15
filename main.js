const numbers = document.querySelectorAll('.number');
const calculatorScreen = document.querySelector('.calculator-screen');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal-sign');
const allClear = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');
const deleteCharacter = document.querySelector('.delete');
const persentage = document.querySelector('.persentage');

const data = {
  prevNumber: 0,
  operator: '',
  currentNumber: '0'
}

equalSign.addEventListener('click', () => {
  const hasil = calculate();
  data.currentNumber = hasil;
  updateCalculatorScreen();
});

allClear.addEventListener('click', () => {
  reset();
  updateCalculatorScreen();
});

deleteCharacter.addEventListener('click', () => {
  data.currentNumber = data.currentNumber.slice(0, -1);
  updateCalculatorScreen();
});

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
});

persentage.addEventListener('click', () => {
  const hasil = parseFloat(data.currentNumber) / 100;
  data.currentNumber = hasil.toString();
  updateCalculatorScreen();
});

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value);
    updateCalculatorScreen();
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value);
  });
});

const reset = () => {
  data.currentNumber = '0';
  data.operator = '';
  data.prevNumber = 0;
}

const calculate = () => {
  let result = '';
  const prevNumberFloat = parseFloat(data.prevNumber);
  const currentNumberFloat = parseFloat(data.currentNumber);
  switch (data.operator) {
    case '+':
      result = prevNumberFloat + currentNumberFloat;
      break;
    case '-':
      result = prevNumberFloat - currentNumberFloat;
      break;
    case '*':
      result = prevNumberFloat * currentNumberFloat;
      break;
    case '/':
      result = prevNumberFloat / currentNumberFloat;
      break;
    default:
      break;
  }
  return result.toString();
}

const updateCalculatorScreen = () => {
  calculatorScreen.value = data.currentNumber;
}

const inputNumber = (number) => {
  if (data.currentNumber === '0') {
    data.currentNumber = number;
  } else {
    data.currentNumber = data.currentNumber + number;
  }
}

const inputOperator = (operator) => {  
  data.prevNumber = data.currentNumber;
  data.operator = operator;
  data.currentNumber = '0';
}

const inputDecimal = (dot) => {
  data.currentNumber += dot;
}



