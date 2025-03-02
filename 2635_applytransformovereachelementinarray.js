var map = function(arr, fn) {
    let tempArray = [];
    for (var i=0; i<arr.length;i++){
        tempArray[i] = fn(arr[i],i)
    }
    return tempArray;
};