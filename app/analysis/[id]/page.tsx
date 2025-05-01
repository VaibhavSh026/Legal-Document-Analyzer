"use client"

import { useState } from "react"
import Link from "next/link"
import { AlertTriangle, ArrowLeft, Download, FileText, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function AnalysisPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")

  // This would normally come from an API call using the document ID
  const analysisData = {
    title: "Employment Contract - Senior Software Engineer",
    date: "April 6, 2025",
    pages: 12,
    riskScore: 65,
    overview:
      "This is an employment contract for a Senior Software Engineer position. The document outlines the terms of employment, compensation, benefits, intellectual property rights, non-compete clauses, and termination conditions.",
    sections: [
      {
        title: "Employment Terms",
        summary:
          "This section outlines the basic terms of employment, including job title, reporting structure, and work location.",
        subsections: [
          {
            title: "Position and Duties",
            summary: "Defines the role of Senior Software Engineer and associated responsibilities.",
            risks: [],
          },
          {
            title: "Work Location",
            summary: "Specifies the primary work location with a clause allowing for relocation.",
            risks: [
              {
                severity: "medium",
                description:
                  "The employer reserves the right to relocate the employee to any location within 100 miles without additional compensation for increased commute time or costs.",
              },
            ],
          },
        ],
      },
      {
        title: "Compensation",
        summary: "Details the salary, bonus structure, equity compensation, and review process.",
        subsections: [
          {
            title: "Base Salary",
            summary: "Specifies the annual base salary of $120,000 paid bi-weekly.",
            risks: [],
          },
          {
            title: "Bonus Structure",
            summary: "Outlines the performance-based bonus program.",
            risks: [
              {
                severity: "high",
                description:
                  "Bonus payments are described as 'discretionary' with no guaranteed minimum, despite being presented as part of the total compensation package.",
              },
            ],
          },
          {
            title: "Equity Compensation",
            summary: "Details the stock option grant and vesting schedule.",
            risks: [
              {
                severity: "high",
                description:
                  "The company reserves the right to modify the vesting schedule at any time without employee consent.",
              },
            ],
          },
        ],
      },
      {
        title: "Intellectual Property",
        summary: "Covers ownership of work product, inventions, and creative works developed during employment.",
        subsections: [
          {
            title: "Work Product Ownership",
            summary: "Establishes that all work created during employment belongs to the company.",
            risks: [
              {
                severity: "high",
                description:
                  "The IP clause extends to work done outside of business hours and unrelated to company business if created using any company resources, including personal devices connected to company networks.",
              },
            ],
          },
        ],
      },
      {
        title: "Non-Compete",
        summary: "Restricts the employee from working for competitors or starting a competing business.",
        subsections: [
          {
            title: "Restricted Activities",
            summary: "Defines what constitutes competitive activities.",
            risks: [
              {
                severity: "high",
                description:
                  "The non-compete clause is extremely broad, covering any company in the technology sector globally for a period of 2 years, which may not be enforceable in many jurisdictions.",
              },
            ],
          },
        ],
      },
      {
        title: "Termination",
        summary: "Outlines the conditions under which employment may be terminated and the associated processes.",
        subsections: [
          {
            title: "At-Will Employment",
            summary: "States that employment is at-will and can be terminated by either party at any time.",
            risks: [],
          },
          {
            title: "Severance",
            summary: "Details the severance package in case of termination without cause.",
            risks: [
              {
                severity: "medium",
                description:
                  "Severance is conditional on signing a comprehensive release of claims against the company, including waiving rights to pursue any legal action.",
              },
            ],
          },
        ],
      },
    ],
    threats: [
      {
        category: "Compensation",
        severity: "high",
        description: "Discretionary bonus structure with no guaranteed minimum",
        recommendation: "Negotiate for a defined minimum bonus percentage based on clear performance metrics.",
      },
      {
        category: "Equity",
        severity: "high",
        description: "Company can modify vesting schedule unilaterally",
        recommendation: "Request that any changes to vesting schedule require mutual written agreement.",
      },
      {
        category: "Intellectual Property",
        severity: "high",
        description: "Overly broad IP clause covering personal projects",
        recommendation: "Add exclusions for personal projects developed on personal time with personal resources.",
      },
      {
        category: "Non-Compete",
        severity: "high",
        description: "Excessively broad non-compete clause (global, 2 years)",
        recommendation: "Negotiate for narrower geographic scope, shorter duration, and specific industry limitations.",
      },
      {
        category: "Relocation",
        severity: "medium",
        description: "Potential relocation without additional compensation",
        recommendation: "Add clause requiring relocation assistance and/or compensation for increased commute costs.",
      },
      {
        category: "Severance",
        severity: "medium",
        description: "Comprehensive release of claims required for severance",
        recommendation: "Negotiate for severance payment regardless of signing additional releases.",
      },
    ],
  }

  return (
    <div className="container mx-auto max-w-6xl py-8">
      <div className="mb-6 flex items-center gap-4">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">{analysisData.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Analyzed on {analysisData.date}</span>
            <span>{analysisData.pages} pages</span>
          </div>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{analysisData.riskScore}/100</div>
              <Badge className="bg-amber-500">Moderate Risk</Badge>
            </div>
            <Progress value={analysisData.riskScore} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">High Risk Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <span className="text-2xl font-bold">
                {analysisData.threats.filter((t) => t.severity === "high").length}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Medium Risk Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-amber-500" />
              <span className="text-2xl font-bold">
                {analysisData.threats.filter((t) => t.severity === "medium").length}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" onValueChange={setActiveTab}>
        <TabsList className="mb-4 w-full grid-cols-4 sm:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sections">Sections</TabsTrigger>
          <TabsTrigger value="threats">Threats</TabsTrigger>
          <TabsTrigger value="document">Document</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Document Overview</CardTitle>
              <CardDescription>A summary of the document and its key points</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{analysisData.overview}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Risks</CardTitle>
              <CardDescription>The most significant issues identified in this document</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analysisData.threats
                  .filter((t) => t.severity === "high")
                  .slice(0, 3)
                  .map((threat, i) => (
                    <div key={i} className="flex gap-4 rounded-lg border p-4">
                      <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-500" />
                      <div>
                        <h3 className="font-medium">{threat.category}</h3>
                        <p className="text-sm text-muted-foreground">{threat.description}</p>
                        <p className="mt-1 text-sm font-medium">Recommendation:</p>
                        <p className="text-sm text-muted-foreground">{threat.recommendation}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sections" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Document Sections</CardTitle>
              <CardDescription>Detailed analysis of each section and subsection</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {analysisData.sections.map((section, i) => (
                  <AccordionItem key={i} value={`section-${i}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2 text-left">
                        <FileText className="h-5 w-5" />
                        <div>
                          <div>{section.title}</div>
                          {section.subsections.some((sub) => sub.risks.length > 0) && (
                            <Badge variant="outline" className="ml-2 bg-red-50 text-red-700">
                              Risks Detected
                            </Badge>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="mb-4 rounded-md bg-slate-50 p-4">
                        <p className="text-sm">{section.summary}</p>
                      </div>

                      {section.subsections.map((subsection, j) => (
                        <div key={j} className="mb-4 border-l-2 border-slate-200 pl-4">
                          <h4 className="mb-1 font-medium">{subsection.title}</h4>
                          <p className="mb-2 text-sm text-muted-foreground">{subsection.summary}</p>

                          {subsection.risks.length > 0 && (
                            <div className="mt-2 space-y-2">
                              {subsection.risks.map((risk, k) => (
                                <div key={k} className="flex gap-2 rounded-md bg-red-50 p-3">
                                  <AlertTriangle
                                    className={`h-5 w-5 flex-shrink-0 ${risk.severity === "high" ? "text-red-500" : "text-amber-500"}`}
                                  />
                                  <p className="text-sm">{risk.description}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="threats" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Identified Threats</CardTitle>
              <CardDescription>Potential issues and recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analysisData.threats.map((threat, i) => (
                  <div key={i} className="flex gap-4 rounded-lg border p-4">
                    <div className="mt-0.5">
                      {threat.severity === "high" ? (
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      ) : (
                        <Info className="h-5 w-5 text-amber-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center justify-between">
                        <h3 className="font-medium">{threat.category}</h3>
                        <Badge className={threat.severity === "high" ? "bg-red-500" : "bg-amber-500"}>
                          {threat.severity === "high" ? "High Risk" : "Medium Risk"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{threat.description}</p>
                      <div className="mt-3 rounded-md bg-slate-50 p-3">
                        <p className="text-sm font-medium">Recommendation:</p>
                        <p className="text-sm text-muted-foreground">{threat.recommendation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="document">
          <Card>
            <CardHeader>
              <CardTitle>Original Document</CardTitle>
              <CardDescription>View the original document with highlighted issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border bg-slate-50 p-6">
                <div className="flex justify-center">
                  <div className="w-full max-w-2xl space-y-4 rounded-md bg-white p-8 shadow-sm">
                    <h2 className="text-center text-xl font-bold">EMPLOYMENT AGREEMENT</h2>
                    <p className="text-center">Senior Software Engineer</p>

                    <p className="text-sm">
                      This Employment Agreement (the "Agreement") is entered into as of April 6, 2025, by and between
                      TechCorp Inc. ("Company") and John Doe ("Employee").
                    </p>

                    <h3 className="font-bold">1. EMPLOYMENT TERMS</h3>
                    <p className="text-sm">
                      1.1 <span className="font-medium">Position and Duties.</span> Employee shall serve as a Senior
                      Software Engineer and shall perform such duties as are customarily associated with such position.
                    </p>

                    <p className="text-sm">
                      1.2 <span className="font-medium">Work Location.</span>{" "}
                      <span className="bg-amber-100">
                        Employee's primary work location shall be at Company's headquarters. Company reserves the right
                        to relocate Employee to any location within 100 miles of the current headquarters without
                        additional compensation.
                      </span>
                    </p>

                    <h3 className="font-bold">2. COMPENSATION</h3>
                    <p className="text-sm">
                      2.1 <span className="font-medium">Base Salary.</span> Employee shall receive an annual base salary
                      of $120,000, payable in accordance with Company's normal payroll practices.
                    </p>

                    <p className="text-sm">
                      2.2 <span className="font-medium">Bonus Structure.</span>{" "}
                      <span className="bg-red-100">
                        Employee may be eligible to receive discretionary bonuses as determined by Company in its sole
                        discretion. Nothing in this Agreement shall be construed as a guarantee that Employee will
                        receive any bonus compensation.
                      </span>
                    </p>

                    <div className="text-center text-sm text-muted-foreground">
                      [Document preview truncated for display purposes]
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
