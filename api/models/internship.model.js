import mongoose from 'mongoose';

const internshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false},
  requirements: { type: String, required: false },
  duration: { type: String, required: true },
  location: { type: String, required: false },
  deadline: { type: Date, required: false },
  formLink: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Internship', internshipSchema);