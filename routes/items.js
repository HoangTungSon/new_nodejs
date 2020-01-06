const express = require('express');
var cors = require('cors');
const router = express.Router();

// const data = [
//     {id: 1, title: 'Finalize project', order: 1, completed: false},
//     {id: 2, title: 'Book ticket to London', order: 2, completed: false},
//     {id: 3, title: 'Finish last article', order: 3, completed: false},
//     {id: 4, title: 'Get a new t-shirt', order: 4, completed: false},
//     {id: 5, title: 'Create dinner reservation', order: 5, completed: false},
// ];

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mydb",
    port: 3307,
});

router.use(cors());

router.get('/', function (req, res) {
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM customers", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.status(200).json({ result });
        });
      });
});

router.get('/:id', function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;