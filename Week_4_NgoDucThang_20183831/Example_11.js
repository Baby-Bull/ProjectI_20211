//Ngô Đức Thắng 20183831 
var arr = ["Ngo Thu An", "Hoang Van Minh","Nguyen Ngan An","Ngo Duc Thang"]
const checkname = (string) => {
    if (string.split(" ")[string.split(" ").length - 1] === "An") {
        return true;
    }
    return false;
}
var count = 0;
for (let i = 0; i < arr.length; i++) {
    checkname(arr[i]) && count++;
}
console.log(count);