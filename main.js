// Función para convertir de Celsius a Fahrenheit o Kelvin
function convertCelsius(value, temperatureType) {
    switch (temperatureType) {
      case 1: // Fahrenheit
        // Fórmula para convertir Celsius a Fahrenheit: F = (C * 9/5) + 32
        return (value * 9) / 5 + 32;
      case 2: // Kelvin
        // Fórmula para convertir Celsius a Kelvin: K = C + 273.15
        return value + 273.15;
      default:
        return null;
    }
  }
  
  // Función para convertir de Fahrenheit a Celsius o Kelvin
  function convertFahrenheit(value, temperatureType) {
    switch (temperatureType) {
      case 1: // Celsius
        // Fórmula para convertir Fahrenheit a Celsius: C = (F - 32) * 5/9
        return ((value - 32) * 5) / 9;
      case 2: // Kelvin
        // Fórmula para convertir Fahrenheit a Kelvin: K = (F - 32) * 5/9 + 273.15
        return ((value - 32) * 5) / 9 + 273.15;
      default:
        return null;
    }
  }
  
  // Función para convertir de Kelvin a Celsius o Fahrenheit
  function convertKelvin(value, temperatureType) {
    switch (temperatureType) {
      case 1: // Celsius
        // Fórmula para convertir Kelvin a Celsius: C = K - 273.15
        return value - 273.15;
      case 2: // Fahrenheit
        // Fórmula para convertir Kelvin a Fahrenheit: F = (K - 273.15) * 9/5 + 32
        return ((value - 273.15) * 9) / 5 + 32;
      default:
        return null;
    }
  }
  
  // Función principal para realizar la conversión
  function convertTemperature(value, inputType, outputType) {
    switch (inputType) {
      case 1: // Celsius
        return convertCelsius(value, outputType);
      case 2: // Fahrenheit
        return convertFahrenheit(value, outputType);
      case 3: // Kelvin
        return convertKelvin(value, outputType);
      default:
        return null;
    }
  }
  
  // Solicitar al usuario su nombre
  let userName = prompt("Ingrese su nombre:");
  
  // Solicitar al usuario el valor, el tipo de temperatura de origen y el tipo de temperatura de destino
  let inputValue = parseFloat(prompt("Ingrese la temperatura a convertir:"));
  if (isNaN(inputValue)) {
    alert("Por favor, ingrese un valor numérico válido.");
  } else {
    let inputType = parseInt(
      prompt(
        "Ingrese el tipo de temperatura desde el que desea convertir:\n1. Celsius\n2. Fahrenheit\n3. Kelvin"
      )
    );
    if (![1, 2, 3].includes(inputType)) {
      alert("Por favor, seleccione una opción válida.");
    } else {
      let outputType = parseInt(
        prompt(
          "Ingrese el tipo de temperatura a la que desea convertir:\n1. Celsius\n2. Fahrenheit\n3. Kelvin"
        )
      );
      if (![1, 2, 3].includes(outputType)) {
        alert("Por favor, seleccione una opción válida.");
      } else {
        // Realizar la conversión y mostrar el resultado
        let inputTypeName = "";
        let outputTypeName = "";
        switch (inputType) {
          case 1:
            inputTypeName = "Celsius";
            break;
          case 2:
            inputTypeName = "Fahrenheit";
            break;
          case 3:
            inputTypeName = "Kelvin";
            break;
        }
        switch (outputType) {
          case 1:
            outputTypeName = "Celsius";
            break;
          case 2:
            outputTypeName = "Fahrenheit";
            break;
          case 3:
            outputTypeName = "Kelvin";
            break;
        }
        let result = convertTemperature(inputValue, inputType, outputType);
        if (result !== null) {
          alert(
            `Hola ${userName}, la temperatura ingresada de ${inputValue} ${inputTypeName} es equivalente a ${result.toFixed(
              2
            )} ${outputTypeName}.`
          );
        } else {
          alert(
            "Opción no válida. Por favor, elija entre Celsius (1), Fahrenheit (2) o Kelvin (3)."
          );
        }
      }
    }
  }
  