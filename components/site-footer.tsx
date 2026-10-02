import Link from "next/link"
import { APP_NAME, PUBLISHER, SUPPORT_EMAIL, EFFECTIVE_DATE } from "@/lib/legal-content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-8 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">{APP_NAME}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            An anonymous community platform by {PUBLISHER}.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <li>
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/child-safety" className="text-muted-foreground hover:text-foreground">
                Child Safety
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/community-guidelines"
                className="text-muted-foreground hover:text-foreground"
              >
                Community Guidelines
              </Link>
            </li>
            <li>
              <Link href="/delete-account" className="text-muted-foreground hover:text-foreground">
                Delete Account
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-3xl px-4 py-4 text-xs text-muted-foreground sm:px-6">
          Last updated {EFFECTIVE_DATE}. These documents reflect the current features and data
          practices of the {APP_NAME} application.
        </p>
      </div>
    </footer>
  )
}
