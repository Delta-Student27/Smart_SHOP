import express from 'express';
import {
  getOrdersByUser,
  createOrder,
  updateOrderStatus,
} from '../Controllers/OrderController.js';

const router = express.Router();

router.get('/user/:userId', getOrdersByUser);

router.post('/', createOrder);

router.put('/:id', updateOrderStatus);

export default router;
