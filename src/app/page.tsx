'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialLinks from '@/components/SocialLinks'
import ProjectCard from '@/components/ProjectCard'
import ExperienceCard from '@/components/ExperienceCard'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Current Project',
    description: 'Biggest Project Attempt Yet... Details Coming Soon!',
    link: 'n/a',
    tags: [""]
  },
  {
    id: 2,
    title: 'Automated Image to Arabic Flashcard App',
    description: 'An app that automates the creation of Arabic flashcards from images using Tesseract OCR and the OpenAI API.',
    link: 'n/a',
    tags: ["Flutter", "Dart", "FastAPI", "Python", "OpenAI", "OCR", "Tesseract"]
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    description: 'Developed and deployed a fully responsive personal portfolio using Next.js, React, and Tailwind CSS to showcase my professional experience and projects.',
    link: 'n/a',
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel", "TypeScript"]
  },
  {
    id: 4,
    title: 'MNIST Digit Recognition Service',
    description: 'Deployed an interactive machine learning service with a Streamlit frontend and a Docker-containerised PostgreSQL database to serve a PyTorch CNN model.',
    link: 'n/a',
  tags: ["Python", "PyTorch", "Streamlit", "Docker", "PostgreSQL", "Machine Learning", "CNN"]
  },
  {
    id: 5,
    title: 'Automated Sorting Validation for Hacker News',
    description: 'Developed an automated testing script using Playwright to validate article sorting, handle dynamic pagination, and log errors to a JSON file.',
    link: 'n/a',
    tags: ["Javascript ", "Playwright", "Automated Testing", "QA Testing"]
  }
]

const experiences = [
  {
    id: 1,
    role: "Open Source Contributor",
    company: "DVC - MLOps Platform",
    description: "I engineered the --hide-workspace flag in Python with accompanying unit tests. I collaborated with the project maintainers through Pull Request (#10798) to achieve a successful merge. I also authored the official documentation on Pull Request (#5427). I demonstrated deep engagement by identifying and flagging three additional undocmented flags under exp show.",
    dates: "Jul. 2025 – Aug. 2025",
  },
  {
    id: 2,
    role: "Automation Engineering Intern",
    company: "Warwick Manufacturing Group",
    description: "I slashed a 3-week manual workflow to 3 minutes by developing an automated VBA macro to aid in the STPA process. I improved analysis consistency across Safety Analysts and ported the VBA process into a bare-bones Python backend framework for the companies software engineers to use when they begin developing their own inhouse tool.",
    dates: "Jul. 2024 – Sep. 2024",
  },
  {
    id: 3,
    role: "Backend Engineer Intern",
    company: "Uzum - Tech Unicorn",
    description: "I desgined and developed an automated data pipeline to extract data from a MariaDB database and process over 5,000 client locations. This pipeline was integrated into the company's main KPI dashboard to improve operational planning through a geospatial visualisation model. My work culminated in developing an automated tracking algorithm that aided the companies lawyers in halving the debt recovery timeline for over a 1,000 cases.",
    dates: "Jul. 2022 – Sep. 2022",
  },
] as const;

export default function Home() {
  return (
    <>
      <Header />

      <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">
        Samandar Mirjalilov
      </h1>

      <div className="flex items-center gap-1.5 font-medium tracking-tight">
        <h2 className="text-base text-foreground">Full Stack Dev | Python</h2>
        <span className="text-foreground/50">•</span>
        <h2 className="text-base text-foreground">Next.js</h2>
        <span className="text-foreground/50">•</span>
        <h2 className="text-base text-foreground">Docker</h2>
      </div>

      <p className="pt-4 text-sm text-foreground">
        Hi there, I'm Samandar, a Mathematics graduate from the University of Warwick. I'm passionate about building scalable backend systems and full-stack applications that solve real-world problems. 
      </p>

      <SocialLinks />

      <section className="pt-8">
        <h2 className="font-medium tracking-tight text-foreground">Experience</h2>
        <div className="pt-1.5">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

      <section className="pt-8">
  <h2 className="font-medium tracking-tight text-foreground">Projects</h2>

  <p className="text-sm text-foreground/70">
    Visit my{' '}
    <Link
      href="https://github.com/MirjalilovS?tab=repositories"
      rel="noopener noreferrer"
      target="_blank"
      className="font-medium text-primary underline underline-offset-2 transition-all duration-150 ease-in-out hover:text-accent"
    >
      GitHub
    </Link>{' '}
    for all my projects.
  </p>

  <div className="pt-1.5">
    {projects.map(project => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>

</section>

      <Footer />
    </>
  )
}
