import { useState } from 'react';
import {
  createFileRoute,
  useNavigate,
  Link
} from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/api/auth';
import { useAuth } from '@/context/AuthContext';

export const Route = createFileRoute('/(auth)/register/')({
  component: RegisterPage,
});

function RegisterPage() {
  const { setAccessToken, setUser } = useAuth();

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { mutateAsync, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
      setUser(data.user);
      navigate({ to: '/ideas' });
    },
    onError: (err: Error) => {
      setError(err.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync({ name, email, password });
    } catch (err: any) {
      console.error(err.message);
    };
  };

  return (
    <div className='max-w-md mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Register</h1>

      {error && (
        <div className='bg-red-100 text-red-700 px-4 py-2 rounded mb-4'>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full border border-gray-300 rounded-md p-2'
          autoComplete='off'
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full border border-gray-300 rounded-md p-2'
          autoComplete='off'
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full border border-gray-300 rounded-md p-2'
          autoComplete='off'
        />
        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md w-full disabled:opacity-50 cursor-pointer'
          disabled={isPending}
        >
          {isPending ? 'Registering...' : 'Register'}
        </button>
      </form>

      <p className='text-sm text-center mt-4'>
        Already have an account?{' '}
        <Link to='/login' className='text-blue-600 hover:underline font-medium'>
          Login
        </Link>
      </p>
    </div>
  );
};
