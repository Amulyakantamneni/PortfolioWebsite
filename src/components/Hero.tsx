import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Rocket } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-16 flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -top-56 -left-56 h-[560px] w-[560px] rounded-full blur-3xl bg-gradient-to-r from-blue-400/20 to-indigo-400/20"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-56 -right-56 h-[560px] w-[560px] rounded-full blur-3xl bg-gradient-to-r from-purple-400/15 to-pink-400/15"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a10_1px,transparent_1px),linear-gradient(to_bottom,#0f172a10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white/80 dark:from-black/10 dark:via-black/30 dark:to-black/60" />
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
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur-md">
              <Sparkles className="text-blue-600" size={18} />
              <span className="text-sm font-medium text-slate-700">
                Open to AI/ML Engineer opportunities
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600"
          >
            AI / ML Engineer • LLM Apps • RAG • Production ML
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl lg:text-8xl"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Amulya Kantamneni
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mb-6 max-w-4xl text-xl font-medium leading-snug text-slate-600 sm:text-3xl"
          >
            Building{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text font-bold text-transparent">
                intelligent systems
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-0 left-0 -z-10 h-3 bg-gradient-to-r from-blue-400/20 to-indigo-400/20"
              />
            </span>{" "}
            that ship to production.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg"
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
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white/80 px-7 py-3.5 font-semibold text-slate-700 shadow-sm backdrop-blur-md transition hover:border-blue-300 hover:bg-white"
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
              className="rounded-xl border-2 border-slate-200 bg-white/80 p-3 text-slate-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-600"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/amulya-kantamneni-6201543a5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border-2 border-slate-200 bg-white/80 p-3 text-slate-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-600"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:amulya.kantamneni@gmail.com"
              aria-label="Email"
              className="rounded-xl border-2 border-slate-200 bg-white/80 p-3 text-slate-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-600"
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
              <span className="text-sm font-medium text-slate-500">Scroll</span>
              <ArrowDown className="text-blue-600" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
