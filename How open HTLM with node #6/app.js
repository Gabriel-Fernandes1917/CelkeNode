const express = require("express")

const app = express()

app.get("/home", function(req, res){

    res.sendFile(__dirname + "/src/index.html")

})

app.get("/login", function(req, res){
    res.send("Login page")
})

app.listen(8080)