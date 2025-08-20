import { errorHandler } from './middleware/errorHandler.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ideasRouter from './routes/ideaRoutes.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/ideas', ideasRouter);

// 404 Fallback
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.get('/error', (req, res) => {
  throw new Error('This is a test error!');
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});