import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Search, FileText, Shield, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Categorization",
    description: "Automatically organize files using advanced AI algorithms that understand content and context",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Find files instantly with semantic search that goes beyond simple keyword matching",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Quick Summaries",
    description: "Get AI-powered previews and summaries of your files without opening them",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "All processing happens locally on your device - your data never leaves your computer",
    gradient: "from-red-500 to-orange-500",
  },
]

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
            Why Choose Smart Files AI?
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Experience the future of file management with AI-powered features designed to boost your productivity while
            keeping your data completely secure and private.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-3xl overflow-hidden"
            >
              <CardHeader className="pb-4 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-slate-600 leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="bg-white/60 backdrop-blur-sm border-2 border-slate-300 hover:bg-white/80 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl"
            asChild
          >
            <a href="/features">
              Explore All Features
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
