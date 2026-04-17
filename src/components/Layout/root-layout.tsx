import { Outlet } from "react-router"
import { Footer } from "../Footer"
import ScrollToTopButton from "../misc/ScrollToTopButton"
import { Navigation } from "../Navigation"

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Navigation />
      </header>
      <main className="container mx-auto grow">
        <Outlet />
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  )
}
