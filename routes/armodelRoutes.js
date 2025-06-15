import express from 'express';
import {
  getARModelByProduct,
  createARModel,
  updateARModel,
} from '../Controllers/ARModelController.js';


const router = express.Router();

router.get('/product/:productId', getARModelByProduct);

router.post('/', createARModel);

router.put('/:id', updateARModel);

export default router;
