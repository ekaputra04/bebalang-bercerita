import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import BlurFade from "@/components/magicui/blur-fade";
import { MemberCard } from "@/components/member-card";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col space-y-10 min-h-[100dvh]">
      <HeroSection />
      <section>
        <div className="w-full h-fit object-cover overflow-hidden">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <Image
              src="/images/soon.png"
              alt="Hero Background"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
            />
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <Header text="Tentang KKN PPM" />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="dark:prose-invert max-w-full font-sans text-muted-foreground text-sm text-justify text-pretty prose">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="bidang">
        <div className="flex flex-col gap-y-3 min-h-0">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <Header text="Bidang" />
          </BlurFade>
          <div className="space-y-6">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="py-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <Header text="Anggota" />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="dark:prose-invert max-w-full font-sans text-muted-foreground text-sm text-center text-pretty prose">
              {
                "Bersatu kita teguh, bercerai kita runtuh. Izinkan kami memperkenalkan anggota KKN PPM Bebalang 2025."
              }
            </Markdown>
          </BlurFade>
        </div>

        <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-[800px]">
          {DATA.members.map((member, id) => (
            <BlurFade
              key={member.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
              <MemberCard
                key={member.title}
                title={member.title}
                description={member.description}
                image={member.image}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="justify-center items-center gap-4 grid px-4 md:px-6 py-12 w-full text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <Header text="Kontak" />
              <Markdown className="dark:prose-invert max-w-full font-sans text-muted-foreground text-sm text-center text-pretty prose">
                {
                  "Hubungi kami melalui email, instagram, dan tiktok untuk pertanyaan, saran, atau kolaborasi. Kami akan dengan senang hati menjawab pertanyaan Anda dan menjalin kerja sama yang baik."
                }
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
