import { useEffect } from "react";
import { MAIN_TITLE } from "../config";

/**
 * Custom hook to update the document title.
 *
 * @param {string} title - The new title for the document
 */
export default function useTitle(title?: string) {
  useEffect(() => {
    if (title) {
      document.title = title + " - " + MAIN_TITLE;
    } else {
      document.title = MAIN_TITLE;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
