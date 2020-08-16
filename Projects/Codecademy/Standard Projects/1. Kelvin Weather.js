//const variable that stores the value of Kelvin
const kelvin = 293;

//const variable that stores the value of celsius by subtracting 273 from original value of kelvin variable
const celsius = kelvin - 273;

//const variable that uses an equation and calculates the correct value of fahrenheit
const fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//const variable that uses an equation and calculates the correct value of newton
const newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees Newton.`);