function check(test) {
    var count = 0; // đếm số ước của a
    for (let i = 2; i <= Math.sqrt(test); i++) {
        (test % i == 0) && count++;
    }
    return (count == 0 && test > 1) ? true : false;
}
var count = 1;
var k = 1;
while (count < 6) {
    if (check(Math.pow(2, k) - 1)) {
        console.log(Math.pow(2, k - 1) * (Math.pow(2, k) - 1));
        count++;
    }
    k++;
}