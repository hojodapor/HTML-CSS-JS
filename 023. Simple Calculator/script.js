button = document.getElementById("btn");

button.addEventListener("click", () => {
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    let result = document.querySelector(".result");
    let operator = document.getElementById("selectOp").value

    switch (operator) {
        case "addition":
            result.innerHTML = Number(num1) + Number(num2);
            break;
        case "subtraction":
            result.innerHTML = Number(num1) - Number(num2);  
            break;
        case "division":
            result.innerHTML = Number(num1) / Number(num2);  
                break;
        case "multiplication":
            result.innerHTML = Number(num1) * Number(num2);         
    }
});