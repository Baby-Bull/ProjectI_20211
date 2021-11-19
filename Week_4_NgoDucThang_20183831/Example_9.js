//Ngô Đức Thắng 20183831
var string = "day la chuoi can doi vi tri";
var i = 4;
var j = 8;
var temp = string.split("");
var temp1 = temp[i];
temp[i] = temp[j];
temp[j] = temp1;
console.log(temp.join(""));