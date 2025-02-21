const fs = require("fs");
// filesystem module


// this waits until the for loop fn executes even after it resolves it doesnt matter
fs.readFile("AsyncFunctions/a.txt", "utf-8", function(err, data){
  console.log(data);
})



console.log("hi there");

let a = 0;
for(let  i =0; i<100000; i++){
  a+=i;
}

console.log("after forLoop")