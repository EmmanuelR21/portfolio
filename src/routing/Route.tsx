import { useEffect, useState } from "react";

export default function Route({
  path,
  element,
}: {
  path: string;
  element: React.ReactElement;
}) {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname,
  );

  useEffect(() => {
    function changePath() {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener("popstate", changePath);

    return () => window.removeEventListener("popstate", changePath);
  });

  return currentPath === path ? <>{element}</> : null;
}
