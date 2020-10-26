function findMax() {
    if (arguments.length === 0) {
        return null;
    }
    var res = arguments[0];
    for (let index = 1; index < arguments.length; index++) {
        if (arguments[index] > res) {
            res = arguments[index];
        }        
    }
    return res;
}