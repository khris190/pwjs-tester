var Vectors =
{
    sum: (a, b) => 
    {
        
      if (a.length !== b.length) {
        return false;
      }
      else {
        return a.map((v, key) => v + b[key]);
      }
    },
    mulByScalar: (a, b) => 
    {
      if (isNaN(b) || b === "" || Array.isArray(b)) {
        return false;
      }
      else {
        return a.map(value => value * b);
      }
    }
  };