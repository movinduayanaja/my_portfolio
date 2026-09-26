import Image from "next/image";
import Link from "next/link";
import { skillGroups } from "@/data/skills";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { experience } from "@/data/experience";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 sm:pt-24 pb-20">
        <div className="grid sm:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <p className="text-teal text-sm mb-4">Software Engineer, Sri Lanka</p>
            <h1 className="font-display text-[2.75rem] sm:text-6xl leading-[1.05] text-paper">
              Building software
              <br />
              that feels{" "}
              <span className="italic text-amber">solid,</span>
              <br />
              scalable, and{" "}
              <span className="italic text-teal">real.</span>
            </h1>
            <div className="rule w-24 mt-6 mb-6" />
            <p className="max-w-prose text-muted leading-relaxed">
            IT graduate with practical experience in full-stack web development,
            specializing in the MERN stack, Spring Boot, Java, HTML, CSS, and
            JavaScript. Experienced in developing web applications, working with
            relational and NoSQL databases, and applying software engineering best
            practices to build reliable and maintainable solutions.
            </p>
            <div className="flex gap-4 mt-9 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-amber text-ink font-medium rounded-sm hover:bg-teal transition-colors"
              >
                Get in touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-5 py-2.5 border border-hairline text-paper rounded-sm hover:border-teal transition-colors"
              >
                View projects
              </Link>
              <a
                href="/Movindu_CV.pdf"
                download
                className="inline-flex items-center px-5 py-2.5 border border-hairline text-paper rounded-sm hover:border-teal transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="justify-self-center sm:justify-self-end">
            <div className="photo-glow w-40 h-52 sm:w-48 sm:h-64 rounded-2xl overflow-hidden border border-hairline">
              <Image
                src="/my4to.jpg"
                alt="Movindu Ayanaja"
                width={300}
                height={400}
                className="object-cover w-full h-full object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-hairline">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl text-paper mb-5">About</h2>
          <p className="max-w-prose text-muted leading-relaxed mt-4">
          A motivated and collaborative individual with a strong interest in
          software engineering, artificial intelligence, cloud computing, and
          emerging technologies. Passionate about continuous learning, solving
          real-world problems, and contributing to innovative projects that
          create meaningful value.
          </p>
          <p className="max-w-prose text-muted leading-relaxed mt-4">
            Reach me at{" "}
            <a
              href="mailto:movindugethmin@gmail.com"
              className="text-teal hover:text-amber transition-colors"
            >
              movindugethmin@gmail.com
            </a>
            , or use the{" "}
            <Link href="/contact" className="text-teal hover:text-amber transition-colors">
              contact page
            </Link>
            .
          </p>
        </div>
      </section>
      {/* Experience */}
      <section id="experience" className="border-t border-hairline">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl text-paper mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((item) => (
              <div key={item.role} className="flex flex-col sm:flex-row sm:gap-8">
                <p className="text-sm text-muted sm:w-40 shrink-0 mb-1 sm:mb-0">
                  {item.period}
                </p>
                <div>
                  <h3 className="text-paper">{item.role}</h3>
                  <p className="text-teal text-sm mt-1">{item.company}</p>
                  <p className="text-muted text-sm mt-2 max-w-prose leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Skills */}
      <section id="skills" className="border-t border-hairline">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl text-paper mb-8">Skills</h2>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm text-teal mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-muted border border-hairline rounded-sm px-2.5 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-t border-hairline">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-display text-2xl text-paper">Featured work</h2>
            <Link
              href="/projects"
              className="text-sm text-teal hover:text-amber transition-colors"
            >
              See all projects
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}