let inputRed = document.querySelectorAll('input')[0]
let inputGreen = document.querySelectorAll('input')[1]
let inputBlue = document.querySelectorAll('input')[2]
let hex  = document.querySelector('p')
let button = document.querySelector('button')


// function RGBToHex(r,g,b) {

    
//     r = r.toString(16);
//     g = g.toString(16);
//     b = b.toString(16);
  
//     if (r.length == 1)
//       r = "0" + r;
//     if (g.length == 1)
//       g = "0" + g;
//     if (b.length == 1)
//       b = "0" + b;
  
//     return "#" + r + g + b;
//   }


// function RGBToHex() {
//     let arr = [input.value].join().split(' ')
//     console.log(arr)
  
//   }

// console.log(RGBToHex())



function rgbToHex(red, green, blue) {
    
    red = parseInt(red).toString(16)
    green = parseInt(green).toString(16)
    blue = parseInt(blue).toString(16)

    if (red.length == 1) 
        red = "0" + red;
    if (green.length == 1) 
        green = "0" + green;
    if (blue.length == 1) 
        blue = "0" + blue;
    
     return  red + green + blue


}

function convertToHex() {
    let r = inputRed.value
    let g = inputGreen.value
    let b = inputBlue.value

    hex.innerText = '#' + rgbToHex(r,g,b)
}

button.addEventListener('click', convertToHex)