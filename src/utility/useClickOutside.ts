import { useEffect, useRef } from "react";

const useClickOutside = (handler: () => void) => {
  const domNode = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
};

export { useClickOutside };
export default useClickOutside;

