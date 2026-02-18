let arr = [4,5,6,7,8,1,3];

let sum = 0


for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    
    sum = sum += arr[index];
}

let average = sum / arr.length

console.log("The average is" + " " + average);
