import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col space-y-10 min-h-[100dvh]">
      <section id="hero">
        <div className="space-y-8 mx-auto w-full max-w-3xl">
          <div className="flex justify-between gap-2">
            <div className="flex flex-col flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="font-bold text-3xl sm:text-5xl xl:text-6xl/none tracking-tighter"
                yOffset={8}
                text={`${DATA.name}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="border size-28">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="font-bold text-xl">Tentang KKN PPM</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="dark:prose-invert max-w-full font-sans text-muted-foreground text-sm text-justify text-pretty prose">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex flex-col gap-y-3 min-h-0">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="font-bold text-xl">Bidang</h2>
          </BlurFade>
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
      </section>
      <section id="projects">
        <div className="space-y-12 py-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-foreground px-3 py-1 rounded-lg text-background text-sm">
                  My Projects
                </div>
                <h2 className="font-bold text-3xl sm:text-5xl tracking-tighter">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-[800px]">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 py-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-foreground px-3 py-1 rounded-lg text-background text-sm">
                  Hackathons
                </div>
                <h2 className="font-bold text-3xl sm:text-5xl tracking-tighter">
                  I like building things
                </h2>
                <p className="text-muted-foreground lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 border-l divide-y divide-dashed">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="justify-center items-center gap-4 grid px-4 md:px-6 py-12 w-full text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block bg-foreground px-3 py-1 rounded-lg text-background text-sm">
                Contact
              </div>
              <h2 className="font-bold text-3xl sm:text-5xl tracking-tighter">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline">
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
