const buttonContainer = document.querySelector(".button-container");

// Create one button for each number
for (let i = 0; i <= 9; i++) {
    const buttons = document.createElement('button');
    buttons.classList.add('numbers');
    buttons.textContent = i;
    buttonContainer.appendChild(buttons);
}



function operate(num1, num2) {

}