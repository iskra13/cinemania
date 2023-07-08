import { useEffect, useRef } from "react";

const options: IntersectionObserverInit = {
  root: document,
  rootMargin: "0px",
  threshold: 0.1,
};

export const useIntersectionObserver = (cb: () => void) => {
  function callback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach((entrie) => {
      if (entrie.isIntersecting) {
        cb();
        observer.unobserve(entrie.target);
      }
    });
  }

  const observer = useRef<IntersectionObserver>(new IntersectionObserver(callback, options));

  useEffect(() => {
    const observeCurrent = observer.current;
    return () => {
      observeCurrent.disconnect();
    };
  }, []);

  return observer.current;
};
