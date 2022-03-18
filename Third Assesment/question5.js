// 5. Write a program that takes the string input and reverse the string and print it.
function reverseStr(str) {
    //   Use the split method to return the new array.
    var splitArray = str.split("");
    var reverseArray = splitArray.reverse();
    var joinArray = reverseArray.join();
    console.log(joinArray);
    return joinArray;
  }
  reverseStr("Hello");