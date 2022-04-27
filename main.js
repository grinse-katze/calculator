const buttonContainer = document.querySelector(".button-container");
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");


// Create one button for each number
function createButtons(){
    for (let i = 0; i <= 9; i++) {
        const buttons = document.createElement('button');
        buttons.classList.add('numbers');
        buttons.textContent = i;
        buttons.value = i;
        buttonContainer.appendChild(buttons);
        buttons.addEventListener("click", () => {
            display.textContent = i
            //operate(buttons.value)
        });
    }
}

/*function operate(num) {
    let num1 = num;
    console.log(num1);
}*/

function operator(op) {
    let num1 = 1;
    let num2 = 2;
    if (op === '+') {
        return num1 + num2;
    }
}

createButtons();

operatorButtons.forEach( btn =>
    btn.addEventListener("click", () => {
        display.textContent = btn.value
        operator(btn.value)
    })
);