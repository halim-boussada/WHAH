const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const db = require("./db/database.js");

var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/api/users/registration", (req, res) => {
    console.log("this is consol =>>>" , req.body )
    var registerArray = [
        req.body.name , 
        req.body.last , 
        req.body.country , 
        req.body.city , 
        req.body.address , 
        req.body.licence , 
        req.body.dateOfBirth , 
        req.body.placeOfBirth , 
        req.body.nationality , 
        req.body.education , 
        req.body.facebook , 
        req.body.skills , 
        req.body.languages , 
        req.body.hobbies , 
        req.body.image , 
        req.body.summary ,
        req.body.username
    ]
    db.registere(registerArray, (err, data) => {
        if (err) throw err;
        res.send(data);
      });
})
app.listen(port, () => console.log(`server is listening on port ${port}`));



