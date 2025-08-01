import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image"; // Added for optimized image loading
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import ImageOverlay from "@/components/image-overlay";
import { DynamicDate } from "@/components/dynamic-date";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="">
      <Link href="/blog">
        <Button className="mb-8 px-0" variant={"link"}>
          <div className="flex justify-between items-center space-x-2">
            <ArrowLeftIcon className="w-4 h-4" /> <p>Kembali</p>
          </div>
        </Button>
      </Link>
      <section id="blog" className="mx-auto max-w-3xl">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${DATA.url}${post.metadata.image}`
                : `${DATA.url}/og?title=${post.metadata.title}`,
              url: `${DATA.url}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: DATA.name,
              },
            }),
          }}
        />
        <h1 className="font-medium text-2xl tracking-tighter title">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-4 text-sm">
          <Suspense fallback={<p className="h-5" />}>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {/* {formatDate(post.metadata.publishedAt)} */}
              <DynamicDate date={post.metadata.publishedAt} />
            </p>
          </Suspense>
        </div>
        {post.metadata.image && (
          <div className="mb-16">
            <ImageOverlay post={post} />
          </div>
        )}
        <article
          className="dark:prose-invert prose"
          dangerouslySetInnerHTML={{ __html: post.source }}></article>
      </section>
    </div>
  );
}
