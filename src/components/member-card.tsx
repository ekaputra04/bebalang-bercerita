import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Markdown from "react-markdown";

interface Props {
  title: string;
  description: string;
  image?: string;
  className?: string;
}

export function MemberCard({ title, description, image }: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full "
      }>
      {image && (
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-fit object-cover object-top overflow-hidden"
        />
      )}
      <CardHeader className="px-4 py-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col mt-auto px-4 pb-4">
        <Markdown className="dark:prose-invert max-w-full font-sans text-muted-foreground text-xs text-pretty prose">
          {description}
        </Markdown>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
