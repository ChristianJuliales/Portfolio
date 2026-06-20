import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import projectsRouter from './routes/projects.js';
import certificatesRouter from './routes/certificates.js';
import resumeRouter from './routes/resume.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

import { seedDatabase } from './utils/seeder.js';

// Database connection
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';
mongoose.connect(mongoUri)
  .then(() => {
    console.log('MongoDB connected successfully');
    seedDatabase();
  })
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/projects', projectsRouter);
app.use('/api/certificates', certificatesRouter);
app.use('/api/resume', resumeRouter);

// Basic check route
app.get('/api', (req, res) => {
  res.json({ message: 'Portfolio API is running smoothly' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Port configuration for localhost runner
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

export default app;
