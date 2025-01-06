import express from 'express';
import bodyParser from 'body-parser';
import masterOwnerRoutes from './routes/masterOwnerRoutes';
import path from 'path';
import pool from './database';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/master-owner', masterOwnerRoutes);

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM master_owner');
  if (result.rows.length === 0) {
    res.redirect('/register');
  } else {
    res.send('Welcome to the system');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});