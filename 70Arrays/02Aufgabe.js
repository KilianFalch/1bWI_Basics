let sum = 0
let arr = [4,1,2,3];

arr.push(17);
arr.push(199);

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);

    sum += arr[index]
}
console.log("die summe ist" + " " + sum);

let average = sum / arr.length

console.log("der mittelwert ist" + " " + average);

    
