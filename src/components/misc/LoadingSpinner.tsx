import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty.tsx"
import { Spinner } from "@/components/ui/spinner.tsx"
import { cn } from "@/lib/utils"

type LoadingSpinnerProps = {
  className?: string
}

export const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <Empty className={cn("w-full", className)}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>Lade Daten</EmptyTitle>
        <EmptyDescription>
          Bitte warten Sie, während die Daten geladen werden.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
