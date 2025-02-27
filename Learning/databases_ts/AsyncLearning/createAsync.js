const fs = require("fs");

function piyush(callback){
  fs.readFile("AsyncFunctions/a.txt", "utf-8", function(err, data){
    callback(data);
  });
}

function onDone(data){
  console.log(data);
}

piyush(onDone);