/*let a = parseInt(prompt("Input a number:"));
let b = parseInt(prompt("Input a number:"));
let operator = prompt("Please input an operator: +, -, *, /")
*/
const operatorBtn = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".numbers");
const enterBtn = document.querySelector(".enter");
const display = document.querySelector(".display");
const numberContainer = [];
let operator = '';


function readValue(){
    numbers.forEach(btn => {
        btn.addEventListener("click", () => {
            display.textContent = btn.innerText;
            numberContainer.push(btn.innerText);
            console.log(numberContainer);
        })
    })
}

function readOperator(){
    operatorBtn.forEach(btn => {
        btn.addEventListener("click", () =>{
            display.textContent = btn.innerText;
            operator = btn.innerText;
            //console.log(operator);
        })
    })
}

readValue();
readOperator();

enterBtn.addEventListener("click", () => operate(operator, numberContainer[0], numberContainer[1]));

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