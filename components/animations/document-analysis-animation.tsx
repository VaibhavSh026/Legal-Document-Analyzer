"use client"

import { motion } from "framer-motion"
import { Search, CheckCircle, AlertTriangle } from "lucide-react"

export default function DocumentAnalysisAnimation() {
  return (
    <div className="relative h-64 w-full max-w-md mx-auto">
      {/* Document */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-40 w-32 -ml-16 -mt-20 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Document content lines */}
        <div className="p-3 space-y-2">
          <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
          <div className="h-2 w-full bg-gray-200 rounded"></div>
          <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
          <div className="h-2 w-full bg-gray-200 rounded"></div>
          <div className="h-2 w-4/5 bg-gray-200 rounded"></div>
          <div className="h-2 w-full bg-gray-200 rounded"></div>
        </div>

        {/* Scanning effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-legal-gold to-transparent"
          initial={{ y: 0, opacity: 0.7 }}
          animate={{ y: 40, opacity: 0.7 }}
          transition={{
            y: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "linear",
              repeatType: "reverse",
            },
          }}
        />
      </motion.div>

      {/* Magnifying glass */}
      <motion.div
        className="absolute left-[65%] top-[30%] text-legal-navy"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Search className="h-10 w-10" />
      </motion.div>

      {/* Alert icon */}
      <motion.div
        className="absolute left-[20%] top-[25%] text-legal-burgundy"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <AlertTriangle className="h-8 w-8" />
      </motion.div>

      {/* Check icon */}
      <motion.div
        className="absolute left-[25%] top-[65%] text-green-500"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <CheckCircle className="h-8 w-8" />
      </motion.div>

      {/* Analysis result */}
      <motion.div
        className="absolute left-[60%] top-[60%] bg-white p-2 rounded shadow-md border border-gray-200"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <div className="text-xs font-medium text-legal-navy">Analysis Complete</div>
        <div className="h-1 w-full bg-green-100 rounded mt-1">
          <div className="h-1 w-4/5 bg-green-500 rounded"></div>
        </div>
      </motion.div>
    </div>
  )
}
