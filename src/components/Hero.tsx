import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Rocket } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background with Grid */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl -top-48 -left-48"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl -bottom-48 -right-48"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-blue-300/30 rounded-xl backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-20 h-20 border-2 border-purple-300/30 rounded-full backdrop-blur-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md border border-blue-200 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Sparkles className="text-blue-600" size={18} />
              <span className="text-sm text-slate-700 font-medium">Open to New Opportunities</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-blue-600 mb-4 tracking-wide uppercase text-sm font-semibold">AI/ML Engineer</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl text-slate-900 mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent font-bold">
              Amulya Kantamneni
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl sm:text-4xl lg:text-5xl text-slate-600 mb-6 tracking-tight"
          >
            Building{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">
                intelligent systems
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-1 left-0 h-3 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 -z-10"
              />
            </span>
            {' '}that matter
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Specializing in <span className="text-slate-900 font-semibold">LLM-powered applications</span>, <span className="text-slate-900 font-semibold">RAG systems</span>, and <span className="text-slate-900 font-semibold">production ML</span> — turning AI research into scalable, impactful products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 font-semibold flex items-center gap-2"
            >
              <Rocket size={20} />
              <span>View My Work</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/90 backdrop-blur-sm text-slate-700 rounded-xl hover:bg-white border-2 border-slate-200 hover:border-blue-300 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              Let's Connect
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <a
              href="https://github.com/Amulyakantamneni"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all border-2 border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/amulyachk"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all border-2 border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:amulya.kantamneni@gmail.com"
              className="group p-4 rounded-xl bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all border-2 border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-slate-500 text-sm font-medium">Scroll to explore</span>
              <ArrowDown className="text-blue-600" size={28} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}