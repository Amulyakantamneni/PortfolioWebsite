import { useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Rocket } from "lucide-react";
import ParallaxLayer from "./parallax/ParallaxLayer";
import { Hotspot, Modal, InfoPanel } from "./hotspots";
import { Scene3D, PlaceholderGeometry, ClickZone3D, Overlay3D } from "./three";

export function Hero() {
  type HotspotData = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    bullets: string[];
  };

  const [activeHotspot, setActiveHotspot] = useState<HotspotData | null>(null);

  const taglineWords = [
    { text: "Building" },
    { text: "intelligent", highlight: true },
    { text: "systems", highlight: true },
    { text: "that" },
    { text: "ship" },
    { text: "to" },
    { text: "production." },
  ];

  const heroHotspots: HotspotData[] = [
    {
      id: "rag",
      title: "RAG Stack",
      subtitle: "Vector search + evals",
      description:
        "Production retrieval pipelines with embeddings, reranking, and continuous evaluation.",
      bullets: [
        "Hybrid retrieval + reranking",
        "Automated evals + monitoring",
        "Latency-aware orchestration",
      ],
    },
    {
      id: "agents",
      title: "Agentic Workflows",
      subtitle: "Tooling + guardrails",
      description:
        "Multi-step reasoning pipelines that stay aligned, safe, and observable.",
      bullets: [
        "Tool calling + memory",
        "Structured outputs",
        "Human-in-the-loop checks",
      ],
    },
    {
      id: "infra",
      title: "Production ML",
      subtitle: "MLOps + deployment",
      description:
        "End-to-end delivery with fast APIs, CI/CD, and scalable inference.",
      bullets: ["Containerized services", "A/B experiments", "Cost-aware scaling"],
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-16 flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <ParallaxLayer speed={0.08} className="absolute -top-56 -left-56">
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="h-[560px] w-[560px] rounded-full blur-3xl bg-gradient-to-r from-blue-400/20 to-indigo-400/20 dark:from-blue-500/25 dark:to-indigo-500/25"
          />
        </ParallaxLayer>
        <ParallaxLayer speed={-0.06} className="absolute -bottom-56 -right-56">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="h-[560px] w-[560px] rounded-full blur-3xl bg-gradient-to-r from-purple-400/15 to-pink-400/15 dark:from-fuchsia-500/20 dark:to-rose-500/20"
          />
        </ParallaxLayer>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a10_1px,transparent_1px),linear-gradient(to_bottom,#0f172a10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] dark:opacity-25" />

        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white/80 dark:from-black/10 dark:via-black/30 dark:to-black/60" />
      </div>

      {/* Parallax 3D + Hotspots */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <ParallaxLayer
          speed={0.12}
          className="absolute right-10 top-1/2 -translate-y-1/2"
        >
          <div className="relative h-[340px] w-[340px] rounded-[32px] border border-white/30 bg-white/10 shadow-[0_30px_80px_-30px_rgba(59,130,246,0.5)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40">
            <Scene3D className="h-full w-full rounded-[32px]">
              <PlaceholderGeometry color="#93c5fd" />
              <ClickZone3D onSelect={() => setActiveHotspot(heroHotspots[0])} />
              <Overlay3D position={[0, -1.8, 0]}>
                <div className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-md">
                  Live 3D Demo
                </div>
              </Overlay3D>
            </Scene3D>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.05} className="absolute left-12 bottom-20">
          <InfoPanel
            title="Intelligent Systems"
            description="Full-stack AI engineering with product velocity and measurable impact."
            bullets={[
              "LLM apps + eval pipelines",
              "Fast inference + deployment",
              "Design for reliability",
            ]}
          />
        </ParallaxLayer>

        <div className="absolute inset-0">
          {heroHotspots.map((spot) => (
            <Hotspot
              key={spot.id}
              x={spot.id === "rag" ? 78 : spot.id === "agents" ? 64 : 70}
              y={spot.id === "rag" ? 28 : spot.id === "agents" ? 62 : 44}
              title={spot.title}
              subtitle={spot.subtitle}
              tone={spot.id === "rag" ? "blue" : spot.id === "agents" ? "violet" : "emerald"}
              onOpen={() => setActiveHotspot(spot)}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70">
              <Sparkles className="text-blue-600 dark:text-blue-400" size={18} />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Open to AI/ML Engineer opportunities
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400"
          >
            AI / ML Engineer • LLM Apps • RAG • Production ML
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl lg:text-8xl dark:text-white"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-slate-100">
              Amulya Kantamneni
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mb-6 max-w-4xl text-xl font-medium leading-snug text-slate-600 sm:text-3xl dark:text-slate-200"
          >
            <motion.span
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                },
              }}
            >
              {taglineWords.map((word, index) => (
                <motion.span
                  key={`${word.text}-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="inline-block"
                >
                  {word.highlight ? (
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text font-bold text-transparent dark:from-blue-400 dark:to-indigo-300">
                        {word.text}
                      </span>
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="absolute bottom-0 left-0 -z-10 h-2 w-full origin-left bg-gradient-to-r from-blue-400/25 to-indigo-400/25 dark:from-blue-400/20 dark:to-indigo-300/20"
                      />
                    </span>
                  ) : (
                    word.text
                  )}
                  {index < taglineWords.length - 1 ? " " : ""}
                </motion.span>
              ))}
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
          >
            I build LLM-powered products end-to-end—retrieval & evaluation, backend APIs, and reliable deployments—
            focused on measurable impact and clean engineering.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition"
            >
              <Rocket size={18} />
              <span>View Projects</span>
              <motion.span
                aria-hidden="true"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="ml-1"
              >
                →
              </motion.span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white/80 px-7 py-3.5 font-semibold text-slate-700 shadow-sm backdrop-blur-md transition hover:border-blue-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-blue-500/60 dark:hover:bg-slate-900"
            >
              Let&apos;s Connect
            </motion.button>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10 flex items-center justify-center gap-3"
          >
            <a
              href="https://github.com/Amulyakantamneni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-xl border-2 border-slate-200 bg-white/80 p-3 text-slate-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-blue-500/60 dark:hover:bg-slate-900 dark:hover:text-blue-400"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/amulya-kantamneni-6201543a5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border-2 border-slate-200 bg-white/80 p-3 text-slate-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-blue-500/60 dark:hover:bg-slate-900 dark:hover:text-blue-400"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:amulya.kantamneni@gmail.com"
              aria-label="Email"
              className="rounded-xl border-2 border-slate-200 bg-white/80 p-3 text-slate-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-blue-500/60 dark:hover:bg-slate-900 dark:hover:text-blue-400"
            >
              <Mail size={22} />
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Scroll</span>
              <ArrowDown className="text-blue-600 dark:text-blue-400" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Modal
        isOpen={Boolean(activeHotspot)}
        title={activeHotspot?.title ?? ""}
        onClose={() => setActiveHotspot(null)}
      >
        {activeHotspot && (
          <div className="space-y-4">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {activeHotspot.description}
            </p>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {activeHotspot.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default Hero;
