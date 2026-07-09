import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LegalDocument } from "@/components/legal-document"
import { termsOfService, APP_NAME } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: `Terms of Service | ${APP_NAME}`,
  description: termsOfService.summary,
}

export default function TermsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <LegalDocument doc={termsOfService} />
      </main>
      <SiteFooter />
    </div>
  )
}
