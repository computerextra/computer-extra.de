import { Outlet } from "react-router"
import AnimatedText from "./components/misc/AnimatedText"
import ScrollToTopButton from "./components/misc/ScrollToTopButton"

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-red-500">404</header>
      <main className="container mx-auto grow">
        <Outlet />
        <ScrollToTopButton />
      </main>
      <footer className="bg-green-500">404</footer>
    </div>
  )
}

export function StartLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-red-500">header</header>
      <main className="container mx-auto grow">
        <AnimatedText />
        <Outlet />
        <ScrollToTopButton />
      </main>
      <footer className="bg-green-500">Footer</footer>
    </div>
  )
}
