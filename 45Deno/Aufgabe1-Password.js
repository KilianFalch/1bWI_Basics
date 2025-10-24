let input = Math.floor(Math.random() * 20);
let password = Math.floor(Math.random() * 10);

if (input == password) {
    console.log("Access granted");
    
}

if (input < password) {
    console.log("Access denied");
    
}
if (input > password) {
    console.log("Access denied");
       
}