"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, CheckCircleIcon } from "lucide-react";
import React from "react";
import Link from "next/link";

interface RoleItem {
  title: string;
  start: string;
  end: string;
  location?: string;
  description?: React.ReactNode;
}

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string | React.ReactNode;
  roles?: RoleItem[];
  location?: string;
  gpa?: string;
  verifiedLink?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  roles,
  location,
  gpa,
  verifiedLink,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [expandedRole, setExpandedRole] = React.useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const hasContent = description || roles;

  const handleClick = () => {
    if (hasContent) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className="block cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && hasContent) {
          setIsExpanded(!isExpanded);
        }
      }}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {href ? (
                  <Link href={href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    {title}
                  </Link>
                ) : (
                  <span>
                    {title}
                    {location && <span className="text-muted-foreground font-normal">, {location}</span>}
                  </span>
                )}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                {hasContent && (
                  <ChevronRightIcon
                    className={cn(
                      "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                )}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-xs inline-flex items-center gap-1">
                <span>
                  {subtitle}
                  {gpa && (
                    <span className="text-muted-foreground"> · GPA {gpa}/4.0</span>
                  )}
                </span>
                {verifiedLink && (
                  <Link
                    href={verifiedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View credential"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex hover:opacity-80 transition-opacity"
                  >
                    <CheckCircleIcon className="size-3.5 text-green-500" />
                  </Link>
                )}
              </div>
            )}
          </CardHeader>
          {hasContent && mounted && (
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
              className="mt-2 text-xs sm:text-sm px-4 pb-4 w-full"
            >
              {roles ? (
                <div className="space-y-2">
                  {roles.map((role, idx) => (
                    <div key={idx}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedRole(expandedRole === role.title ? null : role.title);
                        }}
                        className="w-full flex items-center justify-between text-left py-1 hover:text-blue-500 transition-colors"
                      >
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-muted-foreground">●</span>
                          <span className="font-medium">{role.title}</span>
                          <ChevronRightIcon
                            className={cn(
                              "size-3 text-muted-foreground transition-transform",
                              expandedRole === role.title ? "rotate-90" : ""
                            )}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">
                          {role.start} – {role.end}
                        </span>
                      </button>
                      {expandedRole === role.title && (
                        <div className="pl-6 pb-2 space-y-1">
                          {role.location && (
                            <p className="text-xs text-muted-foreground italic">{role.location}</p>
                          )}
                          {role.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {typeof description === "string" ? (
                    <p>{description}</p>
                  ) : (
                    description
                  )}
                </>
              )}
            </motion.div>
          )}
        </div>
      </Card>
    </div>
  );
};