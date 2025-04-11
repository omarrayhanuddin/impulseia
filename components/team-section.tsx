"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Alex Morgan",
    position: "CEO & Founder",
    bio: "With over 15 years of experience in software development and technology leadership.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&w=400&h=400&crop=faces&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Jamie Taylor",
    position: "CTO",
    bio: "Jamie leads our technical strategy and oversees all development projects.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop&w=400&h=400&crop=faces&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sam Rivera",
    position: "Lead Developer",
    bio: "Sam specializes in full-stack development and has led numerous complex projects.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop&w=400&h=400&crop=faces&fit=crop",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Jordan Lee",
    position: "AI Specialist",
    bio: "Jordan brings deep expertise in machine learning and artificial intelligence.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2761&auto=format&fit=crop&w=400&h=400&crop=faces&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="group"
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
                  className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                >
                  <Twitter className="h-5 w-5 text-white" />
                  <span className="sr-only">Twitter</span>
                </Link>
              )}
              {member.social.linkedin && (
                <Link
                  href={member.social.linkedin}
                  className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              )}
              {member.social.github && (
                <Link
                  href={member.social.github}
                  className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                >
                  <Github className="h-5 w-5 text-white" />
                  <span className="sr-only">GitHub</span>
                </Link>
              )}
            </div>
          </div>
          <h3 className="text-lg font-bold">{member.name}</h3>
          <p className="text-purple-400 text-sm mb-2">{member.position}</p>
          <p className="text-zinc-400 text-sm">{member.bio}</p>
        </motion.div>
      ))}
    </div>
  )
}
