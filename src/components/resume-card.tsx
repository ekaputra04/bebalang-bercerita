"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className="block bg-transparent cursor-pointer"
      onClick={() => handleClick()}>
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="bg-muted-background dark:bg-foreground m-auto border size-12">
            <AvatarImage
              src={logoUrl || "/images/logo.png"}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="group flex-col flex-grow items-center ml-4">
          <CardHeader>
            <div className="flex justify-between items-center gap-x-2 text-base">
              <h3 className="inline-flex justify-center items-center font-semibold text-lg lg:text-xl leading-none">
                {title}

                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-transparent mt-2 text-muted-foreground text-xs sm:text-sm text-justify">
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </div>
  );
};
