const operatorBtn = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".numbers");
const enterBtn = document.querySelector(".enter");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
const decimalBtn = document.querySelector(".decimal")
const clearBtn = document.querySelector(".clear");

let numberContainer = [];
let inputNumber = '';
let operator = '';
let currentResult = 0;
let decimal = false;


function readValue(num){
    if (decimal && inputNumber.includes('.') < 1) {
        input.textContent += '.';
        inputNumber += '.';
        console.log(inputNumber);
        decimal = false;
        return;
    } else if (decimal && inputNumber.includes('.') >= 1) {
        decimal = false;
        return;
    }
    input.textContent += num;
    inputNumber += num;  
}

function readOperator(op){
    input.textContent += op;
    operator = op;
}

function fillNumberArray(){
    if (numberContainer.length < 2 && inputNumber != '') {
        numberContainer.push(Number(inputNumber));
        inputNumber = '';
        console.log('fill', numberContainer)
    } else {
    //if enter is clicked before numberContainer has a second input, display first input
        console.log(true);
        result.textContent = numberContainer[0];
    }
    evaluate();
}

function evaluate(){
    if (numberContainer[1] == 0 && operator == '/') {
        result.textContent = 'ERROR';
    }
    else if (numberContainer.length >= 2) {
        operate(operator, numberContainer);
    }
}

function checkNextOperator(){
    if (operator != '') {
        numberContainer = [];
        numberContainer[0] = currentResult;
        console.log(numberContainer[0]);
    }
}

function clearDisplay(){
    input.textContent = '';
    result.textContent = '';
    numberContainer = [];
    console.log(numberContainer);
}

function operate(operator, numbers){
    switch(operator){
        case '+':
            currentResult = numbers.reduce((result, nums) => result + nums);
            result.textContent = currentResult;
            break;
        case '-':
            currentResult = numbers.reduce((result, nums) => result - nums);
            result.textContent = currentResult;
            break;
        case '*':
            currentResult = numbers.reduce((result, nums) => result * nums);
            result.textContent = currentResult;
            break;
        case '/':
            currentResult = numbers.reduce((result, nums) => result / nums);
            result.textContent = currentResult;
            break;
    }
    operator = '';
    console.log('operate', currentResult);
    checkNextOperator()
}

numbers.forEach(btn => {
    btn.addEventListener("click", () => readValue(btn.innerText))
})

operatorBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        fillNumberArray();
        readOperator(btn.innerText)
    })
})

decimalBtn.addEventListener("click", () => {
    decimal = true;
    readValue()
})

enterBtn.addEventListener("click", () => fillNumberArray())

clearBtn.addEventListener("click", () => clearDisplay())
