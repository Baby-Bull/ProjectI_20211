var a = b = c = d = 0;
for (let i = 0; i <= 100; i++) {
    (i % 5 == 0) && a++;
    (i % 5 == 1) && b++;
    (i % 5 == 2) && c++;
    (i % 5 == 3) && d++;
}
console.log(a, b, c, d);