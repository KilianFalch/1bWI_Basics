let x = parseInt(prompt("How many numbers do you want?"));

let sum = 0;

for (let i = 1; i <= x ; i++) {

    let number = parseInt(prompt("Enter Number " + i + ":"));

    sum += number;
}
let average = sum / x;
console.log("The average is: " + average);

