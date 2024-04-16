import { useEffect, useState } from "react";

interface Options {
  rootMargin: string;
  threshold: number;
}

const useInterSection = (selector: string, options: Options) => {
  const [visible, setVisible] = useState(false);
  const callback: IntersectionObserverCallback = (entries) => {
    const isVisible = entries.some((el) => el.isIntersecting);
    setVisible(isVisible);
  };
  useEffect(() => {
    const target = document.querySelector(selector);
    const observer = new IntersectionObserver(callback, { ...options });
    target && observer.observe(target);
    return () => {
      observer.disconnect();
    };
  }, [selector, options]);
  return visible;
};

export { useInterSection };
