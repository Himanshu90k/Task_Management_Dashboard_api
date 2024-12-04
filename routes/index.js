import express from 'express';
import tasksRoute from './tasksRoute.js';
import addTaskRoute from './addTaskRoute.js';
import deleteTaskRoute from './deleteTaskRoute.js';
import updateTaskRoute from './updateTaskRoute.js';

const router = express.Router();

router.use('/get-tasks', tasksRoute);
router.use('/add-task', addTaskRoute);
router.use('/delete-task', deleteTaskRoute);
router.use('/update-task', updateTaskRoute);

export default router;