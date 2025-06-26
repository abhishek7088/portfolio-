"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Abhishek Singh</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">Frontend Developer & MERN Stack Enthusiast</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Passionate about creating beautiful, responsive web applications using modern technologies. Ready to bring
            creative ideas to life through clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={scrollToContact} size="lg" className="text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <a href="https://docs.google.com/document/d/1MmsgyadKCmSe5jZrBErFEV6whiQKe2bN/edit?usp=sharing&ouid=113460495403319895129&rtpof=true&sd=true" download>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-background text-foreground">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/abhishek7088" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/abhishek-singh-b5967024a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="mailto:your-abhi7088721935@gmail.com">
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Mail className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
