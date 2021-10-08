function check(test) {
    var count = 0; // đếm số ước của a
    for (let i = 2; i <= Math.sqrt(test); i++) {
        (test % i == 0) && count++;
    }
    return (count == 0 && test > 1) ? true : false;
}
var arr = [13, 2, 5, 27, 23, 56, 34, 997, 4564, 45, 7676];
for (let i = 0; i < arr.length; i++) {
    (check(arr[i])) && console.log(arr[i]);
}