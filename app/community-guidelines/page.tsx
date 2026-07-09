import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LegalDocument } from "@/components/legal-document"
import { communityGuidelines, APP_NAME } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: `Community Guidelines | ${APP_NAME}`,
  description: communityGuidelines.summary,
}

export default function CommunityGuidelinesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <LegalDocument doc={communityGuidelines} />
      </main>
      <SiteFooter />
    </div>
  )
}
