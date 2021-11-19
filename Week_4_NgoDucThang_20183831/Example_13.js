//Ngô Đức Thắng 20183831 
var arr = ["Ngo Thu An", "Hoang Van Minh","Nguyen Ngan An","Ngo Duc Thang","Le Thu Hoai","Hoang Van Ha"]
const checkname = (string) => {
    let temp = string.split(" ")[string.split(" ").length - 1];
    if(temp.split("")[0] === "H") return true;
    return false;
}
var count = 0;
for (let i = 0; i < arr.length; i++) {
    checkname(arr[i]) && count++;
}
console.log(count);