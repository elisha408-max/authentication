// 9. Write a program to find the number of vowels, consonants, digits and white space characters in a string.

function Count(str) {
    console.log(str);
    var vowels = (consonant = digit = space = 0);
    var small = str.toLowerCase();
    console.log(small);
    for (var i = 0; i < small.length; i++) {
      if (
        small[i] == "a" ||
        small[i] == "e" ||
        small[i] == "i" ||
        small[i] == "o" ||
        small[i] == "u"
      ) {
        ++vowels;
      } else if (small[i] >= "a" && small[i] <= "z") {
        ++consonant;
      } else if (small[i] >= "0" && small[i] <= "9") {
        ++digit;
      } else if (small[i] == " ") {
        ++space;
      }
    }
    console.log(vowels);
    console.log(consonant);
    console.log(digit);
    console.log(space);
  }
  Count("This is our home1");