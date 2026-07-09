import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LegalDocument } from "@/components/legal-document"
import { privacyPolicy, APP_NAME } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: `Privacy Policy | ${APP_NAME}`,
  description: privacyPolicy.summary,
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <LegalDocument doc={privacyPolicy} />
      </main>
      <SiteFooter />
    </div>
  )
}
