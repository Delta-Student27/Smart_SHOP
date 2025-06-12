import express from 'express';
import connectDB from './config/db.js';  // Import the DB connection function
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import product from './Models/product.js'
dotenv.config();

const app = express();
const PORT = 7890;

// Connect to MongoDB before starting the server
connectDB();

app.listen(PORT, () => {
  console.log(`Server is Listening at http://localhost:${PORT}...`);
});
