"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <Card className="group overflow-hidden border-white/10 bg-brand-glass/30 backdrop-blur-xl transition hover:translate-y-[-2px] hover:bg-brand-glass/40">
      <CardHeader className="space-y-1">
        <CardTitle className="text-base md:text-lg">{project.title}</CardTitle>
        <p className="text-xs text-muted-foreground">
          {project.year ?? ""}
        </p>
      </CardHeader>

      {project.image && (
        <div className="relative mx-4 h-40 overflow-hidden rounded-xl border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={false}
          />
        </div>
      )}

      <CardContent className="mt-4">
        <p className="text-sm text-muted-foreground">{project.summary}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="outline" className="border-white/10 bg-white/5 text-xs">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>

      <Separator className="mx-4 my-2 opacity-50" />

      <CardFooter className="flex gap-2">
        {project.repo && (
          <Link
            href={project.repo}
            target="_blank"
            className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-2 py-1 text-sm hover:bg-white/5"
            aria-label={`Código fuente de ${project.title}`}
          >
            <Github size={16} /> Código
          </Link>
        )}
        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-2 py-1 text-sm hover:bg-white/5"
            aria-label={`Demo de ${project.title}`}
          >
            <ExternalLink size={16} /> Demo
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
