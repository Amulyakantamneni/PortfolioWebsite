import { useState } from "react";
import Tooltip from "./Tooltip";

type HotspotProps = {
  x: number;
  y: number;
  title: string;
  subtitle?: string;
  tone?: "blue" | "violet" | "emerald";
  onOpen?: () => void;
};

const toneClasses: Record<NonNullable<HotspotProps["tone"]>, string> = {
  blue: "from-blue-500 to-indigo-500 shadow-blue-500/40",
  violet: "from-purple-500 to-pink-500 shadow-purple-500/40",
  emerald: "from-emerald-500 to-teal-500 shadow-emerald-500/40",
};

export function Hotspot({
  x,
  y,
  title,
  subtitle,
  tone = "blue",
  onOpen,
}: HotspotProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <button
      type="button"
      aria-label={title}
      onClick={onOpen}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-white/40 blur-xl dark:bg-slate-900/40" />
      <span
        className={`relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r ${toneClasses[tone]} text-white shadow-lg`}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-white" />
        <span className="absolute inset-0 rounded-full border border-white/40" />
        <span className="absolute inset-0 animate-ping rounded-full border border-white/30" />
      </span>
      {isHovering && <Tooltip title={title} subtitle={subtitle} />}
    </button>
  );
}

export default Hotspot;
