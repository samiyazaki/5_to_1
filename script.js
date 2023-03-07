function calculateRatio() {
    // Get the input values
    var carbs = parseFloat(document.getElementById("carbsInput").value);
    var fiber = parseFloat(document.getElementById("fiberInput").value);

    // Check for errors
    if (isNaN(carbs) || isNaN(fiber) || fiber === 0) {
        document.getElementById("error").innerHTML = "Please enter valid values for Carbohydrates and Fiber.";
        return;
    }

    // Calculate the ratio
    var ratio = carbs / fiber;

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = ratio.toFixed(1) + ":1 ratio";

    // Check the ratio and display the appropriate message
    var messageElement = document.getElementById("message");
    if (ratio >= 5.1) {
        messageElement.innerHTML = "No bueno";
    } else {
        messageElement.innerHTML = "Good to go!";
    }
}