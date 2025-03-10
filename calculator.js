let history = [];

function whenButtonClick() {
    const num1Input = document.getElementById("num1").value;
    const num2Input = document.getElementById("num2").value;
    const operator = document.getElementById("operator").value;

    if (num1Input === "" || num2Input === "" || isNaN(num1Input) || isNaN(num2Input)) {
        alert("Ошибка: введите корректные числа!");
        return;
    }

    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);

    let result;
    switch (operator) {
        case "+": 
            result = num1 + num2; 
            break;
        case "-": 
            result = num1 - num2; 
            break;
        case "*": 
            result = num1 * num2; 
            break;
        case "/": 
            if (Math.abs(num2)<Number.EPSILON) {
                result = "Ошибка: деление на ноль невозможно!";
            } else {
                result = num1 / num2;
            }
            break;
    }

    const currentOperation = `${num1} ${operator} ${num2} = ${result}`;
    history.push(currentOperation);

    if (history.length > 2) {
        history.shift();
    }

    let historyHTML = history.map(op => `<span class="muted">${op}</span>`).join("<br>");

    document.getElementById("result").innerHTML = `${historyHTML}<br> <span class="bold">${currentOperation}</span>`;
}
