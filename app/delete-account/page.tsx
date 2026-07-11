import type { Metadata } from "next"
import Link from "next/link"
import { Trash2, Mail, AlertCircle, ChevronRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { APP_NAME, PUBLISHER, SUPPORT_EMAIL } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: `Delete Your Account — ${APP_NAME}`,
  description: `How to request deletion of your ${APP_NAME} account and associated data. ${PUBLISHER}.`,
}

const steps = [
  {
    number: "1",
    title: "Open the Besot app",
    body: "Launch the Besot app on your Android device and sign in with your nickname and PIN.",
  },
  {
    number: "2",
    title: "Go to Account Settings",
    body: 'Tap the profile or menu icon, then select "Settings" from the navigation.',
  },
  {
    number: "3",
    title: "Select Delete Account",
    body: 'Scroll to the bottom of Settings and tap "Delete Account." You will be asked to confirm.',
  },
  {
    number: "4",
    title: "Confirm deletion",
    body: "Enter your PIN when prompted and confirm. Your account and all associated data will be permanently deleted.",
  },
]

const dataDeleted = [
  "Your nickname and PIN (hashed credential)",
  "Your optional recovery email address",
  "All posts and comments you have written",
  "Your reactions, votes, and saved posts",
  "Your selected interests and language preferences",
  "Your device token (push notifications)",
  "All associated activity and session data",
]

const dataRetained = [
  "Anonymised aggregate analytics (not linked to your account)",
  "Moderation logs required by law (retained for up to 12 months where legally required)",
]

export default function DeleteAccountPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-3xl px-4 pt-6 sm:px-6"
        >
          <ol className="flex items-center gap-1 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground">
                {APP_NAME} Legal
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="font-medium text-foreground" aria-current="page">
              Delete Account
            </li>
          </ol>
        </nav>

        <section className="mx-auto max-w-3xl px-4 pb-6 pt-8 sm:px-6">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
              <Trash2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Delete Your Account
              </h1>
              <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                You can delete your {APP_NAME} account at any time, directly from within the app or
                by contacting us. Deletion is permanent and cannot be undone.
              </p>
            </div>
          </div>
        </section>

        {/* In-app deletion steps */}
        <section
          aria-labelledby="in-app-heading"
          className="mx-auto max-w-3xl px-4 py-6 sm:px-6"
        >
          <h2
            id="in-app-heading"
            className="text-xl font-semibold tracking-tight"
          >
            Delete from within the app
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The fastest way — no email needed.
          </p>
          <ol className="mt-6 space-y-4" aria-label="Steps to delete your account">
            {steps.map((step) => (
              <li
                key={step.number}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Email request */}
        <section
          aria-labelledby="email-heading"
          className="mx-auto max-w-3xl px-4 py-6 sm:px-6"
        >
          <div className="rounded-2xl border border-border bg-accent/40 p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
              <div className="flex-1">
                <h2
                  id="email-heading"
                  className="text-lg font-semibold tracking-tight"
                >
                  Request deletion by email
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  If you cannot access the app, send a deletion request to our support team. Include
                  your nickname in the email. We will process your request within{" "}
                  <strong className="font-medium text-foreground">30 days</strong>.
                </p>
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20Besot%20account.%0A%0ANickname%3A%20`}
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Send deletion request to {SUPPORT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What gets deleted */}
        <section
          aria-labelledby="data-heading"
          className="mx-auto max-w-3xl px-4 py-6 sm:px-6"
        >
          <h2
            id="data-heading"
            className="text-xl font-semibold tracking-tight"
          >
            What happens to your data
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="text-sm font-semibold text-foreground">Permanently deleted</h3>
              <ul className="mt-3 space-y-2" aria-label="Data permanently deleted">
                {dataDeleted.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span
                      className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-destructive/60"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="text-sm font-semibold text-foreground">May be retained</h3>
              <ul className="mt-3 space-y-2" aria-label="Data that may be retained">
                {dataRetained.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span
                      className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-muted-foreground/40"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Warning notice */}
        <section className="mx-auto max-w-3xl px-4 pb-14 pt-4 sm:px-6">
          <div className="flex gap-3 rounded-2xl border border-border bg-card p-5">
            <AlertCircle
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="font-medium text-foreground">Deletion is permanent.</strong>{" "}
              Once your account is deleted, your nickname may become available for others to use
              and your posts will be removed from the community. This action cannot be reversed.
              If you only want a break, consider simply logging out instead.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}