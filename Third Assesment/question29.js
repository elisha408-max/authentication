
/* 29. Write a JavaScript program that creates HTML elements around the words/string and adds class to element
*/
var span = document.createElement("span");
span.classList.add("text-primary");
span.innerText="Hello World";
console.log(span);