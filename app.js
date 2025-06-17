import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Models (optional unless needed here)
// import Product from './Models/Product.js';
// import User from './Models/User.js';
// import Reward from './Models/Reward.js';
// import Cart from './Models/Cart.js';
// import Category from './Models/Category.js';
// import Order from './Models/Order.js';
// import Feedback from './Models/Feedback.js';
// import AssistantHistory from './Models/AssistantHistory.js';
// import ARModel from './Models/ARModel.js';
// import VoiceCommand from './Models/VoiceCommand.js';

// Routes
import arModelRoutes from './routes/arModelRoutes.js';
import assitantHistory from './routes/assistantHistoryRoutes.js';
import cardRoutes from './routes/cardRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/productRoutes.js';
import rewardRoutes from './routes/rewardRoutes.js';
import userRoutes from './routes/userRoutes.js';
import voiceCommandRoutes from './routes/voiceCommandRoutes.js';



dotenv.config();
const app = express();
const PORT = 7890;

//  Middleware to parse JSON
app.use(express.json());

//  Connect to MongoDB
connectDB();

//  Mount Routes
app.use('/api/ar-models', arModelRoutes);
app.use('/api/assistant-history', assitantHistory);
app.use('/api/cards', cardRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/rewards', rewardRoutes);
app.use('/api/users', userRoutes);
app.use('/api/voice-commands', voiceCommandRoutes);


//  Default route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

//  Start the server
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
