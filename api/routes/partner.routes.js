import express from 'express';
import PartnerRequest from '../models/PartnerRequest.model.js';

const router = express.Router();

// @route   POST /api/partner
// @desc    Submit a partnership request
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newRequest = new PartnerRequest(req.body);
    await newRequest.save();
    res.status(201).json({ success: true, message: 'Request submitted successfully!' });
  } catch (err) {
    console.error('Error saving partner request:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;
