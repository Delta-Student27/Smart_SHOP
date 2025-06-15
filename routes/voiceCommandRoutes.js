import express from 'express';
import {
  getVoiceCommands,
  addVoiceCommand,
} from '../Controllers/VoiceCommandController.js';

const router = express.Router();

router.get('/:userId', getVoiceCommands);

router.post('/', addVoiceCommand);

export default router;
