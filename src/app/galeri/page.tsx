import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ImagePreview from "@/components/image-preview";
import BlurFade from "@/components/magicui/blur-fade";
import { getGalleryImages } from "@/data/gellery";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const images = getGalleryImages();

  return (
    <div className="">
      <HeroSection />
      <section className="mt-16">
        <BlurFade delay={BLUR_FADE_DELAY} className="mb-8">
          <Header text="Galeri" />
        </BlurFade>

        <ImagePreview images={images} />
      </section>
    </div>
  );
}
