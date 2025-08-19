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