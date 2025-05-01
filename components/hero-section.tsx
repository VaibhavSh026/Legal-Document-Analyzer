"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, FileText, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import ParagraphAnimation from "@/components/animations/paragraph-animation"

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-legal-cream to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-legal-navy opacity-5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/4 top-1/3 h-32 w-32 rounded-full bg-legal-gold opacity-5"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 h-48 w-48 rounded-full bg-legal-burgundy opacity-5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            style={{ y, opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-4"
              >
                <Shield className="h-6 w-6 text-legal-navy" />
                <span className="text-sm font-semibold uppercase tracking-wider text-legal-navy">DocuGuard</span>
              </motion.div>

              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-legal-navy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Legal Document Analysis with AI Precision
              </motion.h1>
              <ParagraphAnimation
                text="Our  AI-powered  platform  analyzes  your  legal  documents   to  identify  potential  risks,  summarize  complex  sections,  and  provides  clear  insights."
                className="max-w-[600px] text-legal-slate md:text-xl"
              />
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/upload">
                <Button size="lg" className="gap-1 group bg-legal-navy hover:bg-legal-navy/90">
                  Try for Free
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.5 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
              </Link>
              <Link href="#pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-legal-navy text-legal-navy hover:bg-legal-navy/10"
                >
                  View Pricing
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 mt-8 text-sm text-legal-slate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <FileText className="h-4 w-4 text-legal-gold" />
              <span>Trusted by legal professionals nationwide</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-white shadow-xl border border-gray-100 md:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-br from-legal-cream to-white p-8 overflow-hidden">
                {/* Legal watermark */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none"
                  initial={{ opacity: 0, rotate: -5 }}
                  animate={{ opacity: 0.03, rotate: -5 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="text-9xl font-serif text-legal-navy tracking-widest">LEGAL</div>
                </motion.div>

                {/* Document header */}
                <motion.div
                  className="relative space-y-4 paper-effect rounded-lg p-6 bg-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <div className="h-6 w-2/3 rounded bg-gray-200"></div>
                    <div className="text-xs text-legal-slate">CONFIDENTIAL</div>
                  </div>
                  <div className="h-4 w-full rounded bg-gray-200"></div>
                  <div className="h-4 w-full rounded bg-gray-200"></div>
                  <div className="h-4 w-3/4 rounded bg-gray-200"></div>

                  {/* Analysis results */}
                  <div className="mt-8 space-y-2">
                    <motion.div
                      className="h-10 w-full rounded-lg bg-red-50 p-2 border-l-4 border-legal-burgundy"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <div className="h-full w-1/3 rounded bg-red-200"></div>
                    </motion.div>

                    <motion.div
                      className="h-24 w-full rounded-lg bg-white shadow-sm p-3 border border-gray-100"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="h-4 w-1/2 rounded bg-legal-navy/20"></div>
                          <div className="ml-auto h-4 w-4 rounded-full bg-legal-gold/30"></div>
                        </div>
                        <div className="h-3 w-full rounded bg-gray-100"></div>
                        <div className="h-3 w-full rounded bg-gray-100"></div>
                        <div className="h-3 w-2/3 rounded bg-gray-100"></div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="h-24 w-full rounded-lg bg-white shadow-sm p-3 border border-gray-100"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="h-4 w-1/3 rounded bg-legal-navy/20"></div>
                          <div className="ml-auto h-4 w-4 rounded-full bg-green-500/30"></div>
                        </div>
                        <div className="h-3 w-full rounded bg-gray-100"></div>
                        <div className="h-3 w-full rounded bg-gray-100"></div>
                        <div className="h-3 w-3/4 rounded bg-gray-100"></div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Document footer with signature line */}
                  <motion.div
                    className="mt-4 pt-4 border-t border-dashed border-gray-200 flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <div className="w-1/3 h-px bg-black"></div>
                  </motion.div>
                </motion.div>

                {/* Scanning animation */}
                <motion.div
                  className="absolute bottom-8 right-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="relative h-24 w-24 rounded-full bg-legal-navy/5 flex items-center justify-center">
                    <motion.div
                      className="h-20 w-20 rounded-full border-2 border-legal-gold/30"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                    <motion.div
                      className="absolute h-16 w-16 rounded-full border-2 border-legal-navy/30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 0.5,
                      }}
                    />
                    <motion.div
                      className="absolute h-4 w-4 bg-legal-burgundy rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs text-legal-slate mb-2">Scroll to explore</span>
        <motion.div
          className="h-6 w-1 rounded-full bg-legal-gold"
          animate={{
            height: [6, 24, 6],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  )
}
