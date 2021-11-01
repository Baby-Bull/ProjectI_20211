var number = 120;
var oldNumber = 120;
var i = 2;
while (i <= number) {
    if (number % i == 0) {
        console.log(i);
        number /= i;
    } else {
        i++;
    }
}