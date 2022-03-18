//16.Write a program that displays all the odd numbers from the range entered by the user

let lowRange = Number(prompt("Enter the lower range: "));
let highRange = Number(prompt("Enter the higher range: "));
for(let i = lowRange ; i <= highRange; i++)
{
    if(i%2 != 0){
        console.log(i);
    }
}