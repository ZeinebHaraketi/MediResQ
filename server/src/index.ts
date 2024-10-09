import express from 'express';
import dotenv from 'dotenv';
import connectDB from './services/dbConnection';
import emergencyRoutes from './routes/emergencyRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';


dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/emergencies', emergencyRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
