import express from 'express';
import { getAllInternships, createInternship } from '../controllers/internship.controller.js';

const router = express.Router();

// GET all internships
router.get('/', getAllInternships);

// POST a new internship
router.post('/', createInternship);

export default router;

