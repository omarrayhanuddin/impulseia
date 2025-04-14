"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Omar Rayhan Uddin",
    position: "Co-Founder & Developer",
    bio: "With 3 years of experience in full-stack development and system architecture.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&crop=faces&fit=crop",
    social: {
      twitter: "#",
      linkedin: "https://www.linkedin.com/company/impulseia-inc/?viewAsMember=true",
      github: "#"
    }
  },
  {
    name: "Nomayen Hossain",
    position: "Co-Founder & Developer", 
    bio: "Specializes in frontend development and UI/UX design with 3 years of experience.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&crop=faces&fit=crop",
    social: {
      twitter: "#",
      linkedin: "https://www.linkedin.com/company/impulseia-inc/?viewAsMember=true",
      github: "#"
    }
  },
  {
    name: "Saif Mahin",
    position: "Co-Founder & Developer",
    bio: "Backend specialist with 3 years of experience in database design and API development.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=400&crop=faces&fit=crop",
    social: {
      linkedin: "https://www.linkedin.com/company/impulseia-inc/?viewAsMember=true",
      github: "#"
    }
  }
]

export default function TeamSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {/* Centering container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"> {/* Changed to 3 cols and justify-items-center */}
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group w-full max-w-sm" // Added max width to cards
          >
            <div className="relative overflow-hidden rounded-lg mb-4 border border-zinc-800">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={400}
                height={400}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {member.social.twitter && (
                  <Link
                    href={member.social.twitter}
                    target="_blank"
                    className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-white" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                )}
                {member.social.linkedin && (
                  <Link
                    href={member.social.linkedin}
                    target="_blank"
                    className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                )}
                {member.social.github && (
                  <Link
                    href={member.social.github}
                    target="_blank"
                    className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                  >
                    <Github className="h-5 w-5 text-white" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                )}
              </div>
            </div>
            <h3 className="text-lg font-bold text-center">{member.name}</h3> {/* Centered text */}
            <p className="text-purple-400 text-sm mb-2 text-center">{member.position}</p> {/* Centered text */}
            <p className="text-zinc-400 text-sm text-center">{member.bio}</p> {/* Centered text */}
          </motion.div>
        ))}
      </div>
    </div>
  )
}