import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty.tsx"
import { Spinner } from "@/components/ui/spinner.tsx"

export const LoadingSpinner = () => {
  return (
    <Empty className="w-full">
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
