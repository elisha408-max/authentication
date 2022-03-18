// 10. Write a program to return a string with the characters of the odd index position from a given string.
let string = "Javascript";
let len = string.length;
console.log("Expected Output:");

for (let i = 0; i < len; i++) {
  if (i % 2 != 0) {
    console.log(string[i]);
  }
}