/*14. A person is eligible to vote if his/her age is greater than or equal to 18. Write a program  to find out if 
he/she is eligible to vote.*/
const age1 = Number(prompt("Enter your age:"));
if (age1 >= 18) {
  console.log("you are eligible to vote");
} else {
  console.log("you are not eligible to vote");
}