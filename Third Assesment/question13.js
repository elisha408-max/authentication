// 13. Write a program to print the circumference and area of a circle of radius entered by the user.
let radius = Number(prompt("Enter the radius for the circle:"));
const pi = 3.14;
let circumference = 2 * pi * radius;
console.log(`The circumference of the circle : ${circumference}`);
let area = pi * radius ** 2;
console.log(`The area of the circle : ${area}`);