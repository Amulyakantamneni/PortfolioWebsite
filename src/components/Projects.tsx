'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Folder, X, Sparkles } from 'lucide-react';
import ParallaxLayer from './parallax/ParallaxLayer';
import { Hotspot, Modal, InfoPanel } from './hotspots';
import { Scene3D, PlaceholderGeometry, ClickZone3D, Overlay3D } from './three';

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image: string;
  featured?: boolean;
  details: {
    problem: string;
    solution: string;
    features: string[];
    learnings: string;
  };
};

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeSpot, setActiveSpot] = useState<{
    title: string;
    description: string;
    bullets: string[];
  } | null>(null);

  const projects: Project[] = [
    // ✅ NEW PROJECT — added first
    {
      title: 'AI CodeAssistant — Debug, Refactor & Optimize',
      description:
        'An end-to-end AI coding copilot that acts like a senior engineer on-demand: it diagnoses issues, explains root causes, generates clean fixes, and refactors code for performance, maintainability, and production readiness.',
      tags: ['Next.js', 'FastAPI', 'LLMs', 'Streaming', 'Code Intelligence'],
      github: 'https://github.com/Amulyakantamneni/CodeAssistant',
      demo: 'https://www.ai-codeassistant.com',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1080&q=80',
      featured: true,
      details: {
        problem:
          'Engineering teams lose significant time to debugging, code review churn, and repetitive refactoring. Existing copilots often stop at “suggestions” and don’t consistently provide grounded, production-quality fixes—especially across larger codebases and real-world edge cases.',
        solution:
          'Built an AI coding assistant that goes beyond autocomplete. It provides structured diagnostics, proposes safe and testable changes, and produces recruiter-grade explanations a senior engineer would give—helping engineers ship faster while improving code quality and reliability.',
        features: [
          'Multi-mode workflows: Debugger, Refactorizer, Optimizer, and Best-Practices reviewer',
          'Root-cause explanations + actionable fixes with clear reasoning',
          'Production-style refactors: readability, modularity, error handling, and performance improvements',
          'Streaming responses for fast interactive iteration (copilot-like experience)',
          'Developer-friendly UX: clean interface, quick actions, and copy-ready outputs',
          'Designed for real-world code: focuses on clarity, maintainability, and “ship-ready” changes',
        ],
        learnings:
          'Learned how to build a product-grade developer tool: designing fast feedback loops, creating structured outputs that engineers trust, and optimizing for “time-to-fix” and code quality—exactly the outcomes high-performing teams care about.',
      },
    },

    // Existing projects
    {
      title: 'AI Multi-format Writer',
      description:
        'Production-ready AI writing platform supporting multiple formats with fast, human-like responses and intelligent content generation.',
      tags: ['Next.js', 'LLMs', 'LangChain', 'FastAPI', 'TypeScript'],
      github: 'https://github.com/Amulyakantamneni/AI-Multiformat-Writer',
      demo: 'https://aiwritingagent.app',
      image:
        'https://images.unsplash.com/photo-1700451761308-ec56f93c82be?auto=format&fit=crop&w=1080&q=80',
      featured: true,
      details: {
        problem:
          'Existing AI writing tools are slow, generic, and lack contextual awareness. Users need a fast, intelligent writing assistant that understands different content formats.',
        solution:
          'Built a multi-format AI writer optimized for response quality, speed, and usability. Implemented streaming responses and format-specific prompt engineering for superior results.',
        features: [
          'Multi-format content generation (blogs, emails, social posts, technical docs)',
          'Streaming AI responses for real-time feedback',
          'Clean and distraction-free UI with dark mode',
          'Production-grade LangChain integration with custom chains',
          'Format-aware prompt engineering for context-optimized outputs',
          'FastAPI backend with async processing',
        ],
        learnings:
          'Gained deep experience optimizing LLM latency, implementing streaming architectures, and improving human-like outputs through advanced prompt engineering techniques.',
      },
    },
    {
      title: 'Emotional Wellness Companion — Your AI BFF',
      description:
        'AI-powered mental wellness companion designed to provide emotional support through a calming, human-first experience.',
      tags: ['Next.js', 'React', 'Tailwind', 'UX Design'],
      github: 'https://github.com/Amulyakantamneni/Connect-Mate--Mental-Wellness-Companion',
      demo: 'https://connect-mate-mental-wellness-compan.vercel.app',
      image:
        'https://images.unsplash.com/photo-1595623654300-b27329804025?auto=format&fit=crop&w=1080&q=80',
      featured: true,
      details: {
        problem:
          'Many mental health apps feel clinical and intimidating, reducing long-term user engagement. Users need accessible, judgment-free emotional support.',
        solution:
          'Designed a gentle, empathy-driven interface that lowers emotional barriers and feels supportive rather than diagnostic. Built with accessibility and psychological safety as core principles.',
        features: [
          'Calming UI with empathy-driven design and soothing color palette',
          'Mobile-first responsive layout for accessibility anywhere',
          'Human-like conversational flow with gentle language patterns',
          'Production deployment with performance optimization',
          'Privacy-first architecture with no data persistence',
        ],
        learnings:
          'Learned to design technology with emotional safety, accessibility, and psychology in mind. Gained deep insights into UX design for sensitive applications and the importance of human-centered AI.',
      },
    },
  ];

  const projectHotspots = [
    {
      id: 'stack',
      title: 'Full-stack AI Apps',
      description: 'Shipping products with clean UX, fast APIs, and observable backends.',
      bullets: ['Next.js + React UI', 'FastAPI services', 'Metrics-driven iteration'],
      x: 25,
      y: 35,
      tone: 'blue' as const,
    },
    {
      id: 'quality',
      title: 'Evaluation Layer',
      description: 'Automated evals and human feedback to keep quality high.',
      bullets: ['Regression suites', 'Human-in-the-loop QA', 'RAG benchmarking'],
      x: 76,
      y: 50,
      tone: 'emerald' as const,
    },
    {
      id: 'delivery',
      title: 'Production Delivery',
      description: 'Shipping on time with resilient infra and CI/CD.',
      bullets: ['Streaming responses', 'Caching + queues', 'Deployment playbooks'],
      x: 60,
      y: 75,
      tone: 'violet' as const,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ParallaxLayer speed={0.08}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-4xl sm:text-5xl text-slate-900 dark:text-white">
                Featured Projects<span className="text-blue-600 dark:text-blue-400">.</span>
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-600/50 to-transparent dark:from-blue-400/60 dark:to-transparent" />
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Building solutions that make an impact
            </p>
          </motion.div>
        </ParallaxLayer>

        <div className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <ParallaxLayer speed={0.05}>
            <InfoPanel
              title="3D Product Showcase"
              description="A quick snapshot of how projects map to the full delivery pipeline."
              bullets={[
                'Design-focused UX',
                'LLM-powered backend services',
                'Deployment & performance tuning',
              ]}
            />
          </ParallaxLayer>

          <div className="relative h-[320px] w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <Scene3D className="h-full w-full">
              <PlaceholderGeometry color="#a78bfa" />
              <ClickZone3D onSelect={() => setActiveSpot(projectHotspots[0])} />
              <Overlay3D position={[0, -1.7, 0]}>
                <div className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-md">
                  Project Stack View
                </div>
              </Overlay3D>
            </Scene3D>

            {projectHotspots.map((spot) => (
              <Hotspot
                key={spot.id}
                x={spot.x}
                y={spot.y}
                title={spot.title}
                subtitle={spot.description}
                tone={spot.tone}
                onOpen={() => setActiveSpot(spot)}
              />
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 dark:bg-slate-900 dark:border-slate-800 dark:hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-[220%] dark:via-slate-500/30" />
                </div>
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs rounded-full shadow-lg dark:from-blue-500 dark:to-indigo-500">
                      <Sparkles size={12} />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity dark:from-blue-400/15 dark:to-indigo-400/15" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent dark:from-black/90 dark:via-black/30" />

                  {/* Folder Icon */}
                  <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg dark:bg-slate-900/80 dark:shadow-black/30">
                    <Folder className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl text-slate-900 font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 line-clamp-2 leading-relaxed dark:text-slate-300">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 font-medium dark:text-blue-300 dark:bg-blue-500/10 dark:border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-lg transition-all border border-slate-200 hover:border-blue-300 dark:text-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/70 dark:border-slate-700 dark:hover:border-blue-500/60"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg transition-all shadow-md hover:shadow-lg dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-400 dark:hover:to-indigo-400"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>

                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 rounded-lg transition-all border border-slate-200 hover:border-blue-300 dark:text-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-500/60"
                    >
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeProject && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md dark:bg-black/70"
              />

              {/* Modal Content */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto dark:bg-slate-900 dark:border-slate-800"
                >
                  {/* Header */}
                  <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-2xl dark:from-blue-500 dark:to-indigo-500">
                    <button
                      onClick={() => setActiveProject(null)}
                      className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-lg transition-colors dark:hover:bg-white/15"
                    >
                      <X size={20} />
                    </button>
                    <h3 className="text-2xl font-semibold pr-12">
                      {activeProject.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg dark:bg-red-500/10 dark:border-red-400">
                        <h4 className="font-semibold text-red-900 mb-2 dark:text-red-200">
                          Problem
                        </h4>
                        <p className="text-slate-700 dark:text-slate-200">
                          {activeProject.details.problem}
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg dark:bg-emerald-500/10 dark:border-emerald-400">
                        <h4 className="font-semibold text-green-900 mb-2 dark:text-emerald-200">
                          Solution
                        </h4>
                        <p className="text-slate-700 dark:text-slate-200">
                          {activeProject.details.solution}
                        </p>
                      </div>

                      <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg dark:bg-blue-500/10 dark:border-blue-400">
                        <h4 className="font-semibold text-blue-900 mb-3 dark:text-blue-200">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {activeProject.details.features.map((f, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-slate-700 dark:text-slate-200"
                            >
                              <span className="text-blue-600 mt-1 dark:text-blue-300">✓</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg dark:bg-purple-500/10 dark:border-purple-400">
                        <h4 className="font-semibold text-purple-900 mb-2 dark:text-purple-200">
                          Learnings
                        </h4>
                        <p className="text-slate-700 dark:text-slate-200">
                          {activeProject.details.learnings}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all dark:text-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                      <a
                        href={activeProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transition-all shadow-lg dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-400 dark:hover:to-indigo-400"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>

      <Modal
        isOpen={Boolean(activeSpot)}
        title={activeSpot?.title ?? ''}
        onClose={() => setActiveSpot(null)}
      >
        {activeSpot && (
          <div className="space-y-4">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {activeSpot.description}
            </p>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {activeSpot.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  );
}
