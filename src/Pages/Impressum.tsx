import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"

const Impressum = () => {
  const [markdownContent, setMarkdownContent] = useState("")

  useEffect(() => {
    fetch("/Impressum.md")
      .then((res) => res.text())
      .then((text) => setMarkdownContent(text))
  }, [])

  return (
    <div className="container mx-auto mt-5">
      <title>Computer Extra GmbH | Impressum</title>
      <div className={"custom"}>
        <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default Impressum
