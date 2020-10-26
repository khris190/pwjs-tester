function triangleArea(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
        return -1;
    }
    var p = (a+b+c)/2;
    var wynik = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    if (wynik <= 0) {
        return -1;
    }
    console.log(Math.round(wynik * 100) / 100);
    return Math.round(wynik * 100) / 100;
}