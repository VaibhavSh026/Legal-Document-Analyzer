"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Check, CreditCard, Loader2, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SubscribePage() {
  const router = useRouter()
  const [plan, setPlan] = useState("monthly")
  const [paymentMethod, setPaymentMethod] = useState("qr")
  const [isLoading, setIsLoading] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [verificationStep, setVerificationStep] = useState(0)

  const handleSubscribe = () => {
    setIsLoading(true)

    if (paymentMethod === "qr") {
      setShowQR(true)
      setIsLoading(false)
    } else {
      // Simulate payment processing
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    }
  }

  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshot(e.target.files[0])
    }
  }

  const handleVerifyPayment = () => {
    setIsLoading(true)
    // Simulate verification
    setTimeout(() => {
      setVerificationStep(1)
      setIsLoading(false)
    }, 1500)
  }

  const handleQRSuccess = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push("/dashboard")
    }, 1500)
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
    <div className="container mx-auto max-w-3xl py-12">
      <motion.div
        className="mb-8 flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Subscribe to Premium</h1>
      </motion.div>

      {showQR ? (
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Card>
            <CardHeader>
              <CardTitle>Scan QR Code to Pay</CardTitle>
              <CardDescription>Scan the QR code below to complete your payment</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-6">
              <motion.div
                className="h-64 w-64 rounded-lg bg-slate-100 p-4"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="h-full w-full bg-white p-4">
                  <div className="flex h-full flex-col items-center justify-center">
                    <div className="h-48 w-48 rounded bg-slate-900 p-4">
                      <div className="grid h-full w-full grid-cols-7 grid-rows-7 gap-1">
                        {/* Simplified QR code representation */}
                        {Array(49)
                          .fill(0)
                          .map((_, i) => (
                            <motion.div
                              key={i}
                              className={`rounded-sm ${Math.random() > 0.7 ? "bg-white" : "bg-transparent"}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: i * 0.001 }}
                            ></motion.div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <p className="font-medium">Amount: {plan === "monthly" ? "₹49" : "₹500"}</p>
                <p className="text-sm text-muted-foreground">
                  Scan with any UPI app to pay to: <span className="font-medium">8303716410@ybl</span>
                </p>
              </motion.div>

              {verificationStep === 0 ? (
                <motion.div className="w-full space-y-4" variants={itemVariants}>
                  <div className="grid gap-2">
                    <Label htmlFor="screenshot">Upload Payment Screenshot</Label>
                    <div
                      className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-input bg-muted/50 px-4 py-4 text-center"
                      onClick={() => document.getElementById("screenshot")?.click()}
                    >
                      <Upload className="mb-2 h-6 w-6 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground">
                        {screenshot ? screenshot.name : "Click to upload screenshot"}
                      </div>
                      <Input
                        id="screenshot"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleScreenshotChange}
                      />
                    </div>
                  </div>
                  <Button onClick={handleVerifyPayment} disabled={!screenshot || isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      "Verify Payment"
                    )}
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  className="w-full space-y-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="rounded-lg bg-green-50 p-4 text-center text-green-800">
                    <Check className="mx-auto mb-2 h-6 w-6" />
                    <p className="font-medium">Payment verified successfully!</p>
                  </div>
                  <Button onClick={handleQRSuccess} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Activating...
                      </>
                    ) : (
                      "Continue to Dashboard"
                    )}
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Choose a Plan</CardTitle>
                <CardDescription>Select the subscription plan that works best for you</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="monthly" className="grid gap-4 md:grid-cols-2" onValueChange={setPlan}>
                  <div>
                    <RadioGroupItem value="monthly" id="monthly" className="peer sr-only" />
                    <Label
                      htmlFor="monthly"
                      className="flex cursor-pointer flex-col justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="font-medium">Monthly</div>
                        <Check className="h-4 w-4 text-primary opacity-0 [&:has([data-state=checked])]:opacity-100 peer-data-[state=checked]:opacity-100" />
                      </div>
                      <div className="mb-2 flex items-baseline">
                        <span className="text-2xl font-bold">₹49</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <div className="text-sm text-muted-foreground">Billed monthly. Cancel anytime.</div>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="yearly" id="yearly" className="peer sr-only" />
                    <Label
                      htmlFor="yearly"
                      className="flex cursor-pointer flex-col justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="font-medium">Yearly</div>
                        <Check className="h-4 w-4 text-primary opacity-0 [&:has([data-state=checked])]:opacity-100 peer-data-[state=checked]:opacity-100" />
                      </div>
                      <div className="mb-2 flex items-baseline">
                        <span className="text-2xl font-bold">₹500</span>
                        <span className="text-muted-foreground">/year</span>
                      </div>
                      <div className="text-sm text-muted-foreground">Save ₹88 compared to monthly billing.</div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Choose how you want to pay for your subscription</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="qr" onValueChange={setPaymentMethod}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="qr">QR Code / UPI</TabsTrigger>
                    <TabsTrigger value="card">Credit Card</TabsTrigger>
                  </TabsList>
                  <TabsContent value="qr" className="mt-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Click "Subscribe" to generate a QR code for payment to UPI ID:{" "}
                        <span className="font-medium">8303716410@ybl</span>
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="card" className="mt-4 space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name on Card</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="card">Card Number</Label>
                      <Input id="card" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <motion.div className="w-full" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full" onClick={handleSubscribe} disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Subscribe Now
                      </>
                    )}
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
