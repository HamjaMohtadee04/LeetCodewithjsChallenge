/**
 * @param {string} val
 * @return {Object}
 */
function expect(val) {
    function toBe(x){
        //logic
        if(val === x){
            return true;
        }
        else{
            throw new Error("Not Equal");
        }
    }
    function notToBe(y){
        //logic
        if(val !==y){
            return true;
        }
        else{
            throw new Error("Equal");
        }
    }
    return {toBe, notToBe} //returning object with two functions
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */