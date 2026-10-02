import Link from "next/link"
import Image from "next/image"
import { APP_NAME } from "@/lib/legal-content"

const navItems = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/child-safety", label: "Child Safety" },
  { href: "/terms", label: "Terms" },
  { href: "/community-guidelines", label: "Guidelines" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/besot-logo.png"
            alt={`${APP_NAME} logo`}
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg"
            priority
          />
          <span className="text-base font-semibold tracking-tight">{APP_NAME}</span>
          <span className="sr-only">Home</span>
        </Link>
        <nav aria-label="Legal documents">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
