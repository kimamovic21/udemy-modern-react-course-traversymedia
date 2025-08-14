import type { Route } from './+types/index';
import type {
  Post,
  Project,
  StrapiProject,
  StrapiResponse,
  StrapiPost
} from '~/types';
import FeaturedProjects from '~/components/FeaturedProjects';
import AboutPreview from '~/components/AboutPreview';
import LatestPosts from '~/components/LatestPosts';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: Post[] }> {
  const [projectsRes, postsRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`),
    fetch(`${import.meta.env.VITE_API_URL}/posts?sort[0]=date:desc&pagination[limit]=3&populate=image`),
  ]);

  if (!projectsRes.ok || !postsRes.ok) {
    throw new Error('Failed to fetch projects or posts');
  };

  const projectsJson: StrapiResponse<StrapiProject> = await projectsRes.json();
  const postsJson: StrapiResponse<StrapiPost> = await postsRes.json();

  const projects = projectsJson.data.map((project) => ({
    id: project.id,
    documentId: project.documentId,
    title: project.title,
    description: project.description,
    url: project.url,
    date: project.date,
    category: project.category,
    featured: project.featured,
    image: project.image?.url
      ? `${project.image.url}`
      : '/images/no-image.png',
  }));

  const posts = postsJson.data.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    body: post.body,
    date: post.date,
    image: post.image?.url
      ? `${post.image.url}`
      : '/images/no-image.png',
  }));

  return { projects, posts };
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