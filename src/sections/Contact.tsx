import Section from '@/components/Section';

const contacts = [
  {
    label: 'Email',
    value: 'JAcox12@icloud.com',
    href: 'mailto:JAcox12@icloud.com',
    description: 'Best for opportunities, collaboration, or general questions.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jason-cox-dev',
    href: 'https://linkedin.com/in/jason-cox-dev',
    description: 'Connect professionally and view more of my background.',
  },
  {
    label: 'GitHub',
    value: 'github.com/taxidriver802',
    href: 'https://github.com/taxidriver802',
    description: 'Browse my repositories, project history, and code.',
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="The best ways to reach me and explore more of my work."
    >
      <div className="rounded-3xl border p-8 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Let’s connect
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Open to full-stack opportunities and thoughtful collaboration.
            </h3>

            <p className="mt-4 max-w-xl text-muted-foreground leading-7">
              I’m building full-stack applications with React, Node.js, SQL, and
              modern web tools. Whether you want to talk about an opportunity, a
              project, or just connect, here are the best places to reach me.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:JAcox12@icloud.com"
                className="rounded-xl border px-4 py-2.5 text-sm font-medium transition hover:bg-muted"
              >
                Email Me
              </a>

              <a
                href="/resume/jason_cox_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border px-4 py-2.5 text-sm font-medium transition hover:bg-muted"
              >
                View Resume
              </a>
              <a
                href="/resume/jason_cox_resume.pdf"
                download="Jason Cox - Resume (2026)"
                className="rounded-xl border px-4 py-2.5 text-sm font-medium transition hover:bg-muted flex items-center gap-2"
                aria-label="Download Resume"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group rounded-2xl border p-5 transition hover:bg-muted/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {item.label}
                    </p>

                    <p className="mt-2 text-base font-medium break-all group-hover:underline">
                      {item.value}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <span className="shrink-0 text-muted-foreground transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
