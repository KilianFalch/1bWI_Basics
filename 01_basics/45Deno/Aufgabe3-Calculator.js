let number1 = prompt("Gib die erste Zahl ein");
let number2 = prompt("Gib die zweite Zahl ein");

let number1AsNumber = parseInt(number1);
let number2AsNumber = parseInt(number2);

let selection = prompt("1 Add, 2 Subtract, 3 Multiplicate, 4 Divide");
let selectionAsNumber = parseInt(selection);
let result = 0;

if (selectionAsNumber == 1) {

    result = number1AsNumber + number2AsNumber;
    console.log(result);
    
} else if (selectionAsNumber == 2) {
    
    result = number1AsNumber - number2AsNumber;
    console.log(result);
    
} else if (selectionAsNumber == 3) {

    result = number1AsNumber * number2AsNumber;
    console.log(result);
    
}  else if (selectionAsNumber == 4) {

    result = number1AsNumber / number2AsNumber;
    console.log(result);
    
} else {
    console.log("Not valid selection");
    
}