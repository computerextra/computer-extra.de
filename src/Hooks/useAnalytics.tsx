import { useEffect } from "react";

/**
 * Custom hook that tracks page views using Matomo analytics.
 *
 * @param {string} title - The title of the page being tracked.
 * @return {void} This hook does not return anything.
 */
export default function useAnalytics(title: string): void {
  if (title.length < 0) return;
  useEffect(() => {
    // @ts-expect-error Kommt von Matomo, das muss so sein.
    var _mtm = (window._mtm = window._mtm || []);
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
    (function () {
      var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.async = true;
      g.src = "https://matomo.computer-extra.de/js/container_XFaw2n5t.js";
      s.parentNode!.insertBefore(g, s);
    })();
  }, []);
}
