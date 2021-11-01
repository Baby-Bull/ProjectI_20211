//Ngô Đức Thắng - 20183831
var arr = [32, 45, 4, 6, 2, 4, 4, 4, 23, 564, 43];
var cnt = 1;
var start = arr[0];
var end = arr[arr.length - 1];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
        cnt++;
        start = arr[i];
    }
}
console.log("day con bang nhau dai nhat co: " + cnt + " phan tu");
console.log("bat dau la:" + start);
