let spieler = prompt("Was willst du nehmen, 1 Schere, 2 Stein, 3 Papier?");
let selection = parseInt(spieler);
let x = Math.floor(Math.random() * 3) + 1;
let computer;

if (x === 0) {
  computer == 1;
} else if (x === 1) {
  computer == 2;
} else {
  computer == 3;
}

if (
  (spieler === 1 && computer === 2) ||
  (spieler === 1 && computer === 3) ||
  (spieler === 2 && computer === 3) ||
  (spieler === 2 && computer === 1) ||
  (spieler === 3 && computer === 2) ||
  (spieler === 3 && computer === 1)
) {
  console.log("Spieler hat gewonnen");
} else console.log("Computer hat gewonnen");
