// filepath: /c:/Users/Altair/Downloads/project-bolt-sb1-p6nyw86u/project/my-nodejs-app/src/database/migrations.ts
import pool from './index';

const createTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS master_owner (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100),
      cpf VARCHAR(11),
      cnpj VARCHAR(14),
      company_name VARCHAR(100),
      pix_key VARCHAR(100),
      master_password VARCHAR(100)
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS clients (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100),
      cpf VARCHAR(11),
      cnpj VARCHAR(14),
      company_name VARCHAR(100),
      pix_key VARCHAR(100),
      password VARCHAR(100),
      master_owner_id INTEGER REFERENCES master_owner(id)
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100),
      cpf VARCHAR(11),
      password VARCHAR(100),
      client_id INTEGER REFERENCES clients(id)
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS cleaners (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      phone VARCHAR(15),
      cpf VARCHAR(11),
      pix_key VARCHAR(100),
      user_id INTEGER REFERENCES users(id)
    );
  `);

  console.log('Tables created successfully');
};

createTables().catch(err => console.error('Error creating tables', err));