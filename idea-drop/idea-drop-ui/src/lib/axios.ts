import { refreshAccessToken } from '@/api/auth';
import { getStoredAccessToken, setStoredAccessToken } from './authToken';
import axios from 'axios';

console.log(import.meta.env.VITE_API_URL);

const api = axios.create({
  // baseURL: '/api',
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token to requests on refresh
api.interceptors.request.use((config) => {
  const token = getStoredAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  };

  return config;
});

// Refresh token after expires
api.interceptors.response.use((res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/auth/refresh')
    ) {
      originalRequest._retry = true;

      try {
        const { accessToken: newToken } = await refreshAccessToken();
        setStoredAccessToken(newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (err) {
        console.error('Refresh token failed', err);
      };
    };

    return Promise.reject(error);
  },
);

export default api;