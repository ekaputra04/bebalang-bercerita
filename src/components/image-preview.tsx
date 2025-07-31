"use client";

import { useState } from "react";
import Image from "next/image";
import BlurFade from "./magicui/blur-fade";
import { Button } from "./ui/button";
import LoadingIcon from "./loading-icon";
import { RefreshCw } from "lucide-react";

export default function ImagePreview({ images }: { images: string[] }) {
  const [displayCount, setDisplayCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const imagesPerPage = 6;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount((prevCount) => prevCount + imagesPerPage);
      setIsLoading(false);
    }, 500);
  };

  const displayedImages = images.slice(0, displayCount);

  return (
    <div>
      <div className="gap-4 grid grid-cols-2 md:grid-cols-3">
        {displayedImages.map((image) => (
          <BlurFade key={image}>
            <div className="shadow rounded overflow-hidden break-inside-avoid">
              <Image
                src={`/galeri/${image}`}
                alt={image}
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </BlurFade>
        ))}
      </div>
      {displayCount < images.length && (
        <div className="mt-6 text-center">
          <Button
            onClick={handleLoadMore}
            disabled={isLoading}
            variant={"outline"}>
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
    </div>
  );
}
