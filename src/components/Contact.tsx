'use client';

import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thanks for reaching out — I'll get back to you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl top-20 right-20" />
        <div className="absolute w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl bottom-20 left-20" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-full shadow-lg mb-6"
          >
            <Sparkles className="text-blue-600" size={16} />
            <span className="text-sm text-slate-700">Let's Connect</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl text-slate-900 mb-4">
            Get In Touch<span className="text-blue-600">.</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            I'm always open to meaningful conversations about AI, product ideas,
            collaboration, or new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Email Card */}
            <div className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Mail size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-900 mb-2 font-semibold">Email Me</h3>
                  <a
                    href="mailto:amulya.kantamneni@gmail.com"
                    className="text-slate-600 hover:text-blue-600 transition-colors break-all"
                  >
                    amulya.kantamneni@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Card */}
            <div className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white group-hover:scale-110 transition-transform shadow-lg">
                  <MessageSquare size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-900 mb-3 font-semibold">Connect Online</h3>
                  <div className="space-y-2">
                    <a
                      href="https://linkedin.com/in/amulyachk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/Amulyakantamneni"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-slate-900 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-900 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-900 mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 group font-semibold"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-slate-200 text-center"
        >
          <p className="text-slate-500 mb-2">
            Designed & built with intention
          </p>
          <p className="text-slate-400 text-sm">
            © 2025 Amulya Kantamneni. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}