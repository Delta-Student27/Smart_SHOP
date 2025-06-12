import express from 'express';
import connectDB from './config/db.js';  // Import the DB connection function
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from './Models/product.js';
import User from './Models/User.js';
import Reward from './Models/Reward.js';
import Cart from './Models/Cart.js';
import Category from './Models/Category.js';
import Order from './Models/Order.js';
import Feedback from './Models/Feedback.js';
import AssistantHistory from './Models/AssistantHistory.js';

dotenv.config();

const app = express();
const PORT = 7890;

// Connect to MongoDB before starting the server
connectDB();

app.listen(PORT, () => {
  console.log(`Server is Listening at http://localhost:${PORT}...`);
});
