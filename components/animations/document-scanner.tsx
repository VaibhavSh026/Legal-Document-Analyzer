"use client"

import { motion } from "framer-motion"

export default function DocumentScanner() {
  return (
    <div className="relative h-64 w-64 overflow-hidden rounded-lg border-2 border-slate-300 bg-white">
      <motion.div
        className="absolute left-0 top-0 h-full w-full bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <div className="m-4 space-y-2">
          <div className="h-4 w-3/4 rounded bg-slate-200"></div>
          <div className="h-4 w-full rounded bg-slate-200"></div>
          <div className="h-4 w-5/6 rounded bg-slate-200"></div>
          <div className="h-4 w-2/3 rounded bg-slate-200"></div>
          <div className="h-4 w-full rounded bg-slate-200"></div>
          <div className="h-4 w-4/5 rounded bg-slate-200"></div>
          <div className="h-4 w-3/4 rounded bg-slate-200"></div>
          <div className="h-4 w-full rounded bg-slate-200"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-0 top-0 h-4 w-full bg-green-400 opacity-30"
        initial={{ top: 0 }}
        animate={{ top: "100%" }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-slate-300 bg-white/80"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1.2, opacity: 0.8 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <motion.div
          className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
      </motion.div>
    </div>
  )
}
