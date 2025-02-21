function piyushAsync(){
  let  p = new Promise(function(resolve){
    setTimeout(resolve, 2000)
    console.log("inside promise")
  })
  return p;
}

const value = piyushAsync();
value.then(function() {
  console.log("hello")
})