"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function ScalesOfJustice() {
  const scaleLeftRef = useRef<HTMLDivElement>(null)
  const scaleRightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (scaleLeftRef.current && scaleRightRef.current) {
        // Randomly adjust the scales to simulate balancing
        const leftHeight = Math.random() * 20 + 10
        const rightHeight = 40 - leftHeight

        scaleLeftRef.current.style.transform = `translateY(${leftHeight}px)`
        scaleRightRef.current.style.transform = `translateY(${rightHeight}px)`
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-64 w-64">
      <motion.div
        className="absolute left-1/2 top-0 h-40 w-1 -translate-x-1/2 bg-slate-700"
        initial={{ height: 0 }}
        animate={{ height: 160 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="absolute left-1/2 top-0 h-4 w-40 -translate-x-1/2 bg-slate-800"
        initial={{ width: 0 }}
        animate={{ width: 160 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <motion.div
        className="absolute left-0 top-0 h-1 w-16 bg-slate-600"
        initial={{ width: 0 }}
        animate={{ width: 64 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.div
          ref={scaleLeftRef}
          className="absolute -bottom-16 left-0 h-16 w-16 rounded-full border-4 border-slate-700 bg-slate-200 transition-transform duration-1000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
      </motion.div>

      <motion.div
        className="absolute right-0 top-0 h-1 w-16 bg-slate-600"
        initial={{ width: 0 }}
        animate={{ width: 64 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.div
          ref={scaleRightRef}
          className="absolute -bottom-16 right-0 h-16 w-16 rounded-full border-4 border-slate-700 bg-slate-200 transition-transform duration-1000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-slate-800"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      />
    </div>
  )
}
