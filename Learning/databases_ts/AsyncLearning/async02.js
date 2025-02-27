function piyushAsync(){
  let p = new Promise(function(resolve){
    resolve("hello!!")
  })
  return p;
}

async function main(){
  const value  = await piyushAsync();
  console.log(value);
}

main();