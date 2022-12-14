/* eslint-disable no-console */

const kelvin = 293;
const celsius = kelvin - 273;
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${fahrenheit} degreees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees of heat (Newton scale).`);
