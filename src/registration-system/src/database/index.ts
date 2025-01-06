import { Pool } from 'pg';

const pool = new Pool({
  user: 'your_username',
  host: 'your_database_host',
  database: 'your_database_name',
  password: 'your_password',
  port: 5432,
});

export default pool;