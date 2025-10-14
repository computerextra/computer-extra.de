import { useEffect, useEffectEvent } from "react";

const MainTitle = "Computer Extra GmBh";

export default function useTitle(title?: string) {
  const namer = useEffectEvent(() => {
    if (title) {
      document.title = title + " - " + MainTitle;
    } else {
      document.title = MainTitle;
    }
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: useEffectEvent noch nicht in Biome
  useEffect(() => {
    namer();
  }, []);
}
