//Ngô Đức Thắng - 20183831
var string = "4h3k3hfjj45k3k304k4j3h3h3k3l";
var temp = string.split("");
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
for (let i = 0; i < temp.length; i++) {
    if (isNumber(temp[i])) {
        temp[i] = "$";
    }
}
console.log(temp.join(""));