import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

 
import Product from './Models/product.js';
import User from './Models/User.js';
import Reward from './Models/Reward.js';
import Cart from './Models/Cart.js';
import Category from './Models/Category.js';
import Order from './Models/Order.js';
import Feedback from './Models/Feedback.js';
import AssistantHistory from './Models/AssistantHistory.js';
import ARModel from './Models/ARModel.js';
import VoiceCommand from './Models/VoiceCommand.js';

 
dotenv.config();

 
const app = express();
const PORT = process.env.PORT || 7890;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());  
app.use(express.json());  

 
app.get('/', (req, res) => {
  res.send('Welcome to SmartShop API');
});

 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
