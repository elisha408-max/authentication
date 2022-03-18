// 11. Write a program to test if a given string contains only numbers and returns true or false.

function isNum(val) {
    return !isNaN(val);
  }
  console.log(isNum("abc"));
  console.log(isNum("768778"));