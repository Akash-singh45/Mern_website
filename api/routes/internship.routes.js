import express from 'express';
import { getAllInternships, createInternship } from '../controllers/internship.controller.js';

const router = express.Router();

router.get('/', getAllInternships);
router.post('/', createInternship); // Later, protect this with admin auth

export default router;