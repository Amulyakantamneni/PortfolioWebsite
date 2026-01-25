import { useEffect, useMemo, useState } from "react";

type ParallaxOptions = {
  speed?: number;
  axis?: "x" | "y";
  offset?: number;
  disabled?: boolean;
};

export function useParallax({
  speed = 0.15,
  axis = "y",
  offset = 0,
  disabled = false,
}: ParallaxOptions = {}) {
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    if (disabled) {
      setTranslate(0);
      return;
    }

    let rafId = 0;

    const update = () => {
      const distance = window.scrollY * speed + offset;
      setTranslate(distance);
      rafId = 0;
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [axis, disabled, offset, speed]);

  const style = useMemo(() => {
    const value = `${translate.toFixed(2)}px`;
    return axis === "x"
      ? { transform: `translate3d(${value}, 0, 0)` }
      : { transform: `translate3d(0, ${value}, 0)` };
  }, [axis, translate]);

  return style;
}
