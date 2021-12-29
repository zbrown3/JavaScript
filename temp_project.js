// created a constant variable to store kelvin temp
const kelvin = 0;
// created a celsius variable to convert temp from kelvin to celsius
const celsius = kelvin - 273;
// created a fahrenheit variable and converted celsius to fahrenheit 
let fahrenheit = celsius * (9 / 5) + 32;
// Rounded down the stored fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
let newton = celsius * (33 / 100);
console.log(`The temperature is ${newton} degrees Newton.`)