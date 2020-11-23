function maybe(a, b, c) {
    if (a(c)) {
       return b(c);
    }
    return c;
}