// 28.Write a program that finds a  random number from a given array.

var items = [12, 1, 9, 7];
var item = items[Math.floor(Math.random() * items.length)];
console.log(item)