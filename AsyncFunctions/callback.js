function Square(n){
  return n * n;
}

function Cube(n){
  return n * n * n;
}

function Sum(a, b, fn){
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}

let ans = Sum(2, 3, Square);
console.log(ans);