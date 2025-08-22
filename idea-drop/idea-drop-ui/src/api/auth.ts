import api from '@/lib/axios';

export const registerUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post('/auth/register', { name, email, password });
    return res.data; // { accessToken, user }
  } catch (error: any) {
    // Handle structured error message if it exists
    const message = error.response?.data?.message || 'Failed to register';
    throw new Error(message);
  };
};