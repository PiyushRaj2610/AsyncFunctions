function findSum(n){
  let ans = 0;
  for(let i = 0; i<n; i++){
    ans+=i;
  }
  return ans;
}

function findSumTIll100(){
  console.log(findSum(100));
  
}

// else use => Anonymous function as in setTimeout(() => findSum(100), 1000)

setTimeout(findSumTIll100, 1000);
console.log("hello");