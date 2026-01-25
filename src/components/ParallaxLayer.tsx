import { CSSProperties, ReactNode } from "react";
import { useParallax } from "../../hooks/useParallax";

type ParallaxLayerProps = {
  children: ReactNode;
  speed?: number;
  axis?: "x" | "y";
  offset?: number;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function ParallaxLayer({
  children,
  speed,
  axis,
  offset,
  disabled,
  className,
  style,
}: ParallaxLayerProps) {
  const parallaxStyle = useParallax({ speed, axis, offset, disabled });

  return (
    <div
      className={className}
      style={{ ...style, ...parallaxStyle, willChange: "transform" }}
    >
      {children}
    </div>
  );
}

export default ParallaxLayer;
