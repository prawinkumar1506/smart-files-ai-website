"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Building, Download, Clock, Check, Star } from "lucide-react"

export default function ProductsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
              Choose Your Plan
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Select the Smart Files AI solution that perfectly fits your needs, from personal productivity to
              enterprise-scale file management.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Personal Desktop App */}
            <Card className="group bg-white/80 backdrop-blur-sm border-2 border-blue-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-bl-2xl font-semibold text-sm">
                Available Now
              </div>

              <CardHeader className="pb-6 pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-slate-900 mb-2">Personal Desktop App</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-0">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                <CardDescription className="text-slate-600 text-lg leading-relaxed">
                  Perfect for individual productivity and personal file management. Get AI-powered organization right on
                  your desktop with complete privacy and control.
                </CardDescription>

                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-lg">Key Features:</h4>
                  <ul className="space-y-3">
                    {[
                      "AI-powered automatic file categorization",
                      "Smart semantic search capabilities",
                      "Quick file summarization and previews",
                      "Secure local storage with SQLite",
                      "Cross-platform support (Windows, Mac, Linux)",
                      "Privacy-first architecture",
                      "Intuitive modern interface",
                      "Lifetime free updates",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-slate-900 mb-2">Free</div>
                    <div className="text-slate-600">Open source & always free</div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <Download className="w-5 h-5 mr-2" />
                    Download Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Edition */}
            <Card className="group bg-white/60 backdrop-blur-sm border-2 border-slate-200/50 shadow-xl transition-all duration-500 rounded-3xl overflow-hidden relative opacity-90">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-bl-2xl font-semibold text-sm">
                Coming Soon
              </div>

              <CardHeader className="pb-6 pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-400 to-slate-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-slate-900 mb-2">Enterprise Edition</CardTitle>
                    <Badge variant="outline" className="border-orange-300 text-orange-600">
                      <Clock className="w-3 h-3 mr-1" />
                      Q2 2025
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                <CardDescription className="text-slate-600 text-lg leading-relaxed">
                  Designed for organizations that need advanced file management with user role-based access, enterprise
                  integrations, and centralized administration.
                </CardDescription>

                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-lg">Planned Features:</h4>
                  <ul className="space-y-3">
                    {[
                      "Everything in Personal edition",
                      "Bulk file management capabilities",
                      "User role-based access control",
                      "Advanced integrations with enterprise tools",
                      "Centralized administration dashboard",
                      "Enhanced security and compliance features",
                      "Priority support and training",
                      "Custom deployment options",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Clock className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-slate-900 mb-2">TBD</div>
                    <div className="text-slate-600">Pricing to be announced</div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-2 border-slate-300 text-slate-600 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-50 transition-all duration-300"
                    disabled
                  >
                    <Clock className="w-5 h-5 mr-2" />
                    Notify Me When Available
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-slate-900 mb-3">Is Smart Files AI really free?</h3>
                <p className="text-slate-600">
                  Yes! The Personal Desktop App is completely free and open source. We believe in making AI-powered
                  productivity tools accessible to everyone.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-slate-900 mb-3">How does the AI work?</h3>
                <p className="text-slate-600">
                  Our AI processes everything locally on your device using advanced machine learning models for file
                  categorization, search, and summarization.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-slate-900 mb-3">What about my privacy?</h3>
                <p className="text-slate-600">
                  Your data never leaves your device. All AI processing happens locally, ensuring complete privacy and
                  security of your files.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-slate-900 mb-3">Which platforms are supported?</h3>
                <p className="text-slate-600">
                  Smart Files AI is available for Windows, macOS, and Linux with native performance on each platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
