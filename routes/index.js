import express from 'express';
import tasksRoute from './tasksRoute.js';
import addTaskRoute from './addTaskRoute.js';
import deleteTaskRoute from './deleteTaskRoute.js';

const router = express.Router();

router.use('/get-tasks', tasksRoute);
router.use('/add-task', addTaskRoute);
router.use('/delete-task', deleteTaskRoute);

export default router;