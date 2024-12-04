import express from 'express';
import { deleteTask } from '../controllers/deleteTaskController.js';

const router = express.Router();

router.delete('/:id', deleteTask);

export default router;