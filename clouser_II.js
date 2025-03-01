var createCounter = function(init) {
    let x =init;
    function increment(){
        x++;
        return x;
    }
    function decrement(){
        x--;
        return x;
    }
    function reset(){
        return (x = init);
    }
    return {increment, decrement, reset};
};