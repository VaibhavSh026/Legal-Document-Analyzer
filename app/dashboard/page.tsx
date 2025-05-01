"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, FileText, FileUp, LayoutDashboard, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const recentDocuments = [
    {
      id: "sample",
      title: "Employment Contract - Senior Software Engineer",
      date: "April 6, 2025",
      riskScore: 65,
      status: "high",
    },
    {
      id: "doc2",
      title: "Non-Disclosure Agreement - Project Alpha",
      date: "April 4, 2025",
      riskScore: 25,
      status: "low",
    },
    {
      id: "doc3",
      title: "Service Agreement - Cloud Hosting",
      date: "April 1, 2025",
      riskScore: 45,
      status: "medium",
    },
  ]

  return (
    <div className="flex min-h-screen">
      <div className="hidden w-64 flex-col border-r bg-muted/40 md:flex">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <FileText className="h-5 w-5" />
            <span>DocuGuard</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-all"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/upload"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <FileUp className="h-4 w-4" />
              Upload Document
            </Link>
            <Link
              href="/documents"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <FileText className="h-4 w-4" />
              My Documents
            </Link>
            <Link
              href="/analytics"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="mt-auto border-t p-4">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2">
            <User className="h-4 w-4" />
            <div className="text-sm">
              <div className="font-medium">John Doe</div>
              <div className="text-xs text-muted-foreground">Premium Plan</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
          <div className="flex items-center gap-2 md:hidden">
            <FileText className="h-5 w-5" />
            <span className="font-semibold">DocuGuard</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Link href="/upload">
              <Button>
                <FileUp className="mr-2 h-4 w-4" />
                Upload Document
              </Button>
            </Link>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>

          <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="documents">Recent Documents</TabsTrigger>
              <TabsTrigger value="subscription">Subscription</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">+1 from last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">High Risk Documents</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1</div>
                    <p className="text-xs text-muted-foreground">+1 from last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Risk Score</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45</div>
                    <p className="text-xs text-muted-foreground">+12 from last week</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your document analysis activity</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-slate-100 p-2">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Employment Contract analyzed</p>
                        <p className="text-xs text-muted-foreground">April 6, 2025</p>
                      </div>
                      <Badge className="bg-red-500">High Risk</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-slate-100 p-2">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">NDA analyzed</p>
                        <p className="text-xs text-muted-foreground">April 4, 2025</p>
                      </div>
                      <Badge className="bg-green-500">Low Risk</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-slate-100 p-2">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Service Agreement analyzed</p>
                        <p className="text-xs text-muted-foreground">April 1, 2025</p>
                      </div>
                      <Badge className="bg-amber-500">Medium Risk</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/documents" className="w-full">
                      <Button variant="outline" className="w-full">
                        View All Documents
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common tasks you can perform</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link href="/upload">
                      <Button variant="outline" className="w-full justify-start">
                        <FileUp className="mr-2 h-4 w-4" />
                        Upload New Document
                      </Button>
                    </Link>
                    <Link href="/documents">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Browse Documents
                      </Button>
                    </Link>
                    <Link href="/settings">
                      <Button variant="outline" className="w-full justify-start">
                        <Settings className="mr-2 h-4 w-4" />
                        Account Settings
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Documents</CardTitle>
                  <CardDescription>Your recently analyzed documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentDocuments.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-slate-100 p-2">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <Link href={`/analysis/${doc.id}`} className="font-medium hover:underline">
                              {doc.title}
                            </Link>
                            <p className="text-sm text-muted-foreground">Analyzed on {doc.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm font-medium">Risk Score</p>
                            <p className="text-sm">{doc.riskScore}/100</p>
                          </div>
                          <Badge
                            className={
                              doc.status === "high"
                                ? "bg-red-500"
                                : doc.status === "medium"
                                  ? "bg-amber-500"
                                  : "bg-green-500"
                            }
                          >
                            {doc.status === "high" ? "High Risk" : doc.status === "medium" ? "Medium Risk" : "Low Risk"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/documents" className="w-full">
                    <Button variant="outline" className="w-full">
                      View All Documents
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="subscription" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Subscription</CardTitle>
                  <CardDescription>Manage your subscription plan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border border-green-100 bg-green-50 p-4">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-500">Active</Badge>
                      <h3 className="font-medium">Premium Plan</h3>
                    </div>
                    <p className="mt-2 text-sm">Your subscription renews on May 6, 2025</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Plan Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Unlimited document analyses
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Unlimited pages per document
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Advanced threat detection
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Priority support
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button variant="outline" className="w-full">
                    Manage Subscription
                  </Button>
                  <Button variant="outline" className="w-full text-red-500 hover:bg-red-50 hover:text-red-600">
                    Cancel Subscription
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
