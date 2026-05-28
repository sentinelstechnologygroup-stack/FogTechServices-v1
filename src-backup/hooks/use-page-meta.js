import { useEffect } from "react";

export default function usePageMeta(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content");
    let managedMetaDescription = metaDescription;

    document.title = title;

    if (description) {
      if (!managedMetaDescription) {
        managedMetaDescription = document.createElement("meta");
        managedMetaDescription.setAttribute("name", "description");
        document.head.appendChild(managedMetaDescription);
      }

      managedMetaDescription.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;
      if (managedMetaDescription && previousDescription) {
        managedMetaDescription.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
