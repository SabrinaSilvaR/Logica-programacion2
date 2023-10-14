function degreeConverter() {
    let celsius;
    while (true) {
      celsius = parseFloat(prompt('Ingresa los grados Celsius'));
  
      if (!isNaN(celsius)) {
        break; 
      }
  
      console.error('Ingresa tus grados Celsius con números');
    }
  
    const fahrenheit = celsius * 9/5 + 32;
    const kelvin = celsius + 273.15;
  
    console.log(`El valor ${celsius} convertido a Fahrenheit es ${fahrenheit.toFixed(2)} y en Kelvin es ${kelvin.toFixed(2)}`);
  }
  
  degreeConverter();