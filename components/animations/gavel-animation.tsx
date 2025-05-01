"use client"

import { motion } from "framer-motion"

export default function GavelAnimation() {
  return (
    <div className="relative h-64 w-64">
      <motion.div
        className="absolute right-8 top-16 h-8 w-32 origin-right rounded-l-lg bg-amber-800"
        initial={{ rotate: -45 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />

      <motion.div
        className="absolute right-8 top-16 h-16 w-16 rounded-lg bg-amber-900"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="absolute bottom-16 left-1/2 h-4 w-32 -translate-x-1/2 rounded-full bg-slate-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />

      <motion.div
        className="absolute bottom-8 left-1/2 h-8 w-48 -translate-x-1/2 rounded-lg bg-slate-800"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />

      <motion.div
        className="absolute left-8 top-32 h-8 w-32 origin-left rounded-r-lg bg-amber-800"
        initial={{ rotate: 45, opacity: 0 }}
        animate={{
          rotate: [45, 0, 45, 0],
          opacity: 1,
          y: [0, -20, 0, -20, 0],
        }}
        transition={{
          duration: 2,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 3,
        }}
      />
    </div>
  )
}
