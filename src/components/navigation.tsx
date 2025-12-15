import { MenuIcon } from "lucide-react";
import { NavLink } from "react-router";
import { ModeToggle } from "./mode-toogle";
import { NeumorphButton } from "./ui/cuilt-ui/neumorph-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type NavigationItem = {
  title: string;
  href: string;
}[];

const Navbar = ({ navigationData }: { navigationData: NavigationItem }) => {
  const firstHalf = navigationData.slice(0, navigationData.length / 2);
  const secondHalf = navigationData.slice(
    navigationData.length / 2,
    navigationData.length
  );

  return (
    <header className="">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6">
        <div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16">
          {firstHalf.map((item, idx) => {
            if (item.href.includes("#")) {
              return (
                <a
                  href={item.href}
                  key={idx}
                  className="hover:text-primary max-md:hidden"
                >
                  {item.title}
                </a>
              );
            } else {
              return (
                <NavLink
                  to={item.href}
                  key={idx}
                  className="hover:text-primary max-md:hidden"
                >
                  {item.title}
                </NavLink>
              );
            }
          })}

          <NavLink to="/" className="font-bold font-envision text-xl">
            CE
          </NavLink>
          {secondHalf.map((item, idx) => {
            if (item.href.includes("#")) {
              return (
                <a
                  href={item.href}
                  key={idx}
                  className="hover:text-primary max-md:hidden"
                >
                  {item.title}
                </a>
              );
            } else {
              return (
                <NavLink
                  to={item.href}
                  key={idx}
                  className="hover:text-primary max-md:hidden"
                >
                  {item.title}
                </NavLink>
              );
            }
          })}
        </div>

        <div className="flex items-center gap-6">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden" asChild>
              <NeumorphButton size="small">
                <MenuIcon />
                <span className="sr-only">Menu</span>
              </NeumorphButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    {item.href.includes("#") ? (
                      <a href={item.href}>{item.title}</a>
                    ) : (
                      <NavLink viewTransition to={item.href}>
                        {item.title}
                      </NavLink>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
