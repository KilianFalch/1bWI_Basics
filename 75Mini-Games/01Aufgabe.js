let playing = true;
while (playing == true){
let x = prompt("Drücke Enter zum Würfeln")

let Spieler = Math.floor(Math.random() * 6) + 1;

let Computer = Math.floor(Math.random() * 6) + 1;


if (Spieler > Computer) {
    console.log("Spieler hat gewonnen");
        
}
else if (Computer > Spieler) {
    
console.log("Computer hat gewonnen")
}else {
    
    console.log("Unentschieden");
}

console.log(x)
let again = prompt("if you want to do it again press Y/N");
if (again == "Y"){
    let playing = true;
} else if (again =="N") {
    playing = false;
}

}
























