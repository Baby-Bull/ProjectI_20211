var temp1 = 1;
var cnt = 1;
while (cnt < 21) {
    var count = 0; // đếm số ước của a
    for (let i = 2; i <= Math.sqrt(temp1); i++) {
        (temp1 % i == 0) && count++;
    }
    if (count == 0 && temp1 > 1) {
        console.log(temp1 + ",");
        cnt++;
    }
    temp1++;
}