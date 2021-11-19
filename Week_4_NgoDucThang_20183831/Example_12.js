//Ngô Đức Thắng 20183831 
var arr =["Nguyen Thi An","Ngo Thu An", "Hoang Van Minh","Nguyen Ngan An","Ngo Duc Thang","Hoang Thi Thu", "Quach Thi Lan"];
var count = 0;
for(let i = 0; i< arr.length; i++){
    if(arr[i].includes("Thi")){
        count ++;
    }
}
console.log(count);