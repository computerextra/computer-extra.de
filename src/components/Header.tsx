import { cn } from "@/lib/utils";
import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from "lucide-react";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

// TODO: Logo
const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 324 323"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...(props as any)}
    >
      <rect
        x="88.1023"
        y="144.792"
        width="151.802"
        height="36.5788"
        rx="18.2894"
        transform="rotate(-38.5799 88.1023 144.792)"
        fill="currentColor"
      />
      <rect
        x="85.3459"
        y="244.537"
        width="151.802"
        height="36.5788"
        rx="18.2894"
        transform="rotate(-38.5799 85.3459 244.537)"
        fill="currentColor"
      />
    </svg>
  );
};

const HamburgerIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn("pointer-events-none", className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...(props as any)}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center -translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
    />
  </svg>
);

export interface NavbarNavItem {
  href?: string;
  label: string;
  submenu?: boolean;
  type?: "description" | "simple" | "icon";
  items?: Array<{
    href: string;
    label: string;
    description?: string;
    icon?: string;
  }>;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: NavbarNavItem[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

// TODO: Links
const defaultNavigationLinks: NavbarNavItem[] = [
  { href: "/", label: "Startseite" },
  {
    label: "Leistungen",
    submenu: true,
    type: "simple",
    items: [
      {
        href: "#components",
        label: "Components",
      },
      {
        href: "#documentation",
        label: "Documentation",
      },
      {
        href: "#templates",
        label: "Templates",
      },
    ],
  },
  { label: "Partner", href: "/" },
  { label: "Team", href: "/" },
  {
    label: "Jobs",
    submenu: true,
    type: "simple",
    items: [
      {
        href: "/",
        label: "xyz",
      },
      {
        href: "/",
        label: "xyz2",
      },
      {
        href: "/",
        label: "xyz3",
      },
    ],
  },
  { label: "Termin", href: "/" },
];

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = "/",
      navigationLinks = defaultNavigationLinks,
      ...props
    },
    ref,
  ) => {
    const [isMobile, setIsMobile] = React.useState(false);
    const containerRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };
      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }
      return () => {
        resizeObserver.disconnect();
      };
    }, []);
    // Combine refs
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );
    const renderIcon = (iconName: string) => {
      switch (iconName) {
        case "BookOpenIcon":
          return (
            <BookOpenIcon
              size={16}
              className="text-foreground opacity-60"
              aria-hidden={true}
            />
          );
        case "LifeBuoyIcon":
          return (
            <LifeBuoyIcon
              size={16}
              className="text-foreground opacity-60"
              aria-hidden={true}
            />
          );
        case "InfoIcon":
          return (
            <InfoIcon
              size={16}
              className="text-foreground opacity-60"
              aria-hidden={true}
            />
          );
        default:
          return null;
      }
    };
    return (
      <header
        ref={combinedRef}
        className={cn(
          "bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b px-4 backdrop-blur **:no-underline md:px-6",
          className,
        )}
        {...(props as any)}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="group hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    variant="ghost"
                    size="icon"
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-64 p-1">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-0">
                      {navigationLinks.map((link, index) => (
                        <NavigationMenuItem key={index} className="w-full">
                          {link.submenu ? (
                            <>
                              <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
                                {link.label}
                              </div>
                              <ul>
                                {link.items?.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <button
                                      onClick={(e) => e.preventDefault()}
                                      className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors"
                                    >
                                      {item.label}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <button
                              onClick={(e) => e.preventDefault()}
                              className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors"
                            >
                              {link.label}
                            </button>
                          )}
                          {/* Add separator between different types of items */}
                          {index < navigationLinks.length - 1 &&
                            ((!link.submenu &&
                              navigationLinks[index + 1].submenu) ||
                              (link.submenu &&
                                !navigationLinks[index + 1].submenu) ||
                              (link.submenu &&
                                navigationLinks[index + 1].submenu &&
                                link.type !==
                                  navigationLinks[index + 1].type)) && (
                              <div
                                role="separator"
                                aria-orientation="horizontal"
                                className="bg-border -mx-1 my-1 h-px w-full"
                              />
                            )}
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}
            {/* Main nav */}
            <div className="flex items-center gap-6">
              <a href="/">
                <button className="text-primary hover:text-primary/90 flex cursor-pointer items-center space-x-2 transition-colors">
                  <div className="text-2xl">{logo}</div>
                  <span className="hidden text-xl font-bold sm:inline-block">
                    {/* TODO: FONT */}
                    Computer Extra
                  </span>
                </button>
              </a>
              {/* Navigation menu */}
              {!isMobile && (
                <NavigationMenu className="flex">
                  <NavigationMenuList className="gap-1">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index}>
                        {link.submenu ? (
                          <>
                            <NavigationMenuTrigger>
                              {link.label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              {link.type === "description" &&
                              link.label === "Features" ? (
                                <div className="grid gap-3 p-4 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
                                  <div className="row-span-3">
                                    <NavigationMenuLink asChild>
                                      <button
                                        onClick={(e) => e.preventDefault()}
                                        className="from-muted/50 to-muted flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-md bg-linear-to-b p-6 text-center no-underline outline-none select-none focus:shadow-md"
                                      >
                                        <div className="mb-3 text-xl font-medium">
                                          shadcn.io
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                          Beautifully designed components built
                                          with Radix UI and Tailwind CSS.
                                        </p>
                                      </button>
                                    </NavigationMenuLink>
                                  </div>
                                  {link.items?.map((item, itemIndex) => (
                                    <ListItem
                                      key={itemIndex}
                                      title={item.label}
                                      href={item.href}
                                      type={link.type}
                                    >
                                      {item.description}
                                    </ListItem>
                                  ))}
                                </div>
                              ) : link.type === "simple" ? (
                                <div className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">
                                  {link.items?.map((item, itemIndex) => (
                                    <ListItem
                                      key={itemIndex}
                                      title={item.label}
                                      href={item.href}
                                      type={link.type}
                                    >
                                      {item.description}
                                    </ListItem>
                                  ))}
                                </div>
                              ) : link.type === "icon" ? (
                                <div className="grid w-100 gap-3 p-4">
                                  {link.items?.map((item, itemIndex) => (
                                    <ListItem
                                      key={itemIndex}
                                      title={item.label}
                                      href={item.href}
                                      icon={item.icon}
                                      type={link.type}
                                    >
                                      {item.description}
                                    </ListItem>
                                  ))}
                                </div>
                              ) : (
                                <div className="grid gap-3 p-4">
                                  {link.items?.map((item, itemIndex) => (
                                    <ListItem
                                      key={itemIndex}
                                      title={item.label}
                                      href={item.href}
                                      type={link.type}
                                    >
                                      {item.description}
                                    </ListItem>
                                  ))}
                                </div>
                              )}
                            </NavigationMenuContent>
                          </>
                        ) : (
                          <NavigationMenuLink
                            href={link.href}
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "cursor-pointer",
                            )}
                            onClick={(e) => e.preventDefault()}
                          >
                            {link.label}
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              )}
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant={"default"}
              className="h-9 rounded-md px-4 text-sm font-medium shadow-sm"
              asChild
            >
              {/* TODO: LINK */}
              <a href="/">Fernwartung</a>
            </Button>
            <Button
              size="sm"
              variant={"secondary"}
              className="h-9 rounded-md px-4 text-sm font-medium shadow-sm"
              asChild
            >
              {/* TODO: LINK */}
              <a href="/">Kontakt</a>
            </Button>
          </div>
        </div>
      </header>
    );
  },
);

Navbar.displayName = "Navbar";

// ListItem component for navigation menu items
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    href?: string;
    icon?: string;
    type?: "description" | "simple" | "icon";
    children?: React.ReactNode;
  }
>(({ className, title, children, icon, type, ...props }, ref) => {
  const renderIconComponent = (iconName?: string) => {
    if (!iconName) return null;
    switch (iconName) {
      case "BookOpenIcon":
        return <BookOpenIcon className="h-5 w-5" />;
      case "LifeBuoyIcon":
        return <LifeBuoyIcon className="h-5 w-5" />;
      case "InfoIcon":
        return <InfoIcon className="h-5 w-5" />;
      default:
        return null;
    }
  };
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        onClick={(e) => e.preventDefault()}
        className={cn(
          "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block cursor-pointer space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
          className,
        )}
        {...(props as any)}
      >
        {type === "icon" && icon ? (
          <div className="flex items-start space-x-4">
            <div className="bg-muted flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
              {renderIconComponent(icon)}
            </div>
            <div className="space-y-1">
              <div className="text-base leading-tight font-medium">{title}</div>
              {children && (
                <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                  {children}
                </p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="text-base leading-none font-medium">{title}</div>
            {children && (
              <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {children}
              </p>
            )}
          </>
        )}
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";
export { Logo, HamburgerIcon };
