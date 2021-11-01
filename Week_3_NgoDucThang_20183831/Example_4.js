//Ngô Đức Thắng - 2018381
function max(arr, n) {
    var max = arr[0];
    for (let i = 1; i < n; i++)
        if (max < arr[i])
            max = arr[i];
    return max;
}
var array = [22, 5, 223, 45, 6, 15, 34, 66, 34, 565];
console.log(max(array, array.length));
for (let i = 0; i < array.length; i++) {
    (array[i] == max(array, array.length)) && console.log(i);
}