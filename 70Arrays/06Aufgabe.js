let arr = [4,5,8,8,6,0];

let x = 0

for (let index = 0; index < arr.length; index++) {
   if (arr[index] > x ) {
    x = arr[index];
   }
}
console.log(x);

