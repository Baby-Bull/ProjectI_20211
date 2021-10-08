var number = 107;
for (let i = 2; i <= number; i++) {
    if (number % i == 0) {
        console.log(i);
        break;
    }
}