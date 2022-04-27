let a = parseInt(prompt("Input a number:"));
let b = parseInt(prompt("Input a number:"));

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
    console.log((a/b).toFixed(10));
}

add(a, b);
substract(a, b);
multiply(a, b);
divide(a, b);