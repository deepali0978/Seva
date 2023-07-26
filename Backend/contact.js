const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const pool = mysql.createPool({
    user: 'root',
    host: 'localhost',
    password: 'deepali',
    database: 'seva'
});


app.post('/api/contact', (req, res) => {
  
  const { name, email, feedback } = req.body;

  
  const query = 'INSERT INTO contacts (name, email, feedback) VALUES (?, ?, ?)';
  pool.query(query, [name, email, feedback], (error, results) => {
    if (error) {
      console.error('Error saving contact:', error);
      res.status(500).json({ error: 'An error occurred while saving the contact.' });
    } else {
      console.log('Contact saved successfully');
      res.sendStatus(200);
    }
  });
});

// Start the server
app.listen(4001, () => {
  console.log('Server started on port 3000');
});
