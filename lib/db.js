import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'car_app_database',
  password: 'thaobalun123',
  port: 5432,
});

export default pool;
