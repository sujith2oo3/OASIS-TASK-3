function convertTemperature(temp, unit) {
    if (unit === "Celsius") {
      // Convert Celsius to Fahrenheit
      return (temp * 9/5) + 32;
    } else if (unit === "Fahrenheit") {
      // Convert Fahrenheit to Celsius
      return (temp - 32) * 5/9;
    } else if (unit === "Kelvin") {
      // Convert Kelvin to Celsius
      return temp - 273.15;
    }
  }
  function chBackcolor(color) {
    document.body.style.background = color;
 }
  
  // Add an event listener to the form
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the temperature and unit from the form
    const temp = parseFloat(document.querySelector('#temp').value);
    const unit = document.querySelector('#unit').value;
    
    // Convert the temperature and display the result
    const result = convertTemperature(temp, unit);
    document.getElementById('result').value = ` ${result.toFixed(2)} ${unit === "Celsius" ? "Fahrenheit" : "Celsius"}`;
  });
  