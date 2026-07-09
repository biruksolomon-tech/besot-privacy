import type { Metadata } from "next"
import Link from "next/link"
import { ShieldCheck, FileText, Users, Lock, ArrowRight, Mail } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { APP_NAME, PUBLISHER, PRIVACY_EMAIL, EFFECTIVE_DATE } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: `${APP_NAME} Legal Center`,
  description: `Privacy Policy, Terms of Service, and Community Guidelines for ${APP_NAME}, an anonymous community platform by ${PUBLISHER}.`,
}

const documents = [
  {
    href: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "What information Besot collects, how it is used, and how your anonymity is protected.",
    icon: ShieldCheck,
  },
  {
    href: "/terms",
    title: "Terms of Service",
    description:
      "The registration conditions and rules you agree to when creating and using a Besot account.",
    icon: FileText,
  },
  {
    href: "/community-guidelines",
    title: "Community Guidelines",
    description:
      "The standards that keep Besot a safe, respectful, and supportive space for everyone.",
    icon: Users,
  },
]

const principles = [
  {
    title: "Anonymous by design",
    text: "Your real identity is never required or stored. Your nickname is your only identifier.",
  },
  {
    title: "Encrypted credentials",
    text: "PINs are hashed and unreadable, and data is encrypted in transit and at rest.",
  },
  {
    title: "18+ only",
    text: "Besot is intended solely for adults aged 18 and over.",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 pb-4 pt-14 sm:px-6 sm:pt-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Lock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Encrypted &amp; anonymous community platform
          </div>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {APP_NAME} Legal Center
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {APP_NAME} is an anonymous community platform by {PUBLISHER}, built as a safe space to
            share thoughts, experiences, and seek support. These policies explain your rights and
            the conditions for registering and using the app.
          </p>
        </section>

        <section aria-label="Legal documents" className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <div className="grid gap-4">
            {documents.map((doc) => {
              const Icon = doc.icon
              return (
                <Link
                  key={doc.href}
                  href={doc.href}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-accent/40 sm:p-6"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                      {doc.title}
                      <ArrowRight
                        className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </h2>
                    <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                      {doc.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        <section aria-label="Privacy principles" className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">Our core commitments</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {principles.map((p) => (
                <div key={p.title}>
                  <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Contact" className="mx-auto max-w-3xl px-4 pb-14 pt-4 sm:px-6">
          <div className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-accent/40 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="text-base font-semibold text-foreground">Questions about privacy?</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  We aim to respond to all inquiries within 30 days.
                </p>
              </div>
            </div>
            <a
              href={`mailto:${PRIVACY_EMAIL}`}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {PRIVACY_EMAIL}
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Effective {EFFECTIVE_DATE}
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
