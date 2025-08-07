import { useEffect } from 'react';
import type { Route } from './+types/index';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'The Friendly Dev | Welcome' },
    {
      name: 'description',
      content: 'Custom website development'
    },
  ];
};

const HomePage = () => {
  const now = new Date().toISOString();

  if (typeof window === 'undefined') {
    console.log('🖥️ Server Render at:', now);
  } else {
    console.log('🧠 Client Hydration at:', now);
  };

  // console.log(window.scrollX);

  useEffect(() => {
    console.log(window.scrollX);
  }, []);

  return (
    <>
      My App
    </>
  );
};

export default HomePage;