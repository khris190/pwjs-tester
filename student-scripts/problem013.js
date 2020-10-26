function parametricSort(a, b) {
    if (Array.isArray(a)) {
        if (b === 'asc') {
            return a.sort((a1, a2) => (a1 - a2));
        }
        else if (b === 'desc') {
            return a.sort((a1, a2) => (a2 - a1));
        }
    }
    return false;
}