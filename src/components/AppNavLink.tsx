import type { AppTo } from "@/lib/routes"
import { NavLink, type NavLinkProps } from "react-router"

type AppNavLinkProps = Omit<NavLinkProps, "to"> & {
  to: AppTo
}

export default function AppNavLink({ to, ...props }: AppNavLinkProps) {
  return <NavLink to={to} {...props} />
}
