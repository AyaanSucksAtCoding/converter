function convert() {
    // Get values from the input fields and dropdowns
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const value = document.getElementById('value').value;

    let convertedValue;

    // Check if input value is provided
    if (value === '') {
        document.getElementById('result').textContent = "Please enter a value.";
        return;
    }

    // Conversion logic
    if (fromUnit === 'km' && toUnit === 'miles') {
        convertedValue = value * 0.621371; // 1 km = 0.621371 miles
    } else if (fromUnit === 'miles' && toUnit === 'km') {
        convertedValue = value / 0.621371; // 1 mile = 1.60934 km
    } else {
        convertedValue = value; // If fromUnit and toUnit are the same
    }

    // Display the result
    document.getElementById('result').textContent = `Result: ${convertedValue} ${toUnit}`;
}
