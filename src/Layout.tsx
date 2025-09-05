import { ChevronUpCircle } from "lucide-react";
import { Outlet } from "react-router";
import Navigation from "./components/Navigation";
import { Button } from "./components/ui/button";
import useScrollSpy from "./Hooks/useScrollSpy";

export default function Layout() {
  return (
    <div>
      <Navigation />
      <div className="text-slate-900">
        <Outlet />
      </div>
      <ScrollToTop />
    </div>
  );
}

function ScrollToTop() {
  const { isScrolled } = useScrollSpy();

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.documentElement.style.scrollBehavior = "auto";
  };

  if (isScrolled)
    return (
      <>
        {/* Desktop Btn */}
        <div className="fixed hidden right-5 bottom-5 lg:block">
          <Button
            variant="default"
            size="icon"
            className="size-10"
            onClick={backToTop}
          >
            <ChevronUpCircle />
          </Button>
        </div>

        {/* Mobile */}
        <div className="fixed left-[50%] bottom-5 lg:hidden translate-x-[-50%]">
          <Button
            variant="default"
            size="default"
            className="py-5"
            onClick={backToTop}
          >
            <div className="flex flex-col items-center justify-center">
              <ChevronUpCircle />
              Nach Oben
            </div>
          </Button>
        </div>
      </>
    );
}
