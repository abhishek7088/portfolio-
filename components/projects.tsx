import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Smart City Web App",
      description:
        "A full-stack Smart City application built with the MERN stack and styled with Tailwind CSS, featuring real-time traffic monitoring, citizen services, and integrated smart infrastructure management.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image: "/pics/smartcity.png",  // Corrected GitHub image URL
      github: "https://github.com/abhishek7088/smart-city-hackethon",  
      demo: "https://smartcity-fsd8.onrender.com/", 
    },
    {
      title: "3D Solar System",
      description:
        "A 3D solar system visualization built with HTML, CSS, JavaScript, and Three.js, showcasing planets, their orbits, and realistic animations for an immersive space experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Three.js"],
      image: "/pics/solar.png",  // Use path from public folder
      github: "https://github.com/abhishek7088/3d-solar-system",  
      demo: "https://3d-solar-system-lake.vercel.app/",    
    },
    {
      title: "DLC Website",
      description:
        "A modern DLC (Downloadable Content) website built with the MERN stack, Next.js, and TypeScript, offering users the ability to explore and download a variety of downloadable content with a seamless, user-friendly interface.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Next.js", "TypeScript"],
      image: "/pics/dlc.png",  // Use path from public folder
      github: "https://github.com/abhishek7088/DLC-website",  
      demo: "https://github.com/abhishek7088/DLC-website",    
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills, built with modern web technologies and optimized for performance.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      image: "/pics/port.png",  // Use path from public folder
      github: "https://github.com/abhishek7088/portfolio-",
      demo: "https://portfolio-seven-beta-32.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="bg-background text-foreground">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              These are some of the projects I've built to practice and showcase my skills. More projects are coming
              soon!
            </p>
            <Button variant="outline" size="lg" className="bg-background text-foreground">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
