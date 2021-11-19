//Ngô Đức Thắng 20183831 
var array = ["mang1", "mangso2", "mangso3","daylamangdainhat","mangcuoicung"];
var temp;
count = 1;
for(let i = 0; i< array.length; i++){
    if(array[i].length > count){
        temp = array[i];
        count = array[i].length;
    }
}

console.log(temp);