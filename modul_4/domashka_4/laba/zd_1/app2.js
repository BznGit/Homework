let sum = 0;
let arr = process.argv;
for (let i=2; i<arr.length; i++){
    sum +=Number(arr[i]);
}
console.log(sum);