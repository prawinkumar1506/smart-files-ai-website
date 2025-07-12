"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Trophy, GraduationCap, Code, Heart, Target, Users } from "lucide-react"

export default function AboutPage() {
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
              About Smart Files AI
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Smart Files AI is an AI-powered file management software developed as part of Code for Bharat Season 2 and
              other national hackathons. Our mission is to automate and simplify file organization, search, and
              summarization using cutting-edge AI technologies.
            </p>
          </div>

          {/* Developer Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-blue-200/50 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl mb-2">Meet the Developer</CardTitle>
                    <CardDescription className="text-blue-100 text-xl">Prawin Kumar S</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg mb-2">Education</h3>
                        <p className="text-slate-700 font-semibold">Undergraduate Student</p>
                        <p className="text-slate-600">SSN College of Engineering, Chennai</p>
                        <p className="text-slate-500 text-sm mt-1">Computer Science & Engineering</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg mb-3">Achievements</h3>
                        <div className="space-y-2">
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 mr-2 mb-2">
                            🏆 IITM Paradox Top 7 (₹5000 prize)
                          </Badge>
                          <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 mr-2 mb-2">
                            IEEE Xtreme Participant
                          </Badge>
                          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 mr-2 mb-2">
                            Intel GenAI Hackathon
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-bold text-slate-900 text-lg">Connect with Prawin</h3>
                    <div className="space-y-4">
                      <Button
                        variant="outline"
                        className="w-full justify-start bg-white/50 backdrop-blur-sm border-slate-200 hover:bg-white/80 transition-all duration-300 py-3 rounded-xl"
                        asChild
                      >
                        <a
                          href="https://github.com/prawinkumar1506/Smart-Files-AI"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5 mr-3" />
                          GitHub - Smart Files AI Repository
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start bg-white/50 backdrop-blur-sm border-slate-200 hover:bg-white/80 transition-all duration-300 py-3 rounded-xl"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/prawin-kumar-s-a60153284/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-5 h-5 mr-3" />
                          LinkedIn Profile
                        </a>
                      </Button>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mt-6">
                      <h4 className="font-bold text-slate-900 mb-2">Quick Stats</h4>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">3+</div>
                          <div className="text-slate-600 text-sm">Hackathons</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-indigo-600">1</div>
                          <div className="text-slate-600 text-sm">AI Product</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
                <div className="flex items-center gap-3">
                  <Target className="w-8 h-8" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-600 leading-relaxed">
                  To democratize AI-powered file management by creating intuitive, privacy-first tools that help
                  individuals and organizations efficiently organize, search, and understand their digital assets
                  without compromising data security.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-600 leading-relaxed">
                  To become the leading AI-powered file management solution that transforms how people interact with
                  their digital files, making file organization effortless and intelligent for everyone, everywhere.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Story Section */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden max-w-6xl mx-auto">
            <CardHeader className="p-8">
              <CardTitle className="text-3xl text-slate-900 mb-4 flex items-center gap-3">
                <Heart className="w-8 h-8 text-red-500" />
                The Story Behind Smart Files AI
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed">
                In today's digital age, we generate and consume vast amounts of data daily. Traditional file management
                systems often fall short in helping users efficiently organize, search, and understand their digital
                assets. This challenge became the inspiration for Smart Files AI.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Developed during hackathons and coding competitions, Smart Files AI bridges this gap by leveraging
                artificial intelligence to provide intelligent file categorization, semantic search capabilities, and
                instant content summarization. The goal is to make file management effortless and intuitive, allowing
                users to focus on what matters most - their work and creativity.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Built with privacy in mind, Smart Files AI processes everything locally on your device, ensuring your
                data remains secure and private while delivering powerful AI-driven insights. This privacy-first
                approach sets it apart from cloud-based solutions and gives users complete control over their data.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mt-8">
                <h3 className="font-bold text-slate-900 text-xl mb-4">Why Open Source?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Smart Files AI is open source because we believe that powerful productivity tools should be accessible
                  to everyone. By making the code freely available, we enable developers worldwide to contribute,
                  improve, and customize the software to meet their specific needs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
