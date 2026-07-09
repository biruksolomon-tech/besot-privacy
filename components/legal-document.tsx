import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { EFFECTIVE_DATE, type LegalDoc } from "@/lib/legal-content"

function renderText(text: string) {
  // Turn known email addresses into mailto links while keeping the text exact.
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
  const parts = text.split(emailRegex)
  return parts.map((part, i) =>
    emailRegex.test(part) ? (
      <a
        key={i}
        href={`mailto:${part}`}
        className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li className="font-medium text-foreground">{doc.title}</li>
        </ol>
      </nav>

      <header className="border-b border-border pb-8">
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          {doc.title}
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{doc.summary}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          Effective date: <time>{EFFECTIVE_DATE}</time>
        </p>
      </header>

      {/* Table of contents */}
      <nav aria-label="On this page" className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          On this page
        </h2>
        <ul className="mt-3 grid gap-1 sm:grid-cols-2">
          {doc.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block rounded-md px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {section.heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 flex flex-col gap-10">
        {doc.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {section.heading}
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              {section.blocks.map((block, i) => {
                if (block.type === "list") {
                  return (
                    <ul key={i} className="flex flex-col gap-2 pl-1">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex gap-3 leading-relaxed text-foreground/90">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"
                          />
                          <span>{renderText(item)}</span>
                        </li>
                      ))}
                    </ul>
                  )
                }
                return (
                  <p
                    key={i}
                    className={
                      block.type === "lead"
                        ? "font-medium leading-relaxed text-foreground"
                        : "leading-relaxed text-foreground/90"
                    }
                  >
                    {renderText(block.text)}
                  </p>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
