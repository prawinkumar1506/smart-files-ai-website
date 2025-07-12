"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, Send, MessageCircle, Bug, Lightbulb } from "lucide-react"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    // In a real implementation, you would integrate with EmailJS or Formspree here
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Have questions about Smart Files AI? Want to provide feedback or report an issue? We'd love to hear from
              you and help make Smart Files AI even better.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-blue-200/50 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Mail className="w-8 h-8" />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-slate-700 font-semibold">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl py-3 bg-white/50 backdrop-blur-sm"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-slate-700 font-semibold">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl py-3 bg-white/50 backdrop-blur-sm"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-slate-700 font-semibold">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your question, feedback, or how we can help..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white/50 backdrop-blur-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              {/* Social Links */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
                  <CardTitle className="text-2xl">Connect with Us</CardTitle>
                  <CardDescription className="text-purple-100">
                    Follow our development journey and stay updated with the latest news.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
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
                      GitHub - Source Code & Issues
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
                      LinkedIn - Professional Updates
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 gap-6">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Bug className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">Bug Reports</h3>
                        <p className="text-slate-600 text-sm mb-3">
                          Found a bug? Please create an issue on our GitHub repository with detailed steps to reproduce.
                        </p>
                        <Button variant="outline" size="sm" className="rounded-lg bg-transparent" asChild>
                          <a
                            href="https://github.com/prawinkumar1506/Smart-Files-AI/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Report Bug
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">Feature Requests</h3>
                        <p className="text-slate-600 text-sm mb-3">
                          Have an idea for a new feature? We'd love to hear your suggestions and feedback.
                        </p>
                        <Button variant="outline" size="sm" className="rounded-lg bg-transparent" asChild>
                          <a
                            href="https://github.com/prawinkumar1506/Smart-Files-AI/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Request Feature
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">General Inquiries</h3>
                        <p className="text-slate-600 text-sm">
                          For general questions, partnerships, or media inquiries, please use the contact form or reach
                          out through our social media channels.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
