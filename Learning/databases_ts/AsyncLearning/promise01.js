const fs = require("fs");

function piyushReadFile(){
  return new Promise(function(resolve){
      fs.readFile("AsyncFunctions/a.txt", "utf-8", function(err, data){
        resolve(data);
      })
    })
}

function onDone(data){
  console.log(data);
}

piyushReadFile().then(onDone)