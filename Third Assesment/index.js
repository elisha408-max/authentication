// //1.  Write a program to take a string input and display its length and last character.

// let inputs = prompt("enter a string:");
// console.log(`The length of the given string is ${inputs.length}`);
// console.log(`The last character of the given string is ${inputs.charAt(inputs.length-1)}`);

// // 2. Write a program to count occurrences of a certain character in a given string.
// function count(s, c) {
//   let res = 0;
//   for (let i = 0; i < s.length; i++) {
//     // checking character in string
//     if (s.toLowerCase().charAt(i) == c) res++;
//   }
//   console.log(res);
//   return res;
// }
// count("developers", "e");

// // 3. Write a program that takes a string input and find distinct characters in the string.
// let input2 = prompt("Enter the string:");
// console.log("The distinct characters in given string are:");

// for (let i = 0; i < input2.length; i++) {
//   let count = 0;
//   for (let j = 0; j < input2.length; j++) {
//     if (input2.charAt(i) == input2.charAt(j) && i != j) {
//       count = 1;
//       break;
//     }
//   }
//   console.log(input2.charAt(i));
// }

// // 4.For "helloIamString"
// let givenString = "hello_i_am_string";
// let Arrays = givenString.split("_");
// for(let i = 1; i < Arrays.length; i++){
//   Arrays[i] = Arrays[i][0].toUpperCase() + Arrays[i].slice(1);
// }

// console.log(Arrays.join(""));

// // For "hello i am string"

// let Arrays0 = givenString.split("_");
// let output = Arrays0.join(" ");
// console.log(output);

// //For "Hello i am string"

// let Arrays1 = givenString.split("_");
// let newString = Arrays1[0].charAt(0).toUpperCase() + Arrays1[0].slice(1);
// Arrays1[0] = newString;
// let res = Arrays1.join(" ");
// console.log(res)

// //For "Hello I Am String"
// let Arrays5 = givenString.split("_");

// for(let i = 0; i < Arrays5 .length;i++){
//     let newString = Arrays5[i][0].toUpperCase() + Arrays5 [i].slice(1);
//     Arrays5[i] = newString;
// }

// console.log(Arrays5 .join(" "));

// // “HELLOIAMSTRING”
// let Arrays6 = givenString.split("_");
// let outputs = Arrays6.join("");
// console.log(outputs.toUpperCase());


// // 5. Write a program that takes the string input and reverse the string and print it.
// function reverseStr(str) {
//   //   Use the split method to return the new array.
//   var splitArray = str.split("");
//   var reverseArray = splitArray.reverse();
//   var joinArray = reverseArray.join();
//   console.log(joinArray);
//   return joinArray;
// }
// reverseStr("Hello");

// //  6.Write a program to find the number of uppercase and lower case characters in a string.

// function Count(str) {
//   var upper = 0;
//   var lower = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z") upper++;
//     else lower++;
//   }
//   console.log("Upper case letters: " + upper);
//   console.log("Lower case letters: " + lower);
// }

// Count("Apple");

// // 7. Write a program to take a string input and sort it alphabetically.
// var myStr = "APPLE";
// var sortAlphabetically = myStr.split("").sort();
// console.log(sortAlphabetically);

// // 8. Write a program to check if the word 'orange' is present in the "This is orange juice".
// var strngs = "This is orange juice";
// var requiredOrange = strngs.includes("orange");
// console.log(requiredOrange);

// // 9. Write a program to find the number of vowels, consonants, digits and white space characters in a string.

// function Count(str) {
//   console.log(str);
//   var vowels = (consonant = digit = space = 0);
//   var small = str.toLowerCase();
//   console.log(small);
//   for (var i = 0; i < small.length; i++) {
//     if (
//       small[i] == "a" ||
//       small[i] == "e" ||
//       small[i] == "i" ||
//       small[i] == "o" ||
//       small[i] == "u"
//     ) {
//       ++vowels;
//     } else if (small[i] >= "a" && small[i] <= "z") {
//       ++consonant;
//     } else if (small[i] >= "0" && small[i] <= "9") {
//       ++digit;
//     } else if (small[i] == " ") {
//       ++space;
//     }
//   }
//   console.log(vowels);
//   console.log(consonant);
//   console.log(digit);
//   console.log(space);
// }
// Count("This is our home1");

// // 10. Write a program to return a string with the characters of the odd index position from a given string.
// let string = "Javascript";
// let len = string.length;
// console.log("Expected Output:");

// for (let i = 0; i < len; i++) {
//   if (i % 2 != 0) {
//     console.log(string[i]);
//   }
// }

// // 11. Write a program to test if a given string contains only numbers and returns true or false.

// function isNum(val) {
//   return !isNaN(val);
// }
// console.log(isNum("abc"));
// console.log(isNum("768778"));

// // 12. Write a program that accepts two integers as an argument and return its sum.

// function sum(x, y) {
//   sum = x + y;
//   console.log(sum);

//   return sum;
// }
// sum(3, 3);

