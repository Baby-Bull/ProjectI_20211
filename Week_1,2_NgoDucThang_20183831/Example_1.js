for (let num = 1; num < 100; num++) {
    var count = 0; // đếm số ước của a
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count != 0 && num > 1)
        console.log(num+",");
}