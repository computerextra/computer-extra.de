import { useEffect, useEffectEvent, useState } from "react";
import { useLocation } from "react-router";

export default function useScrollSpy(): { isScrolled: boolean } {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  const handleScroll = useEffectEvent(() => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: UseEffectEvent ist noch nicht in Biome
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathname == null) return;
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.documentElement.style.scrollBehavior = "auto";
  }, [pathname]);

  return { isScrolled };
}
