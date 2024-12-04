import express from 'express';
import tasksRoute from './tasksRoute.js';

const router = express.Router();

router.use('/tasks', tasksRoute);

export default router;