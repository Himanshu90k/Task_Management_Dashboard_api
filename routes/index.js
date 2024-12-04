import express from 'express';
import tasksRoute from './tasksRoute.js';
import addTaskRoute from './addTaskRoute.js';

const router = express.Router();

router.use('/get-tasks', tasksRoute);
router.use('/add-task', addTaskRoute);

export default router;