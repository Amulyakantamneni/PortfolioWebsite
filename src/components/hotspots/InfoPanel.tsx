type InfoPanelProps = {
  title: string;
  description: string;
  bullets?: string[];
};

export function InfoPanel({ title, description, bullets }: InfoPanelProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
      <h4 className="text-base font-semibold text-slate-900 dark:text-white">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default InfoPanel;
