import useScrollSpy from "@/hooks/useScrollSpy"
import { CircleArrowUp } from "lucide-react"
import { Button } from "../ui/button"

export default function ScrollToTopButton() {
  const { isScrolled } = useScrollSpy()
  //   const isMobile = useIsMobile()

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth"
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    document.documentElement.style.scrollBehavior = "auto"
  }

  if (isScrolled)
    return (
      <Button
        type="button"
        size={"icon-lg"}
        onClick={backToTop}
        className="fixed right-12.5 bottom-12.5 z-1000"
      >
        <CircleArrowUp className="size-8" />
        <span className="sr-only">Zurück nach oben</span>
      </Button>
    )
}
