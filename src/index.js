import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//middlewares
app.use(cors());
app.use(express.json());

//routes

//Error handling middleware

//server running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});