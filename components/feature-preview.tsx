import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Search, FileText, Shield, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Categorization",
    description: "Automatically organize files using advanced AI algorithms",
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Find files instantly with semantic search capabilities",
  },
  {
    icon: FileText,
    title: "Quick Summaries",
    description: "Get AI-powered previews without opening files",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "All processing happens locally on your device",
  },
]

export function FeaturePreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Smart Files AI?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of file management with AI-powered features designed to boost your productivity and
            keep your data secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:border-blue-300 transition-colors duration-300 text-center"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
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
