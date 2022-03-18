//  6.Write a program to find the number of uppercase and lower case characters in a string.

function Count(str) {
    var upper = 0;
    var lower = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] >= "A" && str[i] <= "Z") upper++;
      else lower++;
    }
    console.log("Upper case letters: " + upper);
    console.log("Lower case letters: " + lower);
  }
  
  Count("Apple");