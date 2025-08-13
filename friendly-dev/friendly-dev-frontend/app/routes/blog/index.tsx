import { useState } from 'react';
import type { Route } from './+types/index';
import type { PostMeta, StrapiPost, StrapiResponse } from '~/types';
import PostCard from '~/components/PostCard';
import Pagination from '~/components/Pagination';
import PostFilter from '~/components/PostFilter';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?populate=image&sort=date:desc`);

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  };

  const postsJson: StrapiResponse<StrapiPost> = await res.json();

  const posts = postsJson.data.map((post) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    date: post.date,
    body: post.body,
    image: post.image?.url ? `${import.meta.env.VITE_STRAPI_URL}${post.image.url}` : '/images/no-image.png',
  }));

  return { posts };
};

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { posts } = loaderData as { posts: PostMeta[] };

  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    );
  });

  const postsPerPage = 3;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

  return (
    <section className='max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900'>
      <h2 className='text-3xl font-bold mb-8 text-white'>
        📝 Blog
      </h2>

      <PostFilter
        searchQuery={searchQuery}
        onSearchChange={(query) => {
          setSearchQuery(query);
          setCurrentPage(1);
        }}
      />

      <div className='space-y-8'>
        {currentPosts.length === 0 ? (
          <p className='text-gray-400 text-center'>
            No posts found.
          </p>
        ) : (
          currentPosts.map((post) => {
            return (
              <PostCard key={post.slug} post={post} />
            );
          })
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={(page) => setCurrentPage(page)}
        />
      )}
    </section>
  );
};

export default BlogPage;