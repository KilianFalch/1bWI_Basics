let arr = [1,4,6,8,3,2,9];
let sum = 0;

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
  
    sum = sum += arr[index];
}

console.log(sum);



