import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Target } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Hello! I'm Abhishek Singh</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate frontend developer and MERN stack enthusiast with a strong foundation in modern web
                technologies. While I'm at the beginning of my professional journey, I'm dedicated to continuous
                learning and creating exceptional user experiences.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My journey in web development started with curiosity about how websites work, and it has evolved into a
                passion for building responsive, user-friendly applications that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm actively seeking opportunities to contribute to innovative projects and grow as a developer while
                making a meaningful impact in the tech industry.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="h-8 w-8 text-primary mr-3" />
                    <h4 className="text-lg font-semibold">Clean Code</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Writing maintainable, scalable code following best practices and industry standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-8 w-8 text-primary mr-3" />
                    <h4 className="text-lg font-semibold">Problem Solving</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Approaching challenges with creativity and logical thinking to deliver effective solutions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-primary mr-3" />
                    <h4 className="text-lg font-semibold">User Focus</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Creating intuitive interfaces that prioritize user experience and accessibility.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
