"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Download, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Features", href: "/features" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const downloadLinks = [
  { name: "Windows", href: "#", icon: "🪟", description: "Windows 10/11 (64-bit)" },
  { name: "Mac", href: "#", icon: "🍎", description: "macOS 10.15+" },
  { name: "Linux", href: "#", icon: "🐧", description: "Ubuntu/Debian/AppImage" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-200/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg">SF</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
              Smart Files AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-all duration-300 hover:text-blue-600 relative py-2",
                  pathname === item.href ? "text-blue-600" : "text-slate-700 hover:text-blue-600",
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Download Button */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 rounded-2xl px-6 py-3">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-64 bg-white/95 backdrop-blur-md border-blue-200/50 shadow-2xl rounded-2xl p-2"
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
                        <div className="text-xs text-slate-500">{link.description}</div>
                      </div>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-blue-50 rounded-xl">
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-md border-blue-200/50">
                <div className="flex flex-col space-y-8 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-semibold transition-colors hover:text-blue-600 py-2",
                        pathname === item.href ? "text-blue-600" : "text-slate-700",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="pt-8 border-t border-slate-200">
                    <p className="text-sm font-semibold text-slate-900 mb-6">Download for:</p>
                    <div className="space-y-4">
                      {downloadLinks.map((link) => (
                        <Button
                          key={link.name}
                          variant="outline"
                          className="w-full justify-start bg-white/50 backdrop-blur-sm border-slate-200 hover:bg-blue-50 transition-all duration-300 py-4 rounded-xl"
                          asChild
                        >
                          <a href={link.href}>
                            <span className="text-xl mr-3">{link.icon}</span>
                            <div className="text-left">
                              <div className="font-semibold">{link.name}</div>
                              <div className="text-xs text-slate-500">{link.description}</div>
                            </div>
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
