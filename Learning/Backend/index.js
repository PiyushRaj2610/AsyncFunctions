const express = require("express");

const app =express();

app.get("/health-checkup", function(req, res){
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if(username === "piyush" && password === "pass"){
    if(kidneyId == 1 || kidneyId == 2){
      res.json({
        msg: "Your kidney is fine!"
      })
    } else{
      res.json({
        msg : "How the fuck are you alive"
      })
    } 
  }
  else {
    res.status(400).json({
      "msg" : "Somethings up with your inputs"
    })
  }
})

app.listen(3000, () => {
  console.log("server running on port 3000")
})