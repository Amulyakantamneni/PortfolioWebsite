"use client";

import { motion } from "motion/react";
import {
  Briefcase,
  Calendar,
  Download,
  MapPin,
} from "lucide-react";
import { useState } from "react";

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  // Handle resume download
  const handleDownloadResume = () => {
    // Create a simple text-based resume
    const resumeContent = `
AMULYA KANTAMNENI
AI/ML Engineer
Email: amulya.kantamneni@gmail.com
LinkedIn: linkedin.com/in/amulyachk
GitHub: github.com/Amulyakantamneni

EXPERIENCE

PayPal | AI / Machine Learning Engineer
2024 – Present | San Jose, CA
• Designed and deployed full-stack LLM pipelines for enterprise financial document understanding, including data preprocessing, embedding generation, vector indexing, and multi-step reasoning workflows.
• Developed optimized Retrieval-Augmented Generation (RAG) systems using OpenAI, LangChain, FAISS, and Pinecone, improving retrieval relevance by 50% and reducing hallucinations through hybrid semantic + rule-based rankers.
• Built a multi-agent knowledge assistant for internal engineering teams with autonomous task planning, context linking, and tool-use capabilities—reducing manual documentation lookup time by 70%.
• Engineered latency-optimized inference services using FastAPI, async workers, a batching engine, and response streaming; achieved 3× throughput under peak load while cutting P95 latency by 40%.
• Productionized NLP classification and summarization models using Docker, Kubernetes, Helm, and fully managed CI/CD through GitHub Actions and ArgoCD.
• Implemented evaluation pipelines for prompt quality, retrieval accuracy, toxicity safety checks, and regression detection using Weights & Biases and custom dashboards.
• Built internal tools for prompt versioning, data labeling, and dataset quality checks, enabling 4+ teams to rapidly iterate on LLM features.
• Designed monitoring for model drift, embedding integrity, vector DB health and created automated fallback strategies to maintain reliability in distributed environments.

Accenture | AI Engineer (NLP & GenAI)
2022 – 2023 | Hyderabad, India
• Led development of Generative AI automation suites for banking, insurance, and retail domains, including summarization engines, classification models, query routing, and knowledge retrieval systems.
• Built RAG prototypes integrating LangChain, HuggingFace embeddings, and vector databases (FAISS, Qdrant) that reduced client search time by 60–80%.
• Designed domain-adapted LLM pipelines with custom prompt frameworks, system instructions, and fine-tuned adapters for high-accuracy field extraction.
• Built secure API-driven AI microservices using FastAPI, JWT auth, rate limiting, and observability tooling for deployment in multi-tenant enterprise environments.
• Integrated AI systems into client cloud stacks using AWS Lambda, ECS Fargate, CloudWatch, DynamoDB, and S3, ensuring fault-tolerant delivery.
• Collaborated directly with client engineering teams to transform business workflows into AI-ready pipelines, automating repetitive processes and saving thousands of human-hours.
• Implemented evaluation harnesses using Bleu/ROUGE metrics, embedding similarity scoring, and human feedback tools for iterative LLM improvement.
`.trim();

    // Create a blob and download it
    const blob = new Blob([resumeContent], {
      type: "text/plain",
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Amulya_Kantamneni_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const experiences = [
    {
      company: "PayPal",
      position: "AI / Machine Learning Engineer",
      period: "2024 – Present",
      location: "San Jose, CA",
      description: [
        "Designed and deployed LLM-powered NLP pipelines for document classification and intelligent search.",
        "Built Retrieval-Augmented Generation (RAG) systems to improve answer accuracy and reduce hallucinations.",
        "Worked closely with product and engineering teams to move AI features from prototype to production.",
        "Improved inference latency and reliability through batching, prompt optimization, and caching strategies.",
      ],
    },
    {
      company: "Accenture",
      position: "AI Engineer (NLP & GenAI)",
      period: "2022 – 2023",
      location: "Hyderabad, India",
      description: [
        "Developed NLP models and ML pipelines for enterprise-scale data processing and automation.",
        "Implemented text classification and information extraction solutions using transformer-based models.",
        "Collaborated with cross-functional teams to integrate AI services into existing systems.",
        "Contributed to improving model performance, monitoring, and deployment workflows.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative bg-white/60"
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
                <h2 className="text-4xl sm:text-5xl text-slate-900">
                  Experience
                  <span className="text-blue-600">.</span>
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-600/50 to-transparent" />
              </div>
              <p className="text-xl text-slate-600">
                Turning ideas into production-ready solutions
              </p>
            </div>

            {/* Resume Download */}
            <motion.a
              href="#"
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all"
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
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      activeTab === index
                        ? "bg-white/20"
                        : "bg-blue-50"
                    }`}
                  >
                    <Briefcase
                      size={18}
                      className={
                        activeTab === index
                          ? "text-white"
                          : "text-blue-600"
                      }
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">
                      {exp.company}
                    </div>
                    <div
                      className={`text-sm ${activeTab === index ? "text-blue-100" : "text-slate-500"}`}
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
            className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8"
          >
            {/* Header */}
            <div className="mb-6 pb-6 border-b border-slate-200">
              <h3 className="text-2xl text-slate-900 mb-3 font-semibold">
                {experiences[activeTab].position}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-50 rounded-lg">
                    <Briefcase
                      size={14}
                      className="text-blue-600"
                    />
                  </div>
                  <span className="font-medium">
                    {experiences[activeTab].company}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-50 rounded-lg">
                    <Calendar
                      size={14}
                      className="text-blue-600"
                    />
                  </div>
                  <span>{experiences[activeTab].period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-50 rounded-lg">
                    <MapPin
                      size={14}
                      className="text-blue-600"
                    />
                  </div>
                  <span>{experiences[activeTab].location}</span>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              {experiences[activeTab].description.map(
                (item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold text-sm shadow-lg group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <p className="text-slate-700 leading-relaxed flex-1 pt-1">
                      {item}
                    </p>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}