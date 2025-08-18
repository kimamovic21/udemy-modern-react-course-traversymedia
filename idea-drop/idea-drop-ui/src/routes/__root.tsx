import {
  Outlet,
  createRootRouteWithContext,
  HeadContent
} from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { TanstackDevtools } from '@tanstack/react-devtools';

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

  component: () => (
    <>
      <HeadContent />
      <Outlet />
      <TanstackDevtools />
    </>
  ),
});
