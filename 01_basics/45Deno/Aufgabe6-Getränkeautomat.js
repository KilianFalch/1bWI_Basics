let Drink = prompt("Was ein Getränk willst du");

let Drink1AsNumber = parseInt(Drink);

let selection = prompt("1 Cola, 2 Wasser, 3 Bier, 4 Tee");

let selectionAsDrink = parseInt(selection);

if (selectionAsDrink == 1) {

    console.log("Danke für deine Bestellung von Cola");
}

if (selectionAsDrink == 2) {

    console.log("Danke für deine Bestellung von Wasser");
}

if (selectionAsDrink == 3) {

    console.log("Danke für deine Bestellung von Bier");
}

if (selectionAsDrink == 4) {

    console.log("Danke für deine Bestellung von Tee");
}