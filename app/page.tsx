"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import PricingSection from "@/components/pricing-section"

export default function Home() {
  const targetRefs = {
    features: useRef<HTMLElement>(null),
    pricing: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
  }

  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.9])
  const headerY = useTransform(scrollY, [0, 100], [0, -10])

  useEffect(() => {
    // Smooth scroll to section when clicking on nav links
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const sectionId = target.getAttribute("href")?.substring(1)
        const section = document.getElementById(sectionId || "")
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleNavClick)
    return () => document.removeEventListener("click", handleNavClick)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <motion.header
        className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{ opacity: headerOpacity, y: headerY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-legal-navy"
              >
                <Shield className="h-6 w-6" />
              </motion.div>
              <span className="inline-block font-bold text-legal-navy">DocuGuard</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-legal-slate transition-colors hover:text-legal-navy"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-sm font-medium text-legal-slate transition-colors hover:text-legal-navy"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="flex items-center text-sm font-medium text-legal-slate transition-colors hover:text-legal-navy"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-sm font-medium text-legal-slate transition-colors hover:text-legal-navy"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-legal-navy hover:text-legal-navy/90 hover:bg-legal-navy/10"
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm" className="bg-legal-navy hover:bg-legal-navy/90">
                    Sign up
                  </Button>
                </motion.div>
              </Link>
            </nav>
          </div>
        </div>
      </motion.header>
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <PricingSection />

        <section id="faq" className="container py-12 md:py-24 lg:py-32 bg-white">
          <motion.div
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-legal-navy">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[85%] leading-normal text-legal-slate sm:text-lg sm:leading-7">
              Find answers to common questions about DocuGuard.
            </p>
          </motion.div>
          <motion.div
            className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              {
                title: "How accurate is the document analysis?",
                content:
                  "Our AI-powered analysis has been trained on thousands of legal documents and can identify potential issues with high accuracy. However, we recommend using it as a supplementary tool alongside professional legal advice.",
              },
              {
                title: "What document formats are supported?",
                content:
                  "DocuGuard supports PDF, DOCX, DOC, TXT, and RTF formats. We're constantly working to expand our supported file types.",
              },
              {
                title: "How secure are my documents?",
                content:
                  "We take security seriously. All documents are encrypted in transit and at rest. We do not share your documents with third parties, and they are automatically deleted after analysis unless you choose to save them in your account.",
              },
              {
                title: "What are the free tier limitations?",
                content:
                  "Free tier users can analyze up to 3 documents per month with a maximum of 10 pages per document. For unlimited access and additional features, consider our premium subscription.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="border-gray-200 h-full paper-effect">
                  <CardHeader>
                    <CardTitle className="text-legal-navy">{faq.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-legal-slate">{faq.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <motion.footer
        className="border-t py-6 md:py-0 bg-legal-navy/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-legal-slate md:text-left">
            © 2025 DocuGuard. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-legal-slate">
            <Link href="/terms" className="underline underline-offset-4 hover:text-legal-navy">
              Terms
            </Link>
            <Link href="/privacy" className="underline underline-offset-4 hover:text-legal-navy">
              Privacy
            </Link>
            <Link href="/contact" className="underline underline-offset-4 hover:text-legal-navy">
              Contact
            </Link>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
