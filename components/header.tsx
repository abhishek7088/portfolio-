"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">Abhishek Singh</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-primary transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection("home")} className="block hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="block hover:text-primary transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="block hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="block hover:text-primary transition-colors">
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
