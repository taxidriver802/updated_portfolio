import Section from '@/components/Section';
import { techStack } from '@/data/techStack';

export default function TechStack() {
  return (
    <Section
      id="tech-stack"
      title="Tech Stack"
      subtitle="Technologies I use to design, build, and ship full-stack web and mobile applications."
    >
      <div className="space-y-4">
        {techStack.map((group) => (
          <article
            key={group.category}
            className="rounded-2xl border p-5 transition hover:shadow-sm"
          >
            <div className="grid gap-4 md:grid-cols-[220px_1fr] md:gap-6">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {group.category}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="flex justify-center rounded-lg border bg-background px-3 py-2 text-sm max-h-[38px] text-muted-foreground transition hover:text-foreground hover:bg-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
