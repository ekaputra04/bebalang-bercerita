import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="mb-8 font-medium text-2xl tracking-tighter">Artikel</h1>
      </BlurFade>
      <div className="gap-4 grid grid-cols-2">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${post.slug}`}>
                <div className="flex flex-col w-full">
                  <div className="w-full object-cover aspect-video overflow-hidden">
                    <Image
                      width={800}
                      height={400}
                      alt={post.metadata.title}
                      src={post.metadata.image || "/images/logo.png"}
                    />
                  </div>
                  <p className="tracking-tight">{post.metadata.title}</p>
                  <p className="h-6 text-muted-foreground text-xs">
                    {post.metadata.publishedAt}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
