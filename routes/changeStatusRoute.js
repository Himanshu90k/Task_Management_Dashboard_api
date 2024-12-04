import express from 'express';
import { changeStatus } from '../controllers/changeStatusController.js';

const router = express.Router();

router.put('/:id', changeStatus);

export default router;