"use client";

import Image from "next/image";

export default function ImageOverlay({
  post,
}: {
  post: { metadata: { title: string; image?: string } };
}) {
  return (
    <div className="relative rounded-t-lg w-full object-center object-cover aspect-video overflow-hidden">
      <Image
        width={2000}
        height={1000}
        alt={post.metadata.title}
        src={post.metadata.image || "/images/logo.png"}
        className="rounded-lg w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <div
        className={`bottom-0 left-0 absolute bg-gradient-to-t  to-transparent w-full h-[50%] pointer-events-none from-background`}></div>
    </div>
  );
}
