const calculatorDisplay= document.getElementById('display');

function calculatorOperator(input){
  return  calculatorDisplay['value'] += input;
}

function clearDisplay(){
   return calculatorDisplay.value = '';
}
 
function calculate(){
   if(calculatorDisplay.value.includes("+") == true){
      let plusPos= calculatorDisplay.value.indexOf("+");
      let firstPart= calculatorDisplay.value.slice(0,plusPos);
      let firstValue= parseFloat(firstPart);
      let secondPart= calculatorDisplay.value.slice(plusPos+1);
      let secondValue= parseFloat(secondPart);

      let finalAnswer= firstValue + secondValue;
     return calculatorDisplay.value = finalAnswer;}
   
   //return calculatorDisplay.value= eval(calculatorDisplay.value);
}


