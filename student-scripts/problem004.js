function getTotalNumberOfNewYaersEveSundays(a, b) 
{
  var niedz = 0;
  for (a; a <= b; a++) 
  {
    var wiek = a % 100 === 0 ? a / 100 - 1 : Math.floor(a / 100);
    niedz += (1 + 1 + a + wiek) % 7 === 1 ? 1 : 0;
  }
  return niedz;
}