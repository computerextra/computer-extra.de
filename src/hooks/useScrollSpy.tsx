import { useEffect, useState } from "react";

export default function useScrollSpy(): { isScrolled: boolean } {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolled };
}
