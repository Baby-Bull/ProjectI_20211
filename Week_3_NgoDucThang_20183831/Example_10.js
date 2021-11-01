//Ngô Đức Thắng - 20183831
var arr = [5, 6, 3, 7, 234, 56, 23, 4, 43, 64, 455, 23, 46, 34];
var dem;
var i;
for (i = 0; i < arr.length; i++) {
    dem = 0;
    while (arr[i] < arr[i + 1]) {
        if (arr[i] < arr[i + 1]) dem++;
        else console.log(arr[i + 1]);
        dem++;
        i++;
    }
}
for (let i = 7; i < 7 + 4; i++) {
    console.log(arr[i] + ",");
}
