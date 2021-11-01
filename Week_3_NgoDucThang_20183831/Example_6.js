//Ngô Đức Thắng - 2018381
var array = [3, 5, 22, 56, 344, 54, 7, 43, 2, 34, 6, 745];
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] % array[j] == 0) {
            console.log(array[j] + " la uoc cua :" + array[i]);
        } else if (array[j] % array[i] == 0) {
            console.log(array[i] + " la uoc cua :" + array[j]);
        }
    }
}