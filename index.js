const calculatorDisplay = document.getElementById('display');

function calculatorOperator(input) {
   return calculatorDisplay['value'] += input;
}

function calculatorDelete() {
   let lastCharacterPos = calculatorDisplay.value.length;
   let newValue = calculatorDisplay.value.slice(0, lastCharacterPos - 1);
   return calculatorDisplay.value = newValue;
}

function clearDisplay() {
   return calculatorDisplay.value = '';
}

function calculate() {

if(calculatorDisplay.value.includes('+-') || calculatorDisplay.value.includes('++') || calculatorDisplay.value.includes('+/') || calculatorDisplay.value.includes('+*') || calculatorDisplay.value.includes('--') || calculatorDisplay.value.includes('-+') || calculatorDisplay.value.includes('-/') || calculatorDisplay.value.includes('-*') || calculatorDisplay.value.includes('/-') || calculatorDisplay.value.includes('/+') || calculatorDisplay.value.includes('//') || calculatorDisplay.value.includes('/*') || calculatorDisplay.value.includes('*-') || calculatorDisplay.value.includes('*+') || calculatorDisplay.value.includes('*/') || calculatorDisplay.value.includes('**')){
   return calculatorDisplay.value= `Syntax error`;
}

  else if (calculatorDisplay.value.includes("/") == true) {
      let divPos = calculatorDisplay.value.indexOf('/');
     let firstPart = calculatorDisplay.value.slice(0, divPos);
     let firstValue = parseFloat(firstPart);
     let secondPart = calculatorDisplay.value.slice(divPos + 1);
     let secondValue = parseFloat(secondPart);
     let finalAnswer = firstValue / secondValue;
      return calculatorDisplay.value = finalAnswer;
   }

   else if (calculatorDisplay.value.includes("*") == true) {

      let timesPos = calculatorDisplay.value.indexOf('*');
      firstPart = calculatorDisplay.value.slice(0, timesPos);
      firstValue = parseFloat(firstPart);
      secondPart = calculatorDisplay.value.slice(timesPos + 1);
      secondValue = parseFloat(secondPart);
      finalAnswer = firstValue * secondValue;
      return calculatorDisplay.value = finalAnswer;
   }

   else if (calculatorDisplay.value.includes("+") == true) {
      let plusPos = calculatorDisplay.value.indexOf("+");
      firstPart = calculatorDisplay.value.slice(0, plusPos);
      firstValue = parseFloat(firstPart);
      secondPart = calculatorDisplay.value.slice(plusPos + 1);
      secondValue = parseFloat(secondPart);
      finalAnswer = firstValue + secondValue;
      return calculatorDisplay.value = finalAnswer;
   }

   else if (calculatorDisplay.value.includes("-") == true) {
      let subPos = calculatorDisplay.value.indexOf("-");
      firstPart = calculatorDisplay.value.slice(0, subPos);
      firstValue = parseFloat(firstPart);
      secondPart = calculatorDisplay.value.slice(subPos + 1);
      secondValue = parseFloat(secondPart);
      finalAnswer = firstValue - secondValue;
      return calculatorDisplay.value = finalAnswer;
   }

   else if (calculatorDisplay.value.includes("√")) {
      let rootPos = calculatorDisplay.value.indexOf("√");
      firstPart = calculatorDisplay.value.slice(0, rootPos);
      firstValue = parseFloat(firstPart);
      secondPart = calculatorDisplay.value.slice(rootPos + 1);
      secondValue = parseFloat(secondPart);
      // if(firstValue == ""){
      // finalAnswer = firstValue*Math.sqrt(secondPart);
      // return calculatorDisplay.value = finalAnswer;
      // }
      finalAnswer = Math.sqrt(secondPart);
      //THERES MORE TO BE DONE IN TERMS OF A NUMBER IN FRONT OF A SQUARE ROOT
      finalAnswer = Math.sqrt(secondPart);
      return calculatorDisplay.value = finalAnswer;
   }

   else if (calculatorDisplay.value.includes("²") == true) {
      let squarePos = calculatorDisplay.value.indexOf("²");
      firstPart = calculatorDisplay.value.slice(0, squarePos);
      firstValue = parseFloat(firstPart);
      finalAnswer = Math.pow((firstValue),2);
      return calculatorDisplay.value = finalAnswer;
   }

   else {
      let powerPos = calculatorDisplay.value.indexOf("^");
      firstPart = calculatorDisplay.value.slice(0, powerPos);
      firstValue = parseFloat(firstPart);
      secondPart = calculatorDisplay.value.slice(powerPos + 1);
      secondValue = parseFloat(secondPart);
      finalAnswer = firstValue ** secondValue;
      return calculatorDisplay.value = finalAnswer;
   }

   //return calculatorDisplay.value= eval(calculatorDisplay.value);
}


