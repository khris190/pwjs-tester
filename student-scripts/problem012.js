function objectsDiff(a, b){
  var keyA = Object.keys(a);
  var keyB = Object.keys(b);
  var wynik = [];

  for (let key of keyA) { 
    if (keyB.includes(key) === false) wynik.push(key);
  }

  for (let key of keyB) {
    if (keyA.includes(key) === false) wynik.push(key);
  }
  
  return wynik;
}