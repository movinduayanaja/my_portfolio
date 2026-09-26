import Image from "next/image";
import type { Project } from "@/data/projects";

const tagColors = [
  "border-amber/40 text-amber",
  "border-teal/40 text-teal",
  "border-rose/40 text-rose",
];

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col rounded-xl overflow-hidden border border-hairline bg-surface hover:border-teal transition-colors"
    >
      <div className="relative w-full aspect-video bg-ink">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:opacity-90 transition-opacity"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-3xl text-hairline">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-lg text-paper group-hover:text-amber transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm mt-2 leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((tech, i) => (
            <span
              key={tech}
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                tagColors[i % tagColors.length]
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}