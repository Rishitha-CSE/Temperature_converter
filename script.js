const convertButton = document.getElementById("convertButton");
const inputTemperature = document.getElementById("inputTemperature");
const inputUnit = document.getElementById("inputUnit");
const resultElement = document.getElementById("result");

convertButton.addEventListener("click", () => {
    const temperature = parseFloat(inputTemperature.value);
    const unit = inputUnit.value;

    if (isNaN(temperature)) {
        resultElement.innerText = "Please enter a valid number.";
        return;
    }

    if (unit === "celsius") {
        const convertedTemperature = (temperature * 9/5) + 32;
        resultElement.innerText = `${temperature}°C is ${convertedTemperature.toFixed(2)}°F`;
    } else if (unit === "fahrenheit") {
        const convertedTemperature = (temperature - 32) * 5/9;
        resultElement.innerText = `${temperature}°F is ${convertedTemperature.toFixed(2)}°C`;
    }
});
