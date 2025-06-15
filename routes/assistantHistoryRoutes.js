import express from 'express';
import {
  getUserAssistantHistory,
  addAssistantHistory,
} from '../Controllers/AssistantHIstoryController.js';

const router = express.Router();

router.get('/:userId', getUserAssistantHistory);

router.post('/', addAssistantHistory);

export default router;
