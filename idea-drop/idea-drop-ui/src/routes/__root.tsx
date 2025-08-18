import {
  Outlet,
  createRootRouteWithContext,
  HeadContent
} from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { TanstackDevtools } from '@tanstack/react-devtools';
import Header from '@/components/Header';

type RouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Share, explore, and build on the best startup ideas and side hustles.',
      },
      {
        title: 'IdeaDrop - Your Idea Hub',
      },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <HeadContent />
      <Header />
      <main className='flex-grow flex items-center justify-center p-6'>
        <div className='w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8'>
          <Outlet />
        </div>
      </main>
      <TanstackDevtools />
    </div>
  );
};