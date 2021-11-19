//Ngô Đức Thắng 20183831
var initial = "1111100000";
var n = 2;
var string = initial.split("")
for (let i = 1; i <= n; i++) {
    var temp = string[0];
    for (let j = 0; j < string.length; j++) {
        string[j] = string[j + 1];
    }
    string[9] = temp;
}
console.log(string.join(""));