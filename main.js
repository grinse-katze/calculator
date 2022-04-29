/*let a = parseInt(prompt("Input a number:"));
let b = parseInt(prompt("Input a number:"));
let operator = prompt("Please input an operator: +, -, *, /")
*/
const operatorBtn = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".numbers");
const enterBtn = document.querySelector(".enter");
const display = document.querySelector(".display");

let numberContainer = [];
let inputNumber = '';
let operator = '';


function readValue(e){
    display.textContent = e.innerText;
    inputNumber += e.innerText;
    console.log(inputNumber);
}

function readOperator(e){
    display.textContent = e.innerText;
    operator = e.innerText;
    addNumberArray();
}

function addNumberArray(){
    numberContainer.push(inputNumber);
    inputNumber = '';
    console.log(numberContainer)
}

enterBtn.addEventListener("click", () => {
    addNumberArray();
    operate(operator, numberContainer[0], numberContainer[1]);
});

function operate(operator, a, b){
    a = parseInt(a);
    b = parseInt(b);
    switch(operator){
        case '+':
            display.textContent = a + b;
            break;
        case '-':
            display.textContent = a - b;
            break;
        case '*':
            display.textContent = a * b;
            break;
        case '/':
            display.textContent = a / b;
            break;
    }
}

operatorBtn.forEach(btn => {
    btn.addEventListener("click", () =>{
        readOperator(btn);
    })
})

numbers.forEach(btn => {
    btn.addEventListener("click", () => {
        readValue(btn);
    })
})