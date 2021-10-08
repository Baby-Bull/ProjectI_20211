function min( arr, n){
    var min = arr[0];
    for (let i = 1; i < n; i++)
        if (min > arr[i])
            min = arr[i];
    return min;
}
var array = [22,5,223,45,6,15,34,66,34,565];
