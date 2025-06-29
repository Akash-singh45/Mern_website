import mongoose from 'mongoose';

const PartnerRequestSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  hiringType: {
    type: String,
    enum: ['Internship', 'Full-Time', 'Contract'],
    required: true,
  },
  jobTitle: {
    type: String,
  },
  jobDescription: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('PartnerRequest', PartnerRequestSchema);
