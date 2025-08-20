import express from 'express';
import Idea from '../models/Idea.js';
import mongoose from 'mongoose';

const router = express.Router();

// @route GET     /api/ideas
// @description   Get all ideas
// @access        Public
router.get('/', async (req, res, next) => {
  try {
    const ideas = await Idea.find().sort({ createdAt: -1 });

    res.json(ideas);
  } catch (err) {
    next(err);
  };
});

// @route GET     /api/ideas/:id
// @description   Get a single idea by ID
// @access        Public
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404);
      throw new Error('Idea not found');
    };

    const idea = await Idea.findById(id);

    if (!idea) {
      res.status(404);
      throw new Error('Idea not found');
    };

    res.json(idea);
  } catch (err) {
    next(err);
  };
});

// @route POST    /api/ideas
// @description   Create a new idea
// @access        Public
router.post('/', (req, res) => {
  const newIdea = req.body;

  newIdea.id = Date.now();

  res.status(201).json(newIdea);
});

export default router;