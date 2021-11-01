//Ngô Đức Thắng - 2018381
function check(test) {
    var count = 0; // đếm số ước của a
    for (let i = 2; i <= Math.sqrt(test); i++) {
        (test % i == 0) && count++;
    }
    return (count == 0 && test > 1) ? true : false;
}
var array = [22, 5, 223, 45, 6, 15, 34, 66, 34, 565];
var hs = [];
var nt = [];
for(let i = 0; i< array.length; i++){
    check(array[i]) ? nt.push(array[i]) : hs.push(array[i]);
}
console.log("so nguyen to la: "+ nt);
console.log("hop so la: "+ hs);