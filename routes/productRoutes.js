import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../Controllers/ProductController.js';

const router = express.Router();

// 🔹 Test route to verify product routing is working
router.get('/ping', (req, res) => {
  res.send('✅ Products route is working!');
});

// 🔹 Actual product routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/add', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
