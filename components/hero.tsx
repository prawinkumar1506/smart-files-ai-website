import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Download, Sparkles, Play } from "lucide-react"

const downloadLinks = [
  { name: "Windows", href: "#", icon: "🪟", description: "Windows 10/11 (64-bit)" },
  { name: "Mac", href: "#", icon: "🍎", description: "macOS 10.15+" },
  { name: "Linux", href: "#", icon: "🐧", description: "Ubuntu/Debian/AppImage" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-300/10 to-indigo-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-blue-200/50 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <Sparkles className="w-4 h-4" />
            AI-Powered File Management Revolution
          </div>

          {/* Logo Placeholder - Replace with actual logo */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
              <span className="text-white font-bold text-3xl">SF</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
            Smart Files AI
          </h1>

          {/* Subtitle */}
          <p className="text-2xl lg:text-3xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            AI-Powered Smart File Management
          </p>

          {/* Description */}
          <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your file organization with intelligent AI categorization, semantic search, and instant
            summarization. Keep your data private with local processing while boosting your productivity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 rounded-2xl"
                >
                  <Download className="w-6 h-6 mr-3" />
                  Download Now
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-72 bg-white/95 backdrop-blur-md border-blue-200/50 shadow-2xl rounded-2xl p-2"
              >
                {downloadLinks.map((link) => (
                  <DropdownMenuItem
                    key={link.name}
                    asChild
                    className="rounded-xl p-4 hover:bg-blue-50/80 transition-colors duration-200"
                  >
                    <a href={link.href} className="flex items-center gap-4 cursor-pointer">
                      <span className="text-2xl">{link.icon}</span>
                      <div>
                        <div className="font-semibold text-slate-900">Download for {link.name}</div>
                        <div className="text-sm text-slate-500">{link.description}</div>
                      </div>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/60 backdrop-blur-sm border-2 border-slate-300 hover:bg-white/80 px-10 py-4 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl"
              asChild
            >
              <a href="#demo">
                <Play className="w-6 h-6 mr-3" />
                Watch Demo
              </a>
            </Button>
          </div>

          {/* Hero Image/Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-200/50 p-8 hover:shadow-3xl transition-all duration-500">
              <div className="aspect-video bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for app screenshot */}
                <div className="text-center z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <span className="text-white font-bold text-4xl">SF</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Smart Files AI Interface</h3>
                  <p className="text-slate-600 text-lg">Clean, intuitive, and powerful file management</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-blue-400/20 rounded-2xl blur-xl" />
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-indigo-400/20 rounded-2xl blur-xl" />
                <div className="absolute top-1/2 left-8 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-12 w-3 h-3 bg-indigo-500 rounded-full animate-pulse delay-500" />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-60 animate-pulse shadow-xl" />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-60 animate-pulse delay-1000 shadow-xl" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200/50">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-600">Privacy Protected</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200/50">
              <div className="text-3xl font-bold text-indigo-600 mb-2">3+</div>
              <div className="text-slate-600">Platforms Supported</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200/50">
              <div className="text-3xl font-bold text-purple-600 mb-2">Free</div>
              <div className="text-slate-600">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
