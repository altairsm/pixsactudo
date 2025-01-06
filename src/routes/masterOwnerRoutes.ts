import { Router } from 'express';
import pool from '../database';

const router = Router();

router.get('/check', async (req, res) => {
  const result = await pool.query('SELECT * FROM master_owner');
  if (result.rows.length === 0) {
    res.redirect('/register');
  } else {
    res.send('Owner already registered');
  }
});

router.post('/register', async (req, res) => {
  const { name, email, cpf, cnpj, company_name, pix_key, master_password } = req.body;
  await pool.query(
    'INSERT INTO master_owner (name, email, cpf, cnpj, company_name, pix_key, master_password) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [name, email, cpf, cnpj, company_name, pix_key, master_password]
  );
  res.send('Owner registered successfully');
});

export default router;