const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'deepali',
  database: 'seva'
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connected');
  }
});

const insertQuery =
  'INSERT INTO donate (name, email, phone, city, pincode, type, food, quantity) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

app.post('/donation', (req, res) => {
  const { name, email, phone, city, pin, type, food, quantity } = req.body;

  // Execute the insert query with the provided data
  db.query(
    insertQuery,
    [name, email, phone, city, pin, type, food, quantity],
    (error, results) => {
      if (error) {
        console.error('Error inserting data: ', error);
        res.status(500).json({ error: 'Error inserting data into the database' });
        return;
      }
      console.log('Data inserted successfully!');
      res.status(200).json({ message: 'Data inserted successfully' });
    }
  );
});

app.post('/api/receive', (req, res) => {
  const { name, email, phone, city, pincode, quantity } = req.body;

  // Insert data into the receive table
  const insertQuery = `INSERT INTO recieve (name, email, phone, city, pincode, quantity) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(
    insertQuery,
    [name, email, phone, city, pincode, quantity],
    (error, results, fields) => {
      if (error) {
        console.error('Error inserting data into the receive table: ' + error);
        res.status(500).json({ error: 'An error occurred while inserting data.' });
      } else {
        console.log('Data inserted into the receive table.');

        // Fetch data from the donate table with matching city and pincode
        const selectQuery = `SELECT * FROM donate WHERE city = ? AND pincode = ?`;
        db.query(selectQuery, [city, pincode], (err, rows, fields) => {
          if (err) {
            console.error('Error fetching data from the donate table: ' + err);
            res.status(500).json({ error: 'An error occurred while fetching data.' });
          } else {
            console.log('Data fetched from the donate table.');
            res.status(200).json(rows);
          }
        });
      }
    }
  );
})

app.listen(4002, () => {
  console.log('Server is running on port  4002');
});
