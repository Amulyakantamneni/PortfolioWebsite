'use client';

import { motion } from 'motion/react';
import { TrendingUp, Zap, Users, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Impact() {
  const metrics = [
    {
      icon: Zap,
      value: 50,
      suffix: '%',
      label: 'Retrieval Accuracy Improvement',
      description: 'Optimized RAG systems',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      value: 3,
      suffix: '×',
      label: 'Throughput Increase',
      description: 'Performance optimization',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Users,
      value: 70,
      suffix: '%',
      label: 'Time Reduction',
      description: 'Knowledge assistant impact',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      value: 40,
      suffix: '%',
      label: 'Latency Reduction',
      description: 'P95 inference optimization',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-400/10 rounded-full blur-3xl bottom-10 right-10 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-slate-900 mb-4">
            Impact & Results<span className="text-blue-600">.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Measurable outcomes from production systems
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index }: { metric: any; index: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = metric.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= metric.value) {
        setCount(metric.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, metric.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onViewportEnter={() => setIsVisible(true)}
      className="group relative"
    >
      <div className="relative h-full p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
        
        {/* Icon */}
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${metric.color} text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
          <metric.icon size={24} />
        </div>

        {/* Value */}
        <div className="mb-3">
          <motion.div
            className={`text-5xl font-bold bg-gradient-to-br ${metric.color} bg-clip-text text-transparent`}
          >
            {count}{metric.suffix}
          </motion.div>
        </div>

        {/* Label */}
        <h3 className="text-slate-900 font-semibold mb-1">
          {metric.label}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm">
          {metric.description}
        </p>

        {/* Decorative Element */}
        <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${metric.color} opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700`} />
      </div>
    </motion.div>
  );
}
