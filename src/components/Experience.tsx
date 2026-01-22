"use client";

import { motion } from "motion/react";
import { Briefcase, Calendar, Download, MapPin } from "lucide-react";
import { useState } from "react";

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "PayPal",
      position: "AI Engineer",
      period: "2024 – Present",
      location: "San Jose, CA",
      description: [
        "Owned end-to-end development of LLM-powered document understanding features (ingestion → chunking → embeddings → vector indexing → orchestration → UI/API integration).",
        "Built Retrieval-Augmented Generation (RAG) workflows with hybrid retrieval (dense + keyword), reranking, and grounded prompting to improve answer relevance and reduce hallucinations.",
        "Designed scalable inference services with FastAPI, async workers, caching, and streaming responses; tuned batching and request concurrency to improve throughput and reduce P95 latency.",
        "Implemented evaluation & regression testing for prompts and retrieval (golden sets, win-rate comparisons, citation checks, safety filters) to prevent quality drops across releases.",
        "Productionized NLP/LLM pipelines using Docker and Kubernetes and automated releases with CI/CD; added observability (logs/metrics/traces) for reliable on-call debugging.",
        "Collaborated with product and platform teams to convert prototypes into shippable features, define success metrics, and iterate using user feedback and error analysis.",
        "Built internal tooling for prompt/version management and data quality checks, enabling faster iteration across multiple teams and reducing manual debugging cycles.",
        "Hardened systems with fallback strategies (retry policies, retrieval backoff, deterministic templates) to maintain reliability during partial outages and noisy inputs.",
      ],
    },
    {
      company: "Accenture",
      position: "AI Engineer (GenAI)",
      period: "2022 – 2023",
      location: "Hyderabad, India",
      description: [
        "Delivered NLP and GenAI solutions for enterprise clients across banking and insurance—information extraction, classification, summarization, and semantic search.",
        "Built transformer-based pipelines (tokenization, training/inference, post-processing) and improved quality through prompt tuning, thresholding, and error-driven iterations.",
        "Developed early RAG prototypes using LangChain/Hugging Face embeddings with FAISS/Qdrant, improving internal knowledge lookup speed and reducing manual search effort.",
        "Implemented secure AI microservices (FastAPI) with authentication, rate limiting, and structured logging to support multi-tenant deployments and audit requirements.",
        "Integrated models into client cloud environments (AWS services like Lambda/ECS/S3/CloudWatch), supporting stable rollouts and operational monitoring.",
        "Created reusable data preprocessing and labeling workflows to improve dataset consistency, reduce noise, and speed up experimentation cycles.",
        "Partnered with client engineering teams to translate business workflows into ML-ready pipelines and ship production features under tight timelines.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative bg-white/60 dark:bg-slate-950/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-4xl sm:text-5xl text-slate-900 dark:text-white">
                  Experience<span className="text-blue-600 dark:text-blue-400">.</span>
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-600/50 to-transparent dark:from-blue-400/60" />
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Turning ideas into production-ready solutions
              </p>
            </div>

            {/* Resume Download (downloads /public/Amulya_Kantamneni_Resume.pdf) */}
            <motion.a
              href="/Amulya_Kantamneni_Resume.pdf"
              download="Amulya_Kantamneni_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all dark:from-blue-500 dark:to-indigo-500"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </motion.a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Company Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                whileHover={{ x: 5 }}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:border-slate-800"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      activeTab === index ? "bg-white/20" : "bg-blue-50 dark:bg-blue-500/10"
                    }`}
                  >
                    <Briefcase
                      size={18}
                      className={activeTab === index ? "text-white" : "text-blue-600 dark:text-blue-400"}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{exp.company}</div>
                    <div
                      className={`text-sm ${
                        activeTab === index ? "text-blue-100" : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {exp.period}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Experience Details */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 dark:bg-slate-900 dark:border-slate-800"
          >
            {/* Header */}
            <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-2xl text-slate-900 mb-3 font-semibold dark:text-white">
                {experiences[activeTab].position}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-50 rounded-lg dark:bg-blue-500/10">
                    <Briefcase size={14} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-medium">{experiences[activeTab].company}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-50 rounded-lg dark:bg-blue-500/10">
                    <Calendar size={14} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>{experiences[activeTab].period}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-50 rounded-lg dark:bg-blue-500/10">
                    <MapPin size={14} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>{experiences[activeTab].location}</span>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              {experiences[activeTab].description.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold text-sm shadow-lg group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 leading-relaxed flex-1 pt-1 dark:text-slate-200">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
