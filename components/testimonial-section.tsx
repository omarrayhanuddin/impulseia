"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    "id": 1,
    "content": "Impulse transformed our outdated systems into a streamlined digital platform that increased our operational efficiency by 40%. Their team's expertise and innovative approach exceeded our expectations.",
    "author": "Sarah Johnson",
    "position": "CTO",
    "company": "TechVision Inc.",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop&crop=faces"
  },
  {
    "id": 2,
    "content": "Working with Impulse was a game-changer for our startup. They not only delivered a robust product but also provided strategic insights that helped us secure our next round of funding.",
    "author": "Michael Chen",
    "position": "Founder",
    "company": "Nexus Startups",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop&crop=faces"
  },
  {
    "id": 3,
    "content": "The e-commerce platform Impulse built for us has resulted in a 65% increase in online sales. Their attention to detail and focus on user experience made all the difference.",
    "author": "Emily Rodriguez",
    "position": "Director of Digital",
    "company": "Global Retail Solutions",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop&crop=faces"
  },
  {
    "id": 4,
    "content": "Impulse's AI-driven analytics gave us deep insights into customer behavior, boosting our retention rates by 25%. Their team’s expertise in machine learning is unmatched.",
    "author": "David Patel",
    "position": "Head of Innovation",
    "company": "FinTech Pioneers",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop&crop=faces"
  },
  {
    "id": 5,
    "content": "The cloud infrastructure Impulse designed for us improved our system uptime to 99.9%. Their proactive support made the transition seamless.",
    "author": "Lisa Thompson",
    "position": "CEO",
    "company": "Innovate Solutions",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop&crop=faces"
  },
  {
    "id": 6,
    "content": "Impulse delivered a mobile app that tripled our user engagement. Their focus on intuitive design and performance optimization was key to our success.",
    "author": "James Carter",
    "position": "Product Manager",
    "company": "ConnectSphere",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop&crop=faces"
  },
  {
    "id": 7,
    "content": "Thanks to Impulse’s cybersecurity solutions, we reduced data breach risks by 80%. Their thorough audits and rapid response were impressive.",
    "author": "Anna Kowalski",
    "position": "Chief Security Officer",
    "company": "SecureNet Enterprises",
    "avatar": "https://images.unsplash.com/photo-1524504388940-9d6ebcba3f56?q=80&w=200&h=200&auto=format&fit=crop&crop=faces"
  },
  {
    "id": 8,
    "content": "Impulse’s marketing automation tools helped us personalize campaigns, increasing our conversion rates by 50%. Their team truly understands digital strategy.",
    "author": "Rahul Sharma",
    "position": "Marketing Director",
    "company": "GrowEasy Analytics",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop&crop=faces"
  },
  {
    "id": 9,
    "content": "The supply chain platform Impulse built cut our logistics costs by 30%. Their ability to integrate complex systems was a game-changer.",
    "author": "Maria Lopez",
    "position": "Operations Lead",
    "company": "ChainWorks",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop&crop=faces"
  },
  {
    "id": 10,
    "content": "Impulse’s data visualization dashboards empowered our team to make faster, smarter decisions, improving project delivery by 20%.",
    "author": "Thomas Lee",
    "position": "VP of Strategy",
    "company": "InsightCore",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop&crop=faces"
  }
]
export default function TestimonialSection() {
  const [mounted, setMounted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="relative">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-5 gap-8 items-center"
      >
        <div className="md:col-span-2 order-2 md:order-1">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden border border-zinc-800 shadow-lg aspect-square max-w-[350px] mx-auto">
              <Image
                src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                alt={testimonials[activeIndex].author}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-purple-500/10 rounded-lg transform rotate-6 -z-10"></div>
          </div>
        </div>

        <div className="md:col-span-3 order-1 md:order-2">
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="pt-6">
              <Quote className="h-12 w-12 text-purple-500/30 mb-6" />
              <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-white">
                "{testimonials[activeIndex].content}"
              </p>
              <div>
                <h4 className="text-lg font-bold text-white">{testimonials[activeIndex].author}</h4>
                <p className="text-white/70">
                  {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <div className="flex justify-center md:justify-end gap-2 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full border-zinc-700 hover:bg-zinc-800 hover:text-purple-400"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full border-zinc-700 hover:bg-zinc-800 hover:text-purple-400"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>

      <div className="flex justify-center md:justify-end mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === activeIndex ? "bg-purple-500 w-6" : "bg-zinc-700"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
