// 27. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.

var decimal = 20;
console.log("The decimal number is " + decimal);
var binary = decimal.toString(2);
console.log("The binary number is " + binary);
var hexadecimal = decimal.toString(16);
console.log("The hexadecimal number is " + hexadecimal);
var octal = decimal.toString(8);
console.log("The octal number is " + octal);
