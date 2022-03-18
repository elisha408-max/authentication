// 4.For "helloIamString"
let givenString = "hello_i_am_string";
let Arrays = givenString.split("_");
for(let i = 1; i < Arrays.length; i++){
  Arrays[i] = Arrays[i][0].toUpperCase() + Arrays[i].slice(1);
}

console.log(Arrays.join(""));

// For "hello i am string"

let tempArr = givenString.split("_");
let output = tempArr.join(" ");
console.log(output);

//For "Hello i am string"

let Arrays1 = givenString.split("_");
let newString = Arrays1[0].charAt(0).toUpperCase() + Arrays1[0].slice(1);
Arrays1[0] = newString;
let res = Arrays1.join(" ");
console.log(res)

//For "Hello I Am String"
let Arrays5 = givenString.split("_");

for(let i = 0; i < Arrays5 .length;i++){
    let newString = Arrays5[i][0].toUpperCase() + Arrays5 [i].slice(1);
    Arrays5[i] = newString;
}

console.log(Arrays5 .join(" "));

// “HELLOIAMSTRING”
let Arrays6 = givenString.split("_");
let outputs = Arrays6.join("");
console.log(outputs.toUpperCase());

