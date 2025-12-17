"use client"

import { useSidebar } from "@/contexts/sidebar-context"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function MainContent({ children }: { children: ReactNode }) {
  const { isCollapsed } = useSidebar()

  return (
    <main
      className={cn(
        "pb-24 min-h-screen transition-all duration-300",
        isCollapsed ? "ml-20" : "ml-64"
      )}
    >
      {children}
    </main>
  )
}
