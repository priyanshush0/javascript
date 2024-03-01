// const display = document.getElementById('display');
// let firstOperand = null;
// let secondOperand = null;
// let currentOperator = null;

// function appendNumber(number) {
//   if (currentOperator === null) {
//     firstOperand = firstOperand !== null ? parseFloat(`${firstOperand}${number}`) : number;
//     display.value = firstOperand;
//   } else {
//     secondOperand = secondOperand !== null ? parseFloat(`${secondOperand}${number}`) : number;
//     display.value = secondOperand;
//   }
// }

// function setOperator(operator) {
//   if (firstOperand !== null && secondOperand !== null) {
//     calculate();
//   }
//   currentOperator = operator;
// }

// function clearDisplay() {
//   firstOperand = null;
//   secondOperand = null;
//   currentOperator = null;
//   display.value = '';
// }

// function decimalPoint() {
//   if (currentOperator === null) {
//     if (firstOperand === null) {
//       firstOperand = 0;
//     }
//     if (!firstOperand.toString().includes('.')) {
//       firstOperand += '.';
//       display.value = firstOperand;
//     }
//   } else {
//     if (secondOperand === null) {
//       secondOperand = 0;
//     }
//     if (!secondOperand.toString().includes('.')) {
//       secondOperand += '.';
//       display.value = secondOperand;
//     }
//   }
// }

// function calculate() {
//   if (firstOperand !== null && secondOperand !== null && currentOperator !== null) {
//     let result;
//     switch (currentOperator) {
//       case '+':
//         result = firstOperand + secondOperand;
//         break;
//       case '-':
//         result = firstOperand - secondOperand;
//         break;
//       case '*':
//         result = firstOperand * secondOperand;
//         break;
//       case '/':
//         if (secondOperand === 0) {
//           clearDisplay();
//           alert('Cannot divide by zero');
//           return;
//         }
//         result = firstOperand / secondOperand;
//         break;
//       default:
//         return;
//     }
//     display.value = result;
//     firstOperand = result;
//     secondOperand = null;
//     currentOperator = null;
//   }
// }

let inp=document.querySelector('input');
let btn=document.querySelector('article');
console.log(inp);
console.log(btn);

btn.addEventListener('click',(e)=>{
  // console.log(e.target.nodeName);
  // console.log(e.target.innerText);
  if(e.target.innerText==='C'){
    inp.value="";
  }
  else if(e.target.innerText==="bsapce"){
    if(inp.value!=""){
      let data =inp.value.split('');
      data.pop();
      inp.value=data.join('');

    }
  }
  else if(e.target.innerText==='='){
    try{
      inp.value=eval(inp.value);
    }
    catch(e){
      inp.value="Invalid";

    }
  }

  else{
    inp.value+=e.target.innerText;
  }
})



