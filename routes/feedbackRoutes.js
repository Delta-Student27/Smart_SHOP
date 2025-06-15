import express from 'express';
import {
  getProductFeedback,
  submitFeedback,
} from '../Controllers/FeedbackController.js';

const router = express.Router();

router.get('/:productId', getProductFeedback);

router.post('/', submitFeedback);

export default router;
