"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export default function FloatingDocuments() {
  const documents = Array(6).fill(0)

  return (
    <div className="relative h-64 w-full">
      {documents.map((_, index) => {
        const delay = index * 0.5
        const duration = 10 + Math.random() * 10
        const size = 40 + Math.random() * 20
        const initialX = Math.random() * 100

        return (
          <motion.div
            key={index}
            className="absolute text-slate-200"
            style={{ fontSize: size }}
            initial={{
              x: `${initialX}%`,
              y: "100%",
              opacity: 0.3,
              rotate: Math.random() * 40 - 20,
            }}
            animate={{
              y: "-100%",
              opacity: [0.3, 0.7, 0.3],
              rotate: Math.random() * 40 - 20,
            }}
            transition={{
              duration,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <FileText />
          </motion.div>
        )
      })}
    </div>
  )
}
