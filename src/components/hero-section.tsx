import { DATA } from "@/data/resume";
import BlurFadeText from "./magicui/blur-fade-text";
import BlurFade from "./magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const BLUR_FADE_DELAY = 0.04;

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="space-y-8 mx-auto w-full max-w-3xl">
        <div className="flex justify-between gap-2">
          <div className="flex flex-col flex-1 space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-300/80 dark:to-slate-900/10 font-bold text-transparent text-2xl sm:text-5xl xl:text-5xl/none"
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
  );
}
