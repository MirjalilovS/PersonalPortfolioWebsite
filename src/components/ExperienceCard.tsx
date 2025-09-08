interface ExperienceCardProps {
  experience: {
    id: number
    role: string
    company: string
    description: string
    dates: string
  }
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="flex flex-col items-start pt-2">
      <div className="relative -mx-3 w-full transform rounded-lg px-3 py-2">
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-foreground">
          <div className="flex items-center">
            <h3 className="text-primary">{experience.role}</h3>
            <span className="px-2 text-primary/50">·</span>
            <p className="text-sm text-primary/80">{experience.company}</p>
          </div>
          <p className="text-xs text-foreground/60">{experience.dates}</p>
        </div>
        <p className="mt-1 text-sm text-foreground">{experience.description}</p>
      </div>
    </div>
  )
}