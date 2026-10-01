import { cn } from "@/lib/utils.ts"
import type { ReactNode } from "react"

interface Props {
  as?: "h2" | "h3" | "h4"
  from?: string
  to?: string
  fontSize?: string
  padding?: string
  className?: string
  children: ReactNode
}

export const GradientHeader = ({
  as: Component = "h2",
  from = "from-blue-900",
  to = "to-blue-500",
  fontSize = "text-4xl",
  padding = "pb-10",
  className,
  children,
}: Props) => {
  return (
    <Component
      className={cn(
        fontSize,
        "font-bold",
        padding,
        "bg-linear-to-br bg-clip-text hyphens-manual text-transparent",
        from,
        to,
        className
      )}
    >
      {children}
    </Component>
  )
}
