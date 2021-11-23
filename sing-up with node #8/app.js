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

// connection.connect(function(err){
//     if(err){
//         console.error('error connectiong: ' + err.stack); return;
//     }

//     console.log('connected as id ' + connection.threadId);
// })


connection.connect(function(err){
    if(err){
        console.error('Error with BD: ' + err.stack); 
        return;
    }
})

connection.query("INSERT INTO users(nome, email) VALUES ('kelly', 'kelly@celke.com.br')", function(err, result){
    if(!err){
        console.log('user sing-up')
    }else{
        console.log("err sing-up the user !")
    }
})

app.listen(8080)