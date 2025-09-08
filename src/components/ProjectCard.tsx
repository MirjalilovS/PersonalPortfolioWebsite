

import Link from 'next/link';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    link: string; 
    tags: readonly string[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group relative -mx-3 block w-full transform rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-[1.02] md:hover:bg-hoverColor"
    >

      <div>
        <h3 className="text-primary">{project.title}</h3>


        <p className="text-sm text-foreground">{project.description}</p>

        {Array.isArray(project.tags) && project.tags.length > 0 && (
          <p className="mt-2 text-xs tracking-tight text-foreground/60">
            {project.tags.join('  ·  ')}
          </p>
        )}
      </div>
    </Link>
  );
}