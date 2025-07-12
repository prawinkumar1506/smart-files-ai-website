import Link from "next/link"
import { Github, Linkedin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">SF</span>
              </div>
              <span className="text-2xl font-bold">Smart Files AI</span>
            </div>
            <p className="text-blue-100 max-w-md leading-relaxed mb-6">
              AI-powered file management software that organizes, searches, and summarizes your files intelligently.
              Built with privacy and productivity in mind.
            </p>
            <div className="flex items-center gap-2 text-blue-200">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>by Prawin Kumar S</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-100">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-100">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com/prawinkumar1506/Smart-Files-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-blue-200 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/prawin-kumar-s-a60153284/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-blue-200 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="text-blue-200 text-sm">
              <p>Open Source & Free</p>
              <p>Privacy-First Design</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">© Smart Files AI 2025. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-blue-200 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-blue-200 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
