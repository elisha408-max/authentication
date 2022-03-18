// 3. Write a program that takes a string input and find distinct characters in the string.
let input2 = prompt("Enter the string:");
console.log("The distinct characters in given string are:");

for (let i = 0; i < input2.length; i++) {
  let count = 0;
  for (let j = 0; j < input2.length; j++) {
    if (input2.charAt(i) == input2.charAt(j) && i != j) {
      count = 1;
      break;
    }
  }
  console.log(input2.charAt(i));
}
