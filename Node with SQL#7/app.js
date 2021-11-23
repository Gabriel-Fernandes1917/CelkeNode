const express = require("express")

const app = express()

// Connection with BD MySQL

const mysql = require("mysql")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'celkeone',
    password: '123456', //password the user and not the sql
    database: 'celke'
})

connection.connect(function(err){
    if(err){
        console.error('error connectiong: ' + err.stack)
        return;
    }

    console.log('connected as id ' + connection.threadId);
})
// consult
connection.query('SELECT * FROM users', function(err, rows, fields){
    if(!err){
        console.log("Resul : ", rows)


    }else{
        console.log("Erro ao realizar a consulta")
    }
})


app.get("/home", function(req, res){

    res.sendFile(__dirname + "/src/index.html")

})

app.get("/login", function(req, res){
    res.send("Login page")
})

app.listen(8080)