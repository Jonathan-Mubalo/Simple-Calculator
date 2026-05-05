const calculatorDisplay= document.getElementById('display');

function calculatorOperator(input){
    calculatorDisplay['value'] += input;
}

function clearDisplay(input){
    calculatorDisplay.value = '';
}

function calculate(input){
    calculatorDisplay.value= eval(calculatorDisplay.value);
}
