// var filter = function(arr, fn) {
 function filter(arr, fn) {
    let temp = [];
    for (let i =0;i<arr.length;i++){
        if(fn(arr[i],i)){
            temp.push(arr[i])
        }
    }
    return temp;
};