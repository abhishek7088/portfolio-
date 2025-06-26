import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication", "Middleware", "Server-side Rendering"],
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "Mongoose", "Git", "GitHub", "VS Code", "Postman", "npm/yarn", "Webpack"],
    },
    {
      title: "MERN Stack",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Full-stack Integration", "State Management"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm py-1 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              Continuously learning and expanding my skill set to stay current with industry trends
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
