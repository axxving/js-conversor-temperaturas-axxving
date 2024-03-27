# Conversor de Temperatura

Este script en JavaScript te permite convertir valores de temperatura entre Celsius, Fahrenheit y Kelvin, ofreciendo una experiencia personalizada al permitir que el usuario ingrese su nombre.

## Funciones de Conversión

El script contiene tres conjuntos de funciones para realizar conversiones de temperatura entre diferentes unidades:

1. Conversión de Celsius:
   - `convertCelsius(value, temperatureType)`: Convierte de Celsius a Fahrenheit o Kelvin.
2. Conversión de Fahrenheit:
   - `convertFahrenheit(value, temperatureType)`: Convierte de Fahrenheit a Celsius o Kelvin.
3. Conversión de Kelvin:
   - `convertKelvin(value, temperatureType)`: Convierte de Kelvin a Celsius o Fahrenheit.

Cada función toma dos parámetros: el valor de temperatura y el tipo de temperatura al que se desea convertir (1 para Celsius, 2 para Fahrenheit, 3 para Kelvin).

## Función Principal de Conversión

La función principal `convertTemperature(value, inputType, outputType)` determina el tipo de temperatura de origen y llama a la función correspondiente de conversión.

## Interacción con el Usuario

El script solicita al usuario ingresar su nombre para personalizar la experiencia. Luego, solicita el valor de temperatura, el tipo de temperatura de origen y el tipo de temperatura de destino mediante ventanas emergentes de diálogo (`prompt`).

## Ejemplo de Uso

1. El usuario ingresa su nombre.
2. Luego, ingresa el valor de temperatura, por ejemplo, 30.
3. Después, elige el tipo de temperatura de origen entre Celsius (1), Fahrenheit (2) o Kelvin (3).
4. Finalmente, selecciona el tipo de temperatura de destino entre Celsius (1), Fahrenheit (2) o Kelvin (3).
5. El script calcula la conversión y muestra el resultado en una ventana emergente (`alert`), redondeando a dos decimales.

¡Disfruta convirtiendo tus temperaturas con este script personalizado!
