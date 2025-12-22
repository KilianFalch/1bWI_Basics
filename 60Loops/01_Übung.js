//addiere alle Zahlen von 1 bis 100 die durch 4 teilbar sind
let x = 0

for (let i = 1; i <= 100; i++) {

    if (i % 4 === 0) {
        x += i
    }
console.log(x);
}


