function stringRotate(a, b){
    if (b < 0 || isNaN(b)) {
        return '';
    }
    return a.substring(b) + a.slice(0,b);
}