//1.  Write a program to take a string input and display its length and last character.

let inputs = prompt("enter a string:");
console.log(`The length of the given string is ${inputs.length}`);
console.log(`The last character of the given string is ${inputs.charAt(inputs.length-1)}`);