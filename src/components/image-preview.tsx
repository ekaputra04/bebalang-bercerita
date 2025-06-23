"use client";

import Image from "next/image";
import BlurFade from "./magicui/blur-fade";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ImagePreview({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="gap-4 space-y-4 columns-1 sm:columns-2 lg:columns-3 p-4">
        {images.map((image) => (
          <BlurFade key={image}>
            <div
              className="shadow rounded overflow-hidden break-inside-avoid"
              onClick={() => handleImageClick(image)}>
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
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-h-[80vh] overflow-auto">
            {selectedImage && (
              <div className="relative flex justify-center w-full max-h-[80vh]">
                <Image
                  src={`/galeri/${selectedImage}`}
                  alt={selectedImage}
                  width={800}
                  height={600}
                  className="rounded-lg w-auto h-auto max-h-full"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
