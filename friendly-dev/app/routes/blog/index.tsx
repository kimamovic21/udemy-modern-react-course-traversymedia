import { Link } from 'react-router';
import type { Route } from './+types/index';
import type { PostMeta } from '~/types';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL('/posts-meta.json', request.url);

  const res = await fetch(url.href);

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  };

  const data = await res.json();

  return { posts: data };
};

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData as { posts: PostMeta[] };

  return (
    <>
      <h2 className='text-3xl font-bold mb-8 text-white'>
        📝 Blog
      </h2>
    </>
  );
};

export default BlogPage;