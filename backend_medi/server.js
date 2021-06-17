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
    console.log("name", req.params.name);
    const Name = req.params.name;
    connection.connect();
    //${req.params.nameq}
    connection.query(`SELECT * FROM netmeds WHERE name = '${Name}'`, function(error, results, fields) {
        const data = [];
        if (error) throw error;
        console.log('The solution is: ', results);
        data.push(results);
        return res.json(data);
    });

    connection.end();

});

app.listen(port, () => {
    console.log(`Server started ${port}`);
})