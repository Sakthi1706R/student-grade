document.getElementById("divideButton").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    const resultElement = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers.";
    } else if (num2 === 0) {
        resultElement.textContent = "Cannot divide by zero!";
    } else {
        const result = num1 / num2;
        resultElement.textContent = result.toFixed(2); 
    }
});

document.getElementById("multipleButton").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
  
    const result1Element = document.getElementById("result1");
    
    if (isNaN(num1) || isNaN(num2)) {
        result1Element.textContent = "Please enter valid numbers.";
    } else if (num2 === 0) {
        result1Element.textContent = "Cannot multiply by zero!";
    } else {
        const result = num1 * num2;
        result1Element.textContent = result.toFixed(0); 
    }
});
