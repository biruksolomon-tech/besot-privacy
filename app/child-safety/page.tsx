import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LegalDocument } from "@/components/legal-document"
import { childSafetyPolicy, APP_NAME } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: `Child Safety Standards | ${APP_NAME}`,
  description: childSafetyPolicy.summary,
}

export default function ChildSafetyPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <LegalDocument doc={childSafetyPolicy} />
      </main>
      <SiteFooter />
    </div>
  )
}
