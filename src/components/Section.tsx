import Container from "./Container";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="mb-10">
            {title && (
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 max-w-2xl text-sm text-zinc-600 md:text-base dark:text-zinc-400">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
}