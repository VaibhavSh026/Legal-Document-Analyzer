"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AlertTriangle, FileSearch, FileText, ListChecks, Shield, Zap } from "lucide-react"

export default function FeatureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const features = [
    {
      icon: <FileSearch className="h-6 w-6" />,
      title: "Document Overview",
      description: "Get a comprehensive overview of your document, including key points and structure.",
      color: "bg-blue-50 text-legal-navy",
      delay: 0,
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Section Summaries",
      description: "Each section and subsection is summarized in plain language for easier understanding.",
      color: "bg-amber-50 text-legal-gold",
      delay: 0.1,
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Threat Detection",
      description: "Identify potential risks, unfavorable clauses, and hidden obligations in your documents.",
      color: "bg-red-50 text-legal-burgundy",
      delay: 0.2,
    },
    {
      icon: <ListChecks className="h-6 w-6" />,
      title: "Compliance Check",
      description: "Ensure your documents comply with relevant regulations and industry standards.",
      color: "bg-green-50 text-green-700",
      delay: 0.3,
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Storage",
      description: "Your documents are encrypted and securely stored, accessible only to you.",
      color: "bg-purple-50 text-purple-700",
      delay: 0.4,
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Analysis",
      description: "Get results in minutes, not hours, allowing you to make informed decisions quickly.",
      color: "bg-yellow-50 text-yellow-700",
      delay: 0.5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  }

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container space-y-12 px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-lg bg-legal-navy/10 px-3 py-1 text-sm text-legal-navy"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Features
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-legal-navy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Powerful Document Analysis
            </motion.h2>
            <motion.p
              className="max-w-[900px] text-legal-slate md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Our platform uses advanced machine learning algorithms to analyze your documents and provide valuable
              insights.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow bg-white"
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div
                className={`rounded-full ${feature.color} p-3`}
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1, transition: { duration: 0.5 } }}
                animate={{
                  boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 15px rgba(0,0,0,0.1)", "0px 0px 0px rgba(0,0,0,0)"],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-legal-navy">{feature.title}</h3>
              <p className="text-center text-legal-slate">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
