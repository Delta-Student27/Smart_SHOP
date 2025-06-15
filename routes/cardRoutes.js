import express from 'express';
import {
  getCartByUserId,
  updateCart,
} from '../Controllers/CartController.js';

const router = express.Router();

router.get('/:userId', getCartByUserId);

router.put('/:userId', updateCart);

export default router;
