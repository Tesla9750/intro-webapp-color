document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos los elementos del DOM
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorPicker = document.getElementById('colorPicker');
    const rgbOutput = document.getElementById('rgbOutput');
    const hexOutput = document.getElementById('hexOutput');

    // Función para actualizar la visualización del color
    function updateColor() {
        // Obtener los valores de los controles deslizantes
        const redValue = parseInt(redRange.value) || 0;
        const greenValue = parseInt(greenRange.value) || 0;
        const blueValue = parseInt(blueRange.value) || 0;

        // Actualizar los campos de entrada de texto
        redInput.value = redValue;
        greenInput.value = greenValue;
        blueInput.value = blueValue;

        // Actualizar el color de la salida RGB
        rgbOutput.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;

        // Convertir los valores a hexadecimal (mayúsculas) y mostrarlos
        const hexColor = `#${componentToHex(redValue)}${componentToHex(greenValue)}${componentToHex(blueValue)}`;
        hexOutput.innerText = hexColor;

        // Actualizar el valor del input color picker
        colorPicker.value = hexColor;
    }

    // Función para actualizar el color desde las entradas de texto
    function updateColorFromInputs() {
        // Obtener los valores de los campos de entrada de texto
        const redValue = parseInt(redInput.value) || 0;
        const greenValue = parseInt(greenInput.value) || 0;
        const blueValue = parseInt(blueInput.value) || 0;

        // Actualizar los controles deslizantes y la salida de color
        redRange.value = redValue;
        greenRange.value = greenValue;
        blueRange.value = blueValue;

        // Actualizar la salida de color
        updateColor();
    }

    // Manejar el cambio de color desde el input color picker
    colorPicker.addEventListener('input', function () {
        // Obtener los valores RGB desde el color seleccionado
        const hexColor = colorPicker.value.substr(1); // Eliminar el carácter '#'
        const redValue = parseInt(hexColor.substring(0, 2), 16);
        const greenValue = parseInt(hexColor.substring(2, 4), 16);
        const blueValue = parseInt(hexColor.substring(4, 6), 16);

        // Actualizar los controles deslizantes y la salida de color
        redRange.value = redValue;
        greenRange.value = greenValue;
        blueRange.value = blueValue;

        // Actualizar los campos de entrada de texto y la salida de color
        redInput.value = redValue;
        greenInput.value = greenValue;
        blueInput.value = blueValue;
        updateColor();
    });

    // Función auxiliar para convertir un componente RGB a hexadecimal en mayúsculas
    function componentToHex(c) {
        const hex = c.toString(16).toUpperCase();
        return hex.length == 1 ? '0' + hex : hex;
    }

    // Asignamos el evento de cambio a cada control deslizante y entrada de texto
    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);

    redInput.addEventListener('input', updateColorFromInputs);
    greenInput.addEventListener('input', updateColorFromInputs);
    blueInput.addEventListener('input', updateColorFromInputs);

    // Llamamos a la función inicial para mostrar el color inicial
    updateColor();
});
