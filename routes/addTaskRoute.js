import express from 'express';
import { addTask } from '../controllers/addTaskController.js';

const router = express.Router();

router.post('/', addTask);

export default router;