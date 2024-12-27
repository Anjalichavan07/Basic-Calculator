let memory = 0; // Memory value for M+, MR, and MC functions

// Append value to the input field
function appendValue(value) {
    const resultField = document.getElementById("result");
    resultField.value += value;
}

// Clear the input field
function clearResult() {
    document.getElementById("result").value = "";
}

// Perform the calculation
function calculate() {
    try {
        const resultField = document.getElementById("result");
        resultField.value = eval(resultField.value);
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

// Calculate square root
function calculateSquareRoot() {
    const resultField = document.getElementById("result");
    const value = parseFloat(resultField.value);
    if (isNaN(value)) {
        resultField.value = "Error";
    } else {
        resultField.value = Math.sqrt(value);
    }
}

// Calculate percentage
function calculatePercentage() {
    const resultField = document.getElementById("result");
    const value = parseFloat(resultField.value);
    if (isNaN(value)) {
        resultField.value = "Error";
    } else {
        resultField.value = value / 100;
    }
}

// Memory Functions
function memoryClear() {
    memory = 0;
    alert("Memory Cleared");
}

function memoryRecall() {
    document.getElementById("result").value = memory;
}

function memoryAdd() {
    const resultField = document.getElementById("result");
    const value = parseFloat(resultField.value);
    if (!isNaN(value)) {
        memory += value;
        alert(`Added to Memory: ${memory}`);
    } else {
        alert("Invalid input for memory");
    }
}
