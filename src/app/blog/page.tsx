import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ImageOverlay from "@/components/image-overlay";
import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="">
      <HeroSection />
      <section className="mt-16">
        <BlurFade delay={BLUR_FADE_DELAY} className="mb-8">
          <Header text="Artikel" />
        </BlurFade>

        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
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
                    <ImageOverlay post={post} />
                    <p className="mt-4 tracking-tight">{post.metadata.title}</p>
                    <p className="h-6 text-muted-foreground text-xs">
                      {post.metadata.publishedAt}
                    </p>
                  </div>
                </Link>
              </BlurFade>
            ))}
        </div>
      </section>
    </div>
  );
}
