/*
* У папці calculator дана верстка макета калькулятора. 
Потрібно зробити цей калькулятор робочим.
* При натисканні на клавіші з цифрами - набір введених цифр має бути показаний на табло калькулятора.
* При натисканні на знаки операторів (`*`, `/`, `+`, `-`) на табло нічого не відбувається - програма чекає введення другого числа для виконання операції.
* Якщо користувач ввів одне число, вибрав оператор і ввів друге число, то при натисканні як кнопки `=`, так і будь-якого з операторів, в табло повинен з'явитися результат виконання попереднього виразу.
* При натисканні клавіш `M+` або `M-` у лівій частині табло необхідно показати маленьку букву `m` - це означає, що в пам'яті зберігається число. Натискання на MRC покаже число з пам'яті на екрані. Повторне натискання `MRC` має очищати пам'ять.
*/

let newDigit = false;
let memory = 0;
let operandOne = undefined;
let operandTwo = undefined;
let myOperation = undefined;
let isDivison = false;


let toClear = false;
const eq = document.getElementById('eq');
const _memDisaplay = document.querySelector('.display');
const display = document.querySelector('.display > input');

function toCLearCheck() {
  if (toClear || getDisplayValue() === '0') {
    setDisplayValue('');
    toClear = false;
  }
}

function clearALL() {
  setDisplayValue('');
  operandOne = undefined;
  operandTwo = undefined;
}

function canGetResult() {
  (!(operandOne === undefined) && getDisplayValue()) ? eq.disabled = false : eq.disabled = true;
}

function setMemory() {
  memory = display.value;
  _memDisaplay.classList.add('memory');
}
function getMemory() {
  display.value = memory;
}
function clearMemory() {
  memory = 0;
  _memDisaplay.classList.remove('memory');
}

function getDisplayValue() {
  return display.value;
}

function setDisplayValue(val) {
  display.value = val;
}

function addDisplayValue(val) {
  display.value += val;
}

function operation(sign) {
  if (sign === '/') return function (x, y) { return x / y; }
  else if (sign === '*') return function (x, y) { return x * y; }
  else if (sign === '-') return function (x, y) { return x - y; }
  else if (sign === '+') return function (x, y) { return x + y; }
  return function () { return 0; }
}


function sign(sign) {
  if (operandOne === undefined || operandOne === '') {
    operandOne = getDisplayValue();
    toClear = true;
    myOperation = operation(sign);
  }

  else if (getDisplayValue() && newDigit && !operandTwo) {
    operandTwo = getDisplayValue();
    operandOne = result();
    setDisplayValue(operandOne);
    toClear = true;
    operandTwo = undefined;
    newDigit = false;
    myOperation = operation(sign);
  }
  else {
    operandTwo = undefined;
    myOperation = operation(sign);
  }
}

function result() {
  let res;
  const oper1 = Number(operandOne);
  const oper2 = Number(operandTwo);
  if (oper2 === 0 && isDivison === true) {
    toClear = true;
    operandTwo = operandOne;
    setTimeout(clearALL, 1000);
    return 'err zero';
  }
  res = myOperation(oper1, oper2);
  if (res.toString().includes('.')) {
    toClear = true;
    return res = res.toFixed(4);
  }
  toClear = true;
  return res;
}

function buttonDefenition(btn) {
  switch (btn) {
    case ('1'):
      newDigit = true;
      toCLearCheck();
      addDisplayValue('1');
      break;
    case ('2'):
      newDigit = true;
      toCLearCheck();
      addDisplayValue('2');
      break;
    case ('3'):
      newDigit = true;
      toCLearCheck();
      addDisplayValue('3');
      break;
    case ('4'):
      newDigit = true;
      toCLearCheck();
      addDisplayValue('4');
      break;
    case ('5'):
      newDigit = true;
      toCLearCheck();
      addDisplayValue('5');
      break;
    case ('6'):
      newDigit = true;
      toCLearCheck();
      addDisplayValue('6');
      break;
    case ('7'):
      newDigit = true;
      toCLearCheck();
      addDisplayValue('7');
      break;
    case ('8'):
      newDigit = true;
      toCLearCheck();
      addDisplayValue('8');
      break;
    case ('9'):
      newDigit = true;
      toCLearCheck();
      addDisplayValue('9');
      break;
    case ('0'):
      newDigit = true;
      if ((getDisplayValue().length === 1) && getDisplayValue() === '0') { return; }
      toCLearCheck();
      addDisplayValue('0');
      break;
    case ('/'):
      isDivison = true;
      sign('/');
      break;
    case ('*'):
      isDivison = false;
      sign('*');
      break;
    case ('-'):
      isDivison = false;
      sign('-');
      break;
    case ('+'):
      isDivison = false;
      sign('+');
      break;
    case ('='):
      if (operandTwo === undefined || operandTwo === "000") {
        operandTwo = getDisplayValue();
      }
      operandOne = result();
      setDisplayValue(operandOne);
      break;
    case ('Enter'):
      if (operandTwo === undefined || operandTwo === "000") {
        operandTwo = getDisplayValue();
      }
      operandOne = result();
      setDisplayValue(operandOne);
      break;
    case ('.'):
      if (getDisplayValue().includes('.')) { return; }
      addDisplayValue('.');
      break;
    case ('C'):
      clearALL();
      break;
    case ('mrc'):
      if (memory === getDisplayValue() && operandTwo === "000") {
        clearMemory();
      }
      else {
        getMemory();
        operandTwo = "000";
      }
      break;
    case ('m-'):
      if (!(getDisplayValue().includes('out of range'))) {
        setMemory();
        toClear = true;
      }
      break;
    case ('m+'):
      if (!(getDisplayValue().includes('out of range'))) {
        setMemory();
        toClear = true;
      }
      break;
    default:
      return;
  }
}


window.addEventListener("DOMContentLoaded", (e) => {

  const wrapper = document.querySelector(".keys");

  wrapper.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT" && (display.value).length <= 11) {
      buttonDefenition(e.target.value);
      canGetResult();
    }
    else if (e.target.tagName === "INPUT" && (display.value).length > 11) {
      buttonDefenition(e.target.value);
      setDisplayValue('ERROR');
      setTimeout(clearALL, 1000);
    }
  }, false);

  window.addEventListener("keypress", (e) => {
    buttonDefenition(e.key);
    canGetResult();
  }, false);


}, false);

