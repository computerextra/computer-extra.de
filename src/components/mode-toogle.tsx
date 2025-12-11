import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";
import { NeumorphButton } from "./ui/cuilt-ui/neumorph-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <NeumorphButton size="small">
          <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />
          <Moon className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
          <span className="sr-only">Theme umschalten</span>
        </NeumorphButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Hell
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dunkel
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
