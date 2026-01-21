let playing = true;
let again;
let rounds;
let player;
let robot;
let Spieler; 
let Computer;
while (playing){
let x = prompt("Drücke Enter zum Würfeln")

 Spieler = Math.floor(Math.random() * 6) + 1;

 Computer = Math.floor(Math.random() * 6) + 1;

rounds += 1;

if (Spieler > Computer) {
    console.log("Spieler hat gewonnen die zahl vom spieler war  " + Spieler + " die zahl vom computer war " + Computer);
    player += 1;
    console.log(` es waren ${rounds} runden, du hast ${player} gewonnen`)
}
else if (Computer > Spieler) {
    
console.log("Computer hat gewonnen die zahl vom computer " + Computer + " die zahl vom spieler war " + Computer)
    robot += 1;
    console.log(` es waren ${rounds} runden, du hast ${player} gewonnen`)
}else {
    
    console.log("Unentschieden");
    console.log(` es waren ${rounds} runden, du hast ${player} gewonnen`)
}
if (rounds % 5 === 0 ){
if(robot < player ){
    console.log(" player hat gewonnen")
}else if(robot > player){
    console.log("computer hat gewonnen")
}else {
    console.log("es war unetschieden")
}
console.log(x)
again = prompt("Wenn du nochmal spielen willsch drücke Y/N");
if (again == "Y"){
    let playing = true;
} else if (again =="N") {
    playing = false;
}
}
}