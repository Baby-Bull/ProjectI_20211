var arr = [1, 2, 3, 4, 5];
var i = Math.floor(Math.random() * arr.length)
var j = Math.floor(Math.random() * arr.length)
let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
