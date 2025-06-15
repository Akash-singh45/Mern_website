import Internship from '../models/internship.model.js';

// Get all internships
export const getAllInternships = async (req, res, next) => {
  try {
    const internships = await Internship.find().sort({ createdAt: -1 });
    res.json(internships);
  } catch (err) {
    next(err);
  }
};

// Create a new internship (for admin use)
export const createInternship = async (req, res, next) => {
  try {
    const internship = new Internship(req.body);
    await internship.save();
    res.status(201).json(internship);
  } catch (err) {
    next(err);
  }
};