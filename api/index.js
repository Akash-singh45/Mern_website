import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import internshipRoutes from './routes/internship.routes.js';
import cookieParser from 'cookie-parser';
import partnerRoutes from './routes/partner.routes.js';

dotenv.config();



mongoose.connect(process.env.MONGO)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error:', err));
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/internships', internshipRoutes);
app.use('/api/partner', partnerRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
    }
)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});