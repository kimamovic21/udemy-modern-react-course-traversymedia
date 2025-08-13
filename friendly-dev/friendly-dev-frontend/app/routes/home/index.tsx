import type { Route } from './+types/index';
import type {
  PostMeta,
  Project,
  StrapiProject,
  StrapiResponse
} from '~/types';
import FeaturedProjects from '~/components/FeaturedProjects';
import AboutPreview from '~/components/AboutPreview';
import LatestPosts from '~/components/LatestPosts';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
  const url = new URL(request.url);

  const [projectsRes, postsRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`),
    fetch(new URL('public/posts-meta.json', url)),
  ]);

  if (!projectsRes.ok || !postsRes.ok) {
    throw new Error('Failed to fetch projects or posts');
  };

  const projectsJson: StrapiResponse<StrapiProject> = await projectsRes.json();
  const postsJson = await postsRes.json();

  const projects = projectsJson.data.map((item: any) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}` : '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }));

  return {
    projects: projects,
    posts: postsJson
  };
};

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
      <LatestPosts posts={posts} />
    </>
  );
};

export default HomePage;