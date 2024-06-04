
let inputRed = document.querySelectorAll('input')[0];
let inputGreen = document.querySelectorAll('input')[1];
let inputBlue = document.querySelectorAll('input')[2];
let hexDisplay = document.querySelectorAll('p')[1];
let button = document.querySelector('button');
let color = document.querySelector('div')

function rgbToHex(r, g, b) {
    // Function to convert a single number to a two-digit hex string
    function componentToHex(component) {
        const hexChars = "0123456789ABCDEF";
        let high = Math.floor(component / 16); //method rounds a number DOWN to the nearest integer
        let low = component % 16;
        return hexChars[high] + hexChars[low];
    }
    
    // Convert each component to hex and concatenate
    let redHex = componentToHex(r);
    let greenHex = componentToHex(g);
    let blueHex = componentToHex(b);
    
    return `#${redHex}${greenHex}${blueHex}`;
}

function convertRGBtoHex() {
    // Get the RGB values from the input fields
    let red = parseInt(inputRed.value);
    let green = parseInt(inputGreen.value);
    let blue = parseInt(inputBlue.value);
    
    // Ensure the values are within the valid range (0-255)
    if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
        hexDisplay.innerText = "Invalid RGB values!";
        return;
    }

    // Convert the RGB values to hex and display the result
    let hexColor = rgbToHex(red, green, blue);
    hexDisplay.innerText = hexColor;
    
    color.style.borderColor = hexColor
}

button.addEventListener('click', convertRGBtoHex);
