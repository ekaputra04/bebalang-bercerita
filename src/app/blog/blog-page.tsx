"use client";

import { useState } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ImageOverlay from "@/components/image-overlay";
import LoadingIcon from "@/components/loading-icon";
import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { IBlog } from "@/types/types";
import { RefreshCw } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

interface BlogPageProps {
  posts: IBlog[];
}

export default function BlogPage({ posts }: BlogPageProps) {
  const [displayCount, setDisplayCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const blogsPerPage = 4;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount((prevCount) => prevCount + blogsPerPage);
      setIsLoading(false);
    }, 500);
  };

  const sortedBlogs = posts.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedBlogs = sortedBlogs.slice(0, displayCount);

  return (
    <div>
      <HeroSection />
      <section className="mt-16">
        <BlurFade delay={BLUR_FADE_DELAY} className="mb-8">
          <Header text="Artikel" />
        </BlurFade>

        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
          {displayedBlogs.map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${post.slug}`}
                aria-label={`Read more about ${post.metadata.title}`}>
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
        {displayCount < posts.length && (
          <div className="mt-6 text-center">
            <Button
              onClick={handleLoadMore}
              disabled={isLoading}
              variant="outline"
              className={`px-4 py-2 transition`}>
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <LoadingIcon />
                  <p>Loading...</p>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  <p>Load more</p>
                </div>
              )}
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
