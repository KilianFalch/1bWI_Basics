let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let bananaweight = 0.22;
let appleweight = 0.34;

let appleweightof1 = 1 / appleweight
let bananaweightof1 = 1 / bananaweight

let applePrice = appleweightof1 / applePricePerKilo  
let bananaPrice = bananaweightof1 / bananaPricePerKilo

console.log("8 Äpfel kosten" + " " + 8 * applePrice + " " + "€")

console.log("17 Bananen kosten" + " " + 12 * bananaPrice + " " + "€");

console.log("Eine Tonne Äpfel kosten" + " " + 1000 * applePrice + " " + "€");

console.log("Eine Tonne Bananen kosten" + " " + 1000 * bananaPrice + " " + "€");







