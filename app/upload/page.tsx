"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { FileUp, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function UploadPage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [documentType, setDocumentType] = useState("legal")
  const [legalDocType, setLegalDocType] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (!file) return

    setIsUploading(true)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            router.push("/analysis/sample")
          }, 500)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  return (
    <div className="container mx-auto max-w-5xl py-12">
      <motion.div
        className="mb-8 space-y-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">Upload Your Document</h1>
        <p className="text-muted-foreground">
          Upload your legal document for analysis. We support PDF, DOCX, DOC, TXT, and RTF formats.
        </p>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={itemVariants}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Document Type</CardTitle>
              <CardDescription>Select the type of document you're uploading for better analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="legal" className="grid gap-4 md:grid-cols-2" onValueChange={setDocumentType}>
                <div>
                  <RadioGroupItem value="legal" id="legal" className="peer sr-only" />
                  <Label
                    htmlFor="legal"
                    className="flex cursor-pointer flex-col justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="font-medium">Legal Document</div>
                    <p className="text-sm text-muted-foreground">Contracts, agreements, legal forms, etc.</p>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="general" id="general" className="peer sr-only" />
                  <Label
                    htmlFor="general"
                    className="flex cursor-pointer flex-col justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="font-medium">General Document</div>
                    <p className="text-sm text-muted-foreground">Educational materials, articles, reports, etc.</p>
                  </Label>
                </div>
              </RadioGroup>

              {documentType === "legal" && (
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <Label htmlFor="legal-type" className="mb-2 block">
                    Legal Document Type
                  </Label>
                  <Select onValueChange={setLegalDocType}>
                    <SelectTrigger id="legal-type">
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="agreement">Agreement</SelectItem>
                      <SelectItem value="nda">Non-Disclosure Agreement</SelectItem>
                      <SelectItem value="employment">Employment Document</SelectItem>
                      <SelectItem value="lease">Lease Agreement</SelectItem>
                      <SelectItem value="other">Other Legal Document</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload">Upload File</TabsTrigger>
              <TabsTrigger value="paste">Paste Text</TabsTrigger>
            </TabsList>
            <TabsContent value="upload">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Document</CardTitle>
                  <CardDescription>Upload your document for AI-powered analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="file">Document</Label>
                      <motion.div
                        className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-input bg-muted/50 px-4 py-8 text-center"
                        onClick={() => document.getElementById("file")?.click()}
                        whileHover={{ scale: 1.02, borderColor: "#000" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 1,
                            duration: 1,
                          }}
                        >
                          <FileUp className="mb-2 h-8 w-8 text-muted-foreground" />
                        </motion.div>
                        <div className="text-sm text-muted-foreground">
                          {file ? file.name : "Drag and drop or click to upload"}
                        </div>
                        <Input
                          id="file"
                          type="file"
                          className="hidden"
                          accept=".pdf,.docx,.doc,.txt,.rtf"
                          onChange={handleFileChange}
                        />
                      </motion.div>
                      <p className="text-xs text-muted-foreground">
                        Supported formats: PDF, DOCX, DOC, TXT, RTF. Max size: 10MB
                      </p>
                    </div>
                  </div>
                  {isUploading && (
                    <motion.div
                      className="mt-4 space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between text-xs">
                        <span>Uploading...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                        <motion.div
                          className="h-full bg-slate-800"
                          initial={{ width: 0 }}
                          animate={{ width: `${uploadProgress}%` }}
                          transition={{ duration: 0.3 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
                <CardFooter>
                  <motion.div className="w-full" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button onClick={handleUpload} disabled={!file || isUploading} className="w-full">
                      {isUploading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Analyze Document"
                      )}
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="paste">
              <Card>
                <CardHeader>
                  <CardTitle>Paste Document Text</CardTitle>
                  <CardDescription>Paste the content of your document for analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Document Text</Label>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <textarea
                        id="text"
                        className="min-h-[300px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Paste your document text here..."
                      />
                    </motion.div>
                  </div>
                </CardContent>
                <CardFooter>
                  <motion.div className="w-full" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full">Analyze Text</Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  )
}
