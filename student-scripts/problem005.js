function strangeSum(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a === b) {
            return a*6;
        }
        return a+b;
    }
    return null;
}