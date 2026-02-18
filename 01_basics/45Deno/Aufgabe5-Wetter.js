let temperature = prompt("Gib die Temperatur ein");

let temperature1AsNumber = parseInt(temperature);


if (temperature < -10) {
    
    console.log("Drinnen bleiben");
}

else if (temperature < 10) {
    console.log("Warm anziehen");
    

}

else if (temperature < 25) {
    console.log("Raus gehen");
} 


else if (temperature < 35) {
    console.log("baden gehen");
    
}else {

    console.log("In die Kühlbox gehen");
    
}