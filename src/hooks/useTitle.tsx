import { useEffect, useEffectEvent } from "react"

export default function useTitle(title: string | undefined) {
  const setTitle = useEffectEvent(() => {
    if (title) {
      document.title = "Computer Extra GmbH | " + title
    } else {
      document.title = "Computer Extra GmbH"
    }
  })

  useEffect(() => {
    setTitle()
  }, [])
}
