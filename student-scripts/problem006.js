function divisible(a) {
    for (let index = 1; index < arguments.length; index++) {
        if (a%arguments[index] !== 0) {
            return false;
        }        
    }
    return true;
}