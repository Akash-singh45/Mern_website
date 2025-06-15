import mongoose from 'mongoose';

const internshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  field: { type: String, required: true }, // e.g., 'AI Engineer'
  description: { type: String, required: true },
  requirements: { type: String, required: true },
  duration: { type: String, required: true },
  location: { type: String, required: true },
  deadline: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Internship', internshipSchema);