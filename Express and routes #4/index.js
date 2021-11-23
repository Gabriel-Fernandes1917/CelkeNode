const express = require("express")

const app = express()

app.get("/home", function(req, res){

    res.send("Hello ! \n Welcome to my page")

})

app.get("/login", function(req, res){
    res.send("Login page")
})

app.listen(8080)