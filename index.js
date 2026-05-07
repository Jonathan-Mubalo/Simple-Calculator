const calculatorDisplay= document.getElementById('display');

function calculatorOperator(input){
    calculatorDisplay['value'] += input;
}

function clearDisplay(){
    calculatorDisplay.value = '';
}
 
function calculate(){
    calculatorDisplay.value= eval(calculatorDisplay.value);
}
