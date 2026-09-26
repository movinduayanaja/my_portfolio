import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Movindu Ayanaja",
};

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="font-display text-3xl text-paper mb-2">Projects</h1>
      <div className="rule w-24 mt-4 mb-10" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}