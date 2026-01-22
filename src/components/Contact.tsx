import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!ACCESS_KEY) {
      console.error(
        "Missing VITE_WEB3FORMS_KEY. Add it in Vercel env vars and redeploy.",
      );
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New message from amulyakantamneni.com",
          from_name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data?.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative bg-white/60 dark:bg-slate-950/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Get In Touch<span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            I&apos;m always open to meaningful conversations about AI, product
            ideas, collaboration, or new opportunities.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT SIDE: buttons/cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Email card */}
            <motion.a
              href="mailto:amulya.kantamneni@gmail.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="block bg-white rounded-2xl border border-slate-200 shadow-lg p-6 hover:shadow-xl transition-all dark:bg-slate-900 dark:border-slate-800"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md dark:from-blue-500 dark:to-indigo-500">
                  <Mail className="text-white" size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-slate-900 font-semibold dark:text-white">Email Me</div>
                  <div className="text-slate-600 text-sm truncate dark:text-slate-300">
                    amulya.kantamneni@gmail.com
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Connect Online card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 dark:bg-slate-900 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md dark:from-blue-500 dark:to-indigo-500">
                  <MessageSquare className="text-white" size={20} />
                </div>

                <div className="flex-1">
                  <div className="text-slate-900 font-semibold dark:text-white">
                    Connect Online
                  </div>

                  <div className="mt-3 space-y-3">
                    <motion.a
                      href="https://www.linkedin.com/in/amulya-kantamneni-6201543a5"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-slate-700 hover:text-blue-700 transition-colors dark:text-slate-200 dark:hover:text-blue-400"
                    >
                      <span className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center dark:bg-blue-500/10">
                        <Linkedin size={16} className="text-blue-600 dark:text-blue-400" />
                      </span>
                      <span className="text-sm font-medium">LinkedIn</span>
                    </motion.a>

                    <motion.a
                      href="https://github.com/Amulyakantamneni"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-colors dark:text-slate-200 dark:hover:text-white"
                    >
                      <span className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center dark:bg-slate-800">
                        <Github size={16} className="text-slate-800 dark:text-slate-200" />
                      </span>
                      <span className="text-sm font-medium">GitHub</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 dark:bg-slate-900 dark:border-slate-800"
          >
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 dark:text-slate-200">
                  Your Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/40 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-blue-400/30"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 dark:text-slate-200">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/40 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-blue-400/30"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 dark:text-slate-200">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={6}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/40 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-blue-400/30"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all disabled:opacity-60 dark:from-blue-500 dark:to-indigo-500"
              >
                {status === "sending" ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    <span>Sending...</span>
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="text-sm text-green-600 dark:text-green-400"
                  >
                    Message sent!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="text-sm text-red-600 dark:text-red-400"
                  >
                    Failed to send. Please try again or email me directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
