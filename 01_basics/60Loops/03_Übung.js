//alle Zahlen von -100 bis 0 miteinander multiplizieren und das Endergebnis mit allen Zahlen von -50 bis 0 wo nicht durch -3 teilbar sind dividieren
let x = 1;
let answer = x;

for (let i = -100; i < 0; i++){

   x = x * i;

} 

for (let y = -50; y < 0; y++){

    if (y % -3 != 0){

     answer = answer / y
        
    }        
    
}
console.log(answer);

   


