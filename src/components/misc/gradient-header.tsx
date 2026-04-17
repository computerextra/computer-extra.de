import { cn } from "@/lib/utils.ts"

interface Props {
  from?: string
  to?: string
  fontSize?: string
  padding?: string
  className?: string
  children: React.ReactNode
}

export const GradientHeader = ({
  from = "from-blue-900",
  to = "to-blue-500",
  fontSize = "text-4xl",
  padding = "pb-10",
  className,
  children,
}: Props) => {
  return (
    <h2
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
    </h2>
  )
}
