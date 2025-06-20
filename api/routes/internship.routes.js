import express from 'express';
import { getAllInternships, createInternship } from '../controllers/internship.controller.js';
import Internship from '../models/internship.model.js';

const router = express.Router();

router.get('/', getAllInternships);
router.post('/', createInternship); // Later, protect this with admin auth


// POST /api/internships
router.post('/', async (req, res) => {
  try {
    const { title, duration, formLink } = req.body;

    if (!title || !duration || !formLink) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newInternship = new Internship({ title, duration, formLink });
    await newInternship.save();

    res.status(201).json({ message: 'Internship added successfully', internship: newInternship });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
