import express from 'express';
import { updateTask } from '../controllers/updateTaskController.js';

const router = express.Router();

router.put('/:id', updateTask);

export default router;