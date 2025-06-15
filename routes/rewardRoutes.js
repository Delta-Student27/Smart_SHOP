import express from 'express';
import {
  getUserReward,
  updateUserReward,
} from '../Controllers/RewardController.js';

const router = express.Router();

router.get('/:userId', getUserReward);

router.put('/:userId', updateUserReward);

export default router;
