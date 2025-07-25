import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../Controllers/UserController.js';

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/add/user', createUser);

router.put('/:id', updateUser);

router.delete('/:id/', deleteUser);

export default router;
