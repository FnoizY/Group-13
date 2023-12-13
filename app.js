const express = require('express');

const mysql = require('mysql2');

const path = require('path');
 
 
const app = express();
 
 
var db = mysql.createConnection({

  host: "localhost",

  user: "root",

  password: "F@roose200",

  database: "art"

});
 
db.connect();
 
// app.get('/', (req, res) => {

//   res.sendFile(path.resolve(__dirname, './Main/index.html'))

// })

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM user';
    let query = db.query(sql, (err, results) => {
        console.log(query)
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(200).json(results);
    });
});

app.all('*', (req, res) => {

    res.status(404).send('<h1> resource not found </h1>')

  })
 
  // Start the server

  const port = 5000;

  app.listen(port, () => {

    console.log(`Server running on port ${port}`);

  });