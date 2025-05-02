import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//middlewares
app.use(cors());
app.use(express.json());

//routes

//Error handling middleware
//Testing the connection to the database
app.get('/', async (req, res) => {
    console.log('Connecting to the database...');
    const restult = await pool.query('SELECT current_database()');
    console.log('Connected to the database:', restult.rows);
    res.send(`The database name is: ${restult.rows[0].current_database}`);
});
//server running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});