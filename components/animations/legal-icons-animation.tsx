"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { BookOpen, FileText, Scale, Gavel, Landmark, Shield } from "lucide-react"

export default function LegalIconsAnimation() {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      controls.start({
        x: x * 20,
        y: y * 20,
        transition: { type: "spring", damping: 50 },
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [controls])

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    }),
  }

  const icons = [
    { Icon: Scale, color: "text-legal-navy" },
    { Icon: Gavel, color: "text-legal-burgundy" },
    { Icon: Landmark, color: "text-legal-navy" },
    { Icon: FileText, color: "text-legal-slate" },
    { Icon: BookOpen, color: "text-legal-burgundy" },
    { Icon: Shield, color: "text-legal-gold" },
  ]

  return (
    <motion.div ref={containerRef} className="relative h-64 w-64" animate={controls}>
      {icons.map(({ Icon, color }, index) => {
        const angle = index * (360 / icons.length) * (Math.PI / 180)
        const radius = 80
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={index}
            className={`absolute left-1/2 top-1/2 ${color}`}
            style={{
              x: x,
              y: y,
              marginLeft: -15,
              marginTop: -15,
            }}
            custom={index}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
          >
            <Icon size={30} />
          </motion.div>
        )
      })}
      <motion.div
        className="absolute left-1/2 top-1/2 h-16 w-16 -ml-8 -mt-8 rounded-full bg-legal-cream shadow-lg flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 20 }}
      >
        <Scale className="h-8 w-8 text-legal-gold" />
      </motion.div>
    </motion.div>
  )
}
