import {
  Outlet,
  createRootRoute,
  HeadContent
} from '@tanstack/react-router';
import { TanstackDevtools } from '@tanstack/react-devtools';

export const Route = createRootRoute({
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

  component: () => (
    <>
      <HeadContent />
      <Outlet />
      <TanstackDevtools />
    </>
  ),
});
