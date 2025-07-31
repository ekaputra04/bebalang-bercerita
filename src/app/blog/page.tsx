import { getBlogPosts } from "@/data/blog";
import BlogPage from "./blog-page";

export default async function Page() {
  const posts = await getBlogPosts();

  return <BlogPage posts={posts} />;
}
