import type { AppHref } from "@/lib/routes"
import { NavLink, type NavLinkProps } from "react-router"

type AppNavLinkProps = Omit<NavLinkProps, "to"> & {
  to: AppHref
}

export default function AppNavLink({ to, ...props }: AppNavLinkProps) {
  return <NavLink to={to} {...props} />
}
