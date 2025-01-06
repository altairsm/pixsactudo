import { Client } from 'pg';

const createTables = async () => {
    const client = new Client({
        user: 'your_username',
        host: 'localhost',
        database: 'your_database',
        password: 'your_password',
        port: 5432,
    });

    await client.connect();

    const queries = `
        CREATE TABLE IF NOT EXISTS master_owners (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            cpf VARCHAR(14) NOT NULL UNIQUE,
            cnpj VARCHAR(18) NOT NULL UNIQUE,
            company_name VARCHAR(100) NOT NULL,
            pix_key VARCHAR(100) NOT NULL,
            master_access_password VARCHAR(100) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS clients (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            cpf VARCHAR(14) NOT NULL UNIQUE,
            cnpj VARCHAR(18) NOT NULL UNIQUE,
            company_name VARCHAR(100) NOT NULL,
            pix_key VARCHAR(100) NOT NULL,
            access_password VARCHAR(100) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            cpf VARCHAR(14) NOT NULL UNIQUE,
            access_password VARCHAR(100) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS cleaners (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            phone VARCHAR(15) NOT NULL,
            cpf VARCHAR(14) NOT NULL UNIQUE,
            pix_key VARCHAR(100) NOT NULL
        );
    `;

    await client.query(queries);
    await client.end();
};

createTables().catch(err => console.error(err));