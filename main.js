let a = parseInt(prompt("Input a number:"));
let b = parseInt(prompt("Input a number:"));
let operator = prompt("Please input an operator: +, -, *, /")

function add(a, b){
    console.log(a + b);
}

function substract(a, b){
    console.log(a - b);
}

function multiply(a, b){
    console.log(a * b);
}

function divide(a, b){
    //console.log((a/b).toFixed(10));
    if (a == 0 || b == 0){
        console.log("Don't crash me!");
        return;
    }
    console.log((a/b));
}

function operate(operator, a, b){
    switch(operator){
        case '+':
            add(a, b);
            break;
        case '-':
            substract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
    }
}

operate(operator, a, b);