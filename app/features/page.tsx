"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Search, FileText, Shield, Monitor, Zap, Sparkles, Lock } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-based Automatic File Categorization",
    description:
      "Organizes files intelligently using advanced machine learning algorithms that understand content, context, and usage patterns.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Search,
    title: "Smart Semantic Search",
    description:
      "Find files faster with AI understanding that goes beyond keywords, using natural language processing and context awareness.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Quick Summarisation & Previews",
    description:
      "Get AI-powered summaries and intelligent previews of your documents without opening them, saving time and effort.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Secure Local Storage",
    description:
      "Your data stays completely private with SQLite database storage - no cloud required, ensuring maximum security and privacy.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: Monitor,
    title: "Cross-platform Desktop Application",
    description:
      "Available for Windows, Mac, and Linux with native performance and consistent user experience across all platforms.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Minimalistic & Intuitive UI",
    description: "Focused on productivity and ease of use with a clean, modern interface that gets out of your way.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description:
      "Get intelligent insights about your file usage patterns, duplicate detection, and optimization suggestions.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Lock,
    title: "Privacy-First Architecture",
    description:
      "Built with privacy by design - all AI processing happens locally on your device with zero data collection.",
    gradient: "from-slate-500 to-gray-500",
  },
]

export default function FeaturesPage() {
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
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-blue-200/50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="w-4 h-4" />
              Powerful AI Features
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
              Revolutionary Features
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Smart Files AI combines cutting-edge artificial intelligence with intuitive design to revolutionize how
              you manage, organize, and interact with your digital files.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-blue-200/50 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Transform Your File Management?</h2>
              <p className="text-slate-600 text-lg mb-8">
                Experience the future of file organization with Smart Files AI's powerful features.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
