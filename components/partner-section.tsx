"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const partners = [
  {
    name: "Company 1",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&w=150&h=60&crop=entropy&fit=crop",
  },
  {
    name: "Company 2",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&w=150&h=60&crop=entropy&fit=crop",
  },
  {
    name: "Company 3",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&w=150&h=60&crop=entropy&fit=crop",
  },
  {
    name: "Company 4",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&w=150&h=60&crop=entropy&fit=crop",
  },
  {
    name: "Company 5",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&w=150&h=60&crop=entropy&fit=crop",
  },
  {
    name: "Company 6",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&w=150&h=60&crop=entropy&fit=crop",
  },
]

export default function PartnerSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
    >
      {partners.map((partner, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300"
        >
          <Image
            src={partner.logo || "/placeholder.svg"}
            alt={partner.name}
            width={150}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
