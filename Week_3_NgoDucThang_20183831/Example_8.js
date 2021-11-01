//Ngô Đức Thắng - 2018381
var array = [5, 343, 32, 234, 5, 46, 40, 34, 456, 34, 23];
var c = 40;
var x = 0, y = 0, z = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] == c) x++;
    else if (array[i] > c) y++;
    else if (array[i] < c) z++;
}
console.log("so so = c la : "+ x);
console.log("so so < c la : "+ z);
console.log("so so > c la : "+ y);