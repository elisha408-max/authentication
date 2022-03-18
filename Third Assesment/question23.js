/*23. What does the array.shift() and array.unshift method do? Write a program that uses both the methods.
The shift() method removes the first element from an array and returns that removed element. This method changes the original array.
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
*/
const array1 = [1, 2, 3, 4, 5];
const firstElement = array1.shift(1, 2);
console.log(firstElement);
console.log(array1);
const secondElement = array1.unshift(6, 7);
console.log(array1);
