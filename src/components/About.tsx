'use client';

import { motion } from 'motion/react';
import { Brain, Code2, Rocket, Users } from 'lucide-react';

export function About() {
  const interests = [
    {
      icon: Brain,
      title: 'Applied AI & ML',
      description:
        'Passionate about building practical AI systems — from LLM-powered tools to intelligent data-driven products that create real impact.',
    },
    {
      icon: Code2,
      title: 'Engineering',
      description:
        'I value clean architecture, performance, and writing maintainable code that scales beyond demos and prototypes.',
    },
    {
      icon: Rocket,
      title: 'Product Thinking',
      description:
        'I enjoy turning ideas into polished products by balancing user experience, system design, and business goals.',
    },
    {
      icon: Users,
      title: 'Collaboration & Growth',
      description:
        'I thrive in collaborative environments, enjoy knowledge sharing, and believe great products are built by strong teams.',
    },
  ];

  const skills = [
    'Python • Machine Learning • NLP',
    'LLMs • RAG • Prompt Engineering',
    'PyTorch • Hugging Face • LangChain',
    'FastAPI • REST APIs',
    'React • Next.js • Tailwind CSS',
    'AWS • Docker • CI/CD',
    'PostgreSQL • Vector Databases',
    'Git • System Design',
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl sm:text-5xl text-slate-900">
              About Me<span className="text-blue-600">.</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-600/50 to-transparent" />
          </div>
          <p className="text-xl text-slate-600 max-w-3xl">
            Building intelligent systems that solve real problems
          </p>
        </motion.div>

        {/* Bio + Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50/50 border border-blue-100 shadow-xl">
              <p className="text-slate-700 mb-4 leading-relaxed text-lg">
                Hi, I'm <span className="text-blue-600 font-semibold">Amulya</span> — an AI/ML engineer who
                enjoys building intelligent systems that feel thoughtful, reliable, and human-centered.
                I'm especially interested in applying machine learning and large language models to
                solve real-world problems.
              </p>

              <p className="text-slate-700 mb-4 leading-relaxed">
                My work spans <span className="text-slate-900 font-medium">LLM-powered applications</span>, data-driven
                systems, and full-stack AI products — from concept and architecture to deployment.
                I care deeply about clarity, usability, and designing systems that are production-ready,
                not just proof-of-concepts.
              </p>

              <p className="text-slate-700 leading-relaxed">
                I'm constantly learning, experimenting, and refining my skills — whether that's
                improving model reliability, optimizing performance, or crafting clean interfaces.
                Outside of coding, I enjoy exploring how technology can be more ethical, empathetic,
                and purposeful.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="sticky top-24 p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl">
              <h3 className="text-xl mb-6 font-semibold">
                Tech Stack
              </h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3 text-white/90 text-sm bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-colors"
                  >
                    <span className="text-blue-200 mt-0.5">●</span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl text-slate-900 mb-8">What Drives Me</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <interest.icon size={24} />
                  </div>
                  <h3 className="text-lg text-slate-900 mb-2 font-semibold">{interest.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
