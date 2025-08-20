import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/ideas', (req, res) => {
  const ideas = [
    { id: 1, title: 'Idea 1', description: 'Description for Idea 1' },
    { id: 2, title: 'Idea 2', description: 'Description for Idea 2' },
    { id: 3, title: 'Idea 3', description: 'Description for Idea 3' },
  ];

  res.json(ideas);
});

app.post('/api/ideas', (req, res) => {
  const { title, description } = req.body || {};

  console.log(title, description);

  res.send(title);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});