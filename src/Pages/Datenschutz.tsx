import { Button } from "@/components/ui/button.tsx"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { NavLink } from "react-router"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"

const Datenschutz = () => {
  const [markdownContent, setMarkdownContent] = useState("")

  useEffect(() => {
    fetch("/Datenschutz.md")
      .then((res) => res.text())
      .then((text) => setMarkdownContent(text))
  }, [])

  return (
    <div className={"container mx-auto mt-5"}>
      <title>Computer Extra GmbH | Datenschutz</title>
      <Button asChild variant={"default"} size={"xl"} className={"my-5"}>
        <NavLink to={"/Auftragsdaten"}>
          Auftragsdatenverarbeitungsvertrag
        </NavLink>
      </Button>
      <div className={"custom"}>
        <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default Datenschutz
