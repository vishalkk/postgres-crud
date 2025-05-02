import pkg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pkg;
dotenv.config();
// create a new pool instance
// using environment variables for configuration
// make sure to set these variables in your .env file
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  
});

//
pool.on('connect', () => {
  console.log('Connected to the database');
}
);
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
}
);
// export the pool instance for use in other modules
export default pool;