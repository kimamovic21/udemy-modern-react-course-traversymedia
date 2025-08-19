import type { Idea } from '@/types';
import api from '@/lib/axios';

// Get all ideas
export const fetchIdeas = async (): Promise<Idea[]> => {
  const response = await api.get('/ideas');
  return response.data;
};

// Get single idea
export const fetchIdea = async (ideaId: string): Promise<Idea> => {
  const response = await api.get(`/ideas/${ideaId}`);
  return response.data;
};

// Create new idea
export const createIdea = async (newIdea: {
  title: string;
  summary: string;
  description: string;
  tags: string[];
}): Promise<Idea> => {
  const res = await api.post('/ideas', {
    ...newIdea,
    createdAt: new Date().toISOString(),
  });

  return res.data;
};