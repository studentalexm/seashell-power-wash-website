export type LegalBlock = { heading: string; paragraphs: string[]; bullets?: string[] }

export function LegalContent({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
      {blocks.map((block) => (
        <section key={block.heading}>
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            {block.heading}
          </h2>
          <div className="mt-4 space-y-4">
            {block.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-pretty leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
          {block.bullets && (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground marker:text-accent-foreground">
              {block.bullets.map((bullet) => (
                <li key={bullet} className="text-pretty leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}
