function deepCopy(a)
{
  var arr = a.map( val => {
        if (Array.isArray(val)) {
            return deepCopy(val)
        } 
        else {
            return val
        }
    })
    return arr;
}