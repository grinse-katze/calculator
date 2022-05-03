const operatorBtn = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".numbers");
const enterBtn = document.querySelector(".enter");
const input = document.querySelector(".input");
const result = document.querySelector(".input");
const clearBtn = document.querySelector(".clear");

/*
let previousNum = '';
let currentNum = '';
let operator = '';


function readInput(num){
    //assign currentNum the input of the clicked number button
    input.textContent += num;
    currentNum += num;
    console.log("current:", currentNum);
}

function readOperator(op){
    input.textContent += op;
    operator = op
    evaluate();
}

function evaluate(num) {
    if (currenNum != '') {

    }
    previousNumber = currentNum;
    currentNum = '';
    currentNum += num;
    console.log(`pervious: ${previousNum}, current: ${currentNum}`);
}

function operate(operator, a, b){
    a = parseInt(a);
    b = parseInt(b);
    switch(operator){
        case '+':
            currentResult = a + b;
            result.textContent = currentResult;
            break;
        case '-':
            currentResult = a - b;
            result.textContent = currentResult;
            break;
        case '*':
            currentResult = a * b;
            result.textContent = currentResult;
            break;
        case '/':
            currentResult = a / b;
            result.textContent = currentResult;
            break;
    }
    operator = '';

}

numbers.forEach(btn => {
    btn.addEventListener("click", () => readInput(btn.innerText))
})

operatorBtn.forEach(btn => {
    btn.addEventListener("click", () => readOperator(btn.innerText))
})

enterBtn.addEventListener("click", () => {
    fillNumberArray();
    operate(operator, numberContainer);
});
*/

let numberContainer = [];
let inputNumber = '';
let operator = '';
let currentResult = 0;


function readValue(num){
    input.textContent += num;
    inputNumber += num;
    //fillNumberArray();
}

function readOperator(op){
    input.textContent += op;
    operator = op;
    console.log(operator);
}

function fillNumberArray(){
    if (numberContainer.length < 2) {
        numberContainer.push(parseInt(inputNumber));
        inputNumber = '';
        console.log(numberContainer)
    }
    evaluate();
}

function clearDisplay(){
    input.textContent = '';
    result.textContent = '';
    numberContainer = [];
    console.log(numberContainer);
}

function checkNextOperator(){
    if (operator != '') {
        numberContainer = [];
        console.log(numberContainer);
        numberContainer[0] = currentResult;
        console.log(numberContainer[0]);
    }
}

function evaluate(){
    if (numberContainer.length >= 2) {
        console.log(true);
        operate(operator, numberContainer);
    }
    
}

function operate(operator, numbers){
    switch(operator){
        //after operator switches, change operation from + to - and so forth
        // brainstorming: turn var operator into array?
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
    // empty the operator
    operator = '';
    console.log(currentResult);
    checkNextOperator()

}


numbers.forEach(btn => {
    btn.addEventListener("click", () => {
        readValue(btn.innerText)
    //    evaluate();
    })
})

operatorBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        fillNumberArray();
        readOperator(btn.innerText)
    //    evaluate();
    })
})

enterBtn.addEventListener("click", () => {
    fillNumberArray();
    operate(operator, numberContainer);
});

clearBtn.addEventListener("click", () => clearDisplay())
