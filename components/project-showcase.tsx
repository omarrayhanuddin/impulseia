"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Code, Globe, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "FinTech Dashboard",
    description:
      "A comprehensive financial analytics dashboard with real-time data visualization and predictive insights.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    technologies: ["React", "Node.js", "D3.js", "MongoDB"],
    link: "#",
  },
  {
    id: 2,
    title: "Health Tracker App",
    description:
      "Mobile application for tracking health metrics, exercise routines, and nutrition with personalized recommendations.",
    image: "/placeholder.svg?height=600&width=800",
    category: "mobile",
    technologies: ["React Native", "Firebase", "TensorFlow Lite"],
    link: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Scalable e-commerce solution with inventory management, payment processing, and customer analytics.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    link: "#",
  },
  {
    id: 4,
    title: "Predictive Maintenance System",
    description: "AI-powered system for predicting equipment failures and scheduling maintenance to minimize downtime.",
    image: "/placeholder.svg?height=600&width=800",
    category: "ai",
    technologies: ["Python", "TensorFlow", "AWS", "IoT"],
    link: "#",
  },
  {
    id: 5,
    title: "Smart City Platform",
    description:
      "Integrated platform for managing urban infrastructure, traffic, and public services with real-time monitoring.",
    image: "/placeholder.svg?height=600&width=800",
    category: "ai",
    technologies: ["Python", "React", "Kafka", "Computer Vision"],
    link: "#",
  },
  {
    id: 6,
    title: "Delivery Tracking App",
    description: "Mobile application for real-time package tracking, delivery notifications, and route optimization.",
    image: "/placeholder.svg?height=600&width=800",
    category: "mobile",
    technologies: ["Flutter", "Google Maps API", "Firebase"],
    link: "#",
  },
]

interface ProjectShowcaseProps {
  category?: string
}

export default function ProjectShowcase({ category = "all" }: ProjectShowcaseProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = category === "all" ? projects : projects.filter((project) => project.category === category)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return <Globe className="h-4 w-4" />
      case "mobile":
        return <Smartphone className="h-4 w-4" />
      case "ai":
        return <Code className="h-4 w-4" />
      default:
        return <Code className="h-4 w-4" />
    }
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1 text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded-full">
                  {getCategoryIcon(project.category)}
                  <span className="capitalize">{project.category}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="text-xs bg-zinc-800 px-2 py-1 rounded-full text-zinc-300">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs bg-zinc-800 px-2 py-1 rounded-full text-zinc-300">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              <Button
                variant="ghost"
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-0"
                onClick={() => setSelectedProject(project)}
              >
                View Project <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="sm:max-w-[700px] bg-zinc-900 border-zinc-800">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-zinc-400">{selectedProject.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <div className="rounded-lg overflow-hidden mb-6">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={800}
                  height={600}
                  className="object-cover w-full"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-zinc-800 px-2 py-1 rounded-full text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Category</h4>
                  <div className="flex items-center gap-1 text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded-full w-fit">
                    {getCategoryIcon(selectedProject.category)}
                    <span className="capitalize">{selectedProject.category}</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button asChild>
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                      Visit Project <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}