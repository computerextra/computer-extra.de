import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"
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
    <div className={"container mx-auto"}>
      <title>Computer Extra GmbH | Datenschutz</title>
      <div className={"custom"}>
        <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default Datenschutz
