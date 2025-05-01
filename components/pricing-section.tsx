"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FloatingDocuments from "@/components/animations/floating-documents"

export default function PricingSection() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0.5, 0.8], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0.5, 0.8], [0.6, 1])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
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
    <section id="pricing" className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 bg-legal-navy/5">
      <div className="absolute inset-0 -z-10">
        <FloatingDocuments />
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-legal-navy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p
              className="max-w-[900px] text-legal-slate md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Choose the plan that's right for you and start analyzing your documents today.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ scale, opacity }}
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-legal-navy">Free</CardTitle>
                <CardDescription>For individuals who want to try our service</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-legal-navy">₹0</div>
                <p className="text-sm text-legal-slate">Forever free</p>
                <div className="mt-6 space-y-2">
                  {[
                    "3 document analyses per month",
                    "Up to 10 pages per document",
                    "Basic threat detection",
                    "Document overview",
                    "Section summaries",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="text-legal-gold"
                      >
                        <Check className="h-4 w-4" />
                      </motion.div>
                      <span className="text-legal-slate">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/signup" className="w-full">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      variant="outline"
                      className="w-full border-legal-navy text-legal-navy hover:bg-legal-navy/10"
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-legal-navy text-white relative overflow-hidden">
              <motion.div
                className="absolute -right-4 -top-4 bg-legal-gold text-white text-xs font-bold px-2 py-1 rotate-12"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [12, 12, 12],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                POPULAR
              </motion.div>
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription className="text-gray-300">
                  For professionals who need comprehensive analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-1">
                  <div className="text-4xl font-bold">₹49</div>
                  <div className="text-sm text-gray-300">/month</div>
                </div>
                <p className="text-sm text-gray-300">or ₹500/year (save ₹88)</p>
                <div className="mt-6 space-y-2">
                  {[
                    "Unlimited document analyses",
                    "Unlimited pages per document",
                    "Advanced threat detection",
                    "Detailed document overview",
                    "In-depth section summaries",
                    "Compliance checking",
                    "Document comparison",
                    "Priority support",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="text-legal-gold"
                      >
                        <Check className="h-4 w-4" />
                      </motion.div>
                      <span className="text-gray-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/subscribe" className="w-full">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button className="w-full bg-legal-gold hover:bg-legal-gold/90 text-legal-navy">
                      Subscribe Now
                    </Button>
                  </motion.div>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
