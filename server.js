const express = require('express')
// const bodyparser = require('body-parser')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const server = express()
server.use(bodyParser.json());
const port = process.env.PORT || 8080 || 19847;


//*****************POSTGRES DB CONNECTION***************************/
// const { Client } = require('pg');
// const client = new Client('postgres://aaplmarket_d6ik_user:SdrErISXUtYL4wK6pKIYjLhrxVAm0lq8@dpg-ch4c1764dad97s1v7tng-a/aaplmarket_d6ik')

// client.connect(function(err) {  
//     if (err){
//         console.log('Error connecting DB ')
//     }else{
//         console.log("Successfully connected DB");
//     }
//   });

//*****************MYSQL DB CONNECTION***************************/
const db = mysql.createConnection({
    host: 'mysql-123408-0.cloudclusters.net',
    user: 'Nilesh',
    password:'Nilesh@321',
    database:'aaplmarket'
})

db.connect(function (error) {
    console.log("db host ", process.env.DB_HOST)
    if (error) {
        console.log('Error connecting DB ');
    } else {
        console.log('Successfully connected DB');
    }
})

server.get("/", (req, res) => {
    res.send("I m live")
})

server.get("/service", (req, res) => {
    res.send("I m service")
})


server.listen(port, function check(error) {
    if (error) {
        console.log("Error... !!!")
    } else {
        console.log("Started... !!! port")
    }
});


// //Insert
// server.post("/api/demo/add", (req, res) => {
//     let details = {
//         name: req.body.name,
//         course: req.body.course,
//         fee: req.body.fee
//     };
//     let sql = "INSERT INTO demo SET ?";
//     db.query(sql, details, (error) => {
//         if (error) {
//             res.send({ status: false, message: 'demo created failed' });
//         } else {
//             res.send({ status: true, message: 'demo created successfully' });
//         }
//     });
// });

//View
server.get("/api/view", (req, res) => {
    var sql = "SELECT * FROM demo";
    db.query(sql, function (error, result) {
        if (error) {
            console.log("Error Connectig to DB")
        } else {
            res.send({ status: true, data: result })
        }
    });
});


// //View by Id
// server.get("/api/demo/:id", (req, res) => {
//     var sql = "SELECT * FROM demo WHERE id=" + req.params.id;
//     db.query(sql, function (error, result) {
//         if (error) {
//             console.log("Error Connectig to DB")
//         } else {
//             res.send({ status: true, data: result })
//         }
//     });
// });

