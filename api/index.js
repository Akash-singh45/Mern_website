import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import internshipRoutes from './routes/internship.routes.js';
import cookieParser from 'cookie-parser';
import partnerRoutes from './routes/partner.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// Setup __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();

app.use(express.json());
app.use(cookieParser());

// API routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/internships', internshipRoutes);
app.use('/api/partner', partnerRoutes);

// Serve frontend
app.use(express.static(path.join(__dirname, '../client/dist')));

// ✅ Express v5 fix: use regex instead of "*"
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
