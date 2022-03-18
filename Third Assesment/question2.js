// 2. Write a program to count occurrences of a certain character in a given string.
function count(s, c) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
      // checking character in string
      if (s.toLowerCase().charAt(i) == c) res++;
    }
    console.log(res);
    return res;
  }
  count("developers", "e");