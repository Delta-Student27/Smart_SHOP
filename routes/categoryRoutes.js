import express from 'express';
import {
  getAllCategories,
  createCategory,
} from '../Controllers/CategoryController.js';

const router = express.Router();


router.get('/', getAllCategories);

router.post('/', createCategory);

export default router;
