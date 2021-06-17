const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require('mysql');

//PORT
const port = 8000;

// Databse
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'PHARMIT'
});


//Middlewares
app.use(express.json());

app.use(cors());


app.get("/", (req, res) => {

});


app.get('/all/:name', cors(), (req, res) => {
    // console.log("name", req.params.name);
    const Name = req.params.name;
    connection.connect();
    const data = [];
    //${req.params.nameq}
    connection.query(`SELECT * FROM netmeds WHERE name = '${Name}'`, function(error, results, fields) {
        if (error) throw error;
        data.push(results[0]);
        connection.query(`SELECT * FROM pharmeasy WHERE name = '${Name}'`, function(error, results, fields) {
            if (error) throw error;
            data.push(results[0]);
            connection.query(`SELECT * FROM onemg WHERE name = '${Name}'`, function(error, results, fields) {
                if (error) throw error;
                data.push(results[0]);
                // console.log(results[0])

                connection.end();
                console.log(data)
                return res.json(data)

            });
        });
    });





});

app.listen(port, () => {
    console.log(`Server started ${port}`);
})