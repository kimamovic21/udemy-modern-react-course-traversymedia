import { useEffect } from 'react';
import type { Route } from './+types/index';
import Hero from '~/components/Hero';

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
  return (
    <section>
      <Hero name='Kerim' />
    </section>
  );
};

export default HomePage;