// // 13. Write a program to print the circumference and area of a circle of radius entered by the user.
// let radius = Number(prompt("Enter the radius for the circle:"));
// const pi = 3.14;
// let circumference = 2 * pi * radius;
// console.log(`The circumference of the circle : ${circumference}`);
// let area = pi * radius ** 2;
// console.log(`The area of the circle : ${area}`);

// /*14. A person is eligible to vote if his/her age is greater than or equal to 18. Write a program  to find out if 
// he/she is eligible to vote.*/
// const age1 = Number(prompt("Enter your age:"));
// if (age1 >= 18) {
//   console.log("you are eligible to vote");
// } else {
//   console.log("you are not eligible to vote");
// }

// // 15. Write a program to check whether a given number is even or odd.
// var num = 12;
// if (num % 2 == 0) {
//   console.log(num + " is an Even number");
// } else {
//   console.log(num + " is an Odd number");
// }

// //16.Write a program that displays all the odd numbers from the range entered by the user

// let lowRange = Number(prompt("Enter the lower range: "));
// let highRange = Number(prompt("Enter the higher range: "));
// for(let i = lowRange ; i <= highRange; i++)
// {
//     if(i%2 != 0){
//         console.log(i);
//     }
// }

// // 17. Write a program that reverse a number.
// var number = 12345;
// var sortNumerically = number.toString().split("").reverse().join("");
// console.log(sortNumerically);

// // 18.
//  function detect_data_type(value)
// {
// var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
// if (typeof value === "object" || typeof value === "function") 
//     {
//      for (x = 0, len = dtypes.length; x < len; x++) 
//      {
//             if (value instanceof dtypes[x])
//             {
//                 return dtypes[x];
//             }
//       }
//     }
    
//     return typeof value;
// }
// console.log(detect_data_type(14));
// console.log(detect_data_type('infodeveloper'));
// console.log(detect_data_type(true));


// // 19. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.


// function Longest_Country_Name(country_name)
//   {
//   return country_name.reduce(function(lname, country) 
//   {
     
//     return lname.length > country.length ? lname : country;
//   }, 
// "");
// }
// console.log(Longest_Country_Name(["Nepal", "Bhutan", "United States of America"]));

// // 20. Write a JavaScript function to get the function name.(use this keyword)

// function abc(){
// 	//code here
// }
// console.log(abc.name);

// // 21. Write a program that takes input as an input and pushes all strings to an array.
// var input = "hello";
// var split = input.split("");
// console.log(split);

// // 22. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 

// const lastElement = (array , num) => {
//   if(array == null)
//   {
//       return 0;
//   }
//   if(num == null)
//   {
//       return array[array.length-1];
//   }
 
// };


// console.log(lastElement([6,2,8]))
// console.log(lastElement([4,4,14]))

// /*23. What does the array.shift() and array.unshift method do? Write a program that uses both the methods.
// The shift() method removes the first element from an array and returns that removed element. This method changes the original array.
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// */
// const array1 = [1, 2, 3, 4, 5];
// const firstElement = array1.shift(1, 2);
// console.log(firstElement);
// console.log(array1);
// const secondElement = array1.unshift(6, 7);
// console.log(array1);



// // 24. Write a JavaScript function to get the month name from a particular date.
// var month_name = function (dt) {
//   mlist = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   return mlist[dt.getMonth()];
// };
// console.log(month_name(new Date("01/02/2022")));
// console.log(month_name(new Date("02/04/2022")));


// // 25. Write a program that finds the day and date 3 months from today
// const date= new Date();

// console.log(`Today is ${date.toLocaleString('en-US')}`)
// let month=date.getMonth();


// function newDate(date,month){
//     let newMonth=month+3;
//     date.setMonth(newMonth);
//     return date;
// }
// newDate(date,month);
// let day=date.getDay();
// console.log(`Three months from today is ${date.toLocaleString('en-US')}}`);

// // 26. Write a JavaScript program to calculate age from date of birth.
// var dob = new Date("11/01/1999");
// //calculate month difference from current date in time
// var month_diff = Date.now() - dob.getTime();

// //convert the calculated difference in date format
// var age_dt = new Date(month_diff);

// //extract year from date
// var year = age_dt.getUTCFullYear();

// //now calculate the age of the user
// var age = Math.abs(year - 1970);

// //display the calculated age
// console.log(" My age is " + age + " years");


// // 27. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.

// var decimal = 20;
// console.log("The decimal number is " + decimal);
// var binary = decimal.toString(2);
// console.log("The binary number is " + binary);
// var hexadecimal = decimal.toString(16);
// console.log("The hexadecimal number is " + hexadecimal);
// var octal = decimal.toString(8);
// console.log("The octal number is " + octal);


// // 28.Write a program that finds a  random number from a given array.

// var items = [12, 1, 9, 7];
// var item = items[Math.floor(Math.random() * items.length)];
// console.log(item)


// /* 29. Write a JavaScript program that creates HTML elements around the words/string and adds class to element
// */
// var span = document.createElement("span");
// span.classList.add("text-primary");
// span.innerText="Hello World";
// console.log(span);

// // 30.
// function multiplyBy()
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
        
//         event.preventDefault()
// }
// function divideBy() 
// { 
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
// document.getElementById("result").innerHTML = num1 / num2;

// event.preventDefault()
// }

