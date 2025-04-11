"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Award, Code, Users, Zap } from "lucide-react"

const counters = [
  {
    icon: <Users className="h-8 w-8" />,
    value: 500,
    label: "Happy Clients",
    suffix: "+",
  },
  {
    icon: <Code className="h-8 w-8" />,
    value: 1250,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: 15,
    label: "Years of Experience",
    suffix: "+",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    value: 25,
    label: "Expert Team Members",
    suffix: "+",
  },
]

export default function CounterSection() {
  const [mounted, setMounted] = useState(false)
  const [counts, setCounts] = useState(counters.map(() => 0))

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, i) => {
          const target = counters[i].value
          const increment = Math.ceil(target / 50)
          const newCount = Math.min(count + increment, target)
          return newCount
        }),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [mounted])

  if (!mounted) {
    return null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {counters.map((counter, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="mx-auto h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
            {counter.icon}
          </div>
          <div className="text-4xl font-bold mb-2">
            {counts[index]}
            {counter.suffix}
          </div>
          <p className="text-white/80">{counter.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
