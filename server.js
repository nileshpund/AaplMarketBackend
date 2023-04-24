const express = require('express')
const bodyparser = require('body-parser')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const server = express()
server.use(bodyParser.json());

//ESTABLISH DB CONNECTION
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"AaplMarket"
})

db.connect(function(error){
    if(error){
        console.log('Error connecting DB ');
    }else{
        console.log('Successfully connected DB');
    }
})

// server.listen(8080, function(error){
//     if(error) console.log("Error... !!!");
//     else console.log("Started... !!!")
// })

server.listen(8080, function check(error){
    if(error){
        console.log("Error... !!!")
    }else{
        console.log("Started... !!! 8080")
    }
});


//Insert
server.post("/api/demo/add", (req, res)=>{
    let details = {
        name: req.body.name,
        course: req.body.course,
        fee: req.body.fee
    };
    let sql = "INSERT INTO demo SET ?";
    db.query(sql, details, (error)=>{
        if(error){
            res.send({status:false, message:'demo created failed'});
        }else{
            res.send({status:true, message:'demo created successfully'});
        }
    });
});

//View
server.get("/api/demo", (req, res)=>{
    var sql="SELECT * FROM demo";
    db.query(sql, function(error, result){
        if(error){
            console.log("Error Connectig to DB")
        }else{
            res.send({status: true, data: result})
        }
    });
});


//View by Id
server.get("/api/demo/:id", (req, res)=>{
    var sql="SELECT * FROM demo WHERE id=" + req.params.id;
    db.query(sql, function(error, result){
        if(error){
            console.log("Error Connectig to DB")
        }else{
            res.send({status: true, data: result})
        }
    });
});

