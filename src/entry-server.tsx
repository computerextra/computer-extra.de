import AppRoutes from "@/AppRoutes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { prerender } from "react-dom/static"
import { StaticRouter } from "react-router"

export async function render(url: string): Promise<string> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  const { prelude } = await prerender(
    <QueryClientProvider client={queryClient}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </QueryClientProvider>
  )

  return readStream(prelude)
}

async function readStream(stream: ReadableStream<Uint8Array>): Promise<string> {
  const reader = stream.getReader()
  const decoder = new TextDecoder()
  let html = ""

  while (true) {
    const { done, value } = await reader.read()

    if (done) break

    html += decoder.decode(value, {
      stream: true,
    })
  }

  html += decoder.decode()

  return html
}
