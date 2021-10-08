var a = [];
var number = 120;
var oldNumber = 120;
var i = 2;
while (i <= number) {
    if (number % i == 0) {
        a.push(i);
        number /= i;
    } else {
        i++;
    }
}
var resString = oldNumber + " = "
for (let j = 0; j < a.length; j++) {
    resString += (a[j].toString() + "*");
}
console.log(resString);