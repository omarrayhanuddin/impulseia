"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    content:
      "Impulse transformed our outdated systems into a streamlined digital platform that increased our operational efficiency by 40%. Their team's expertise and innovative approach exceeded our expectations.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "TechVision Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&w=100&h=100&crop=faces&fit=crop",
  },
  {
    id: 2,
    content:
      "Working with Impulse was a game-changer for our startup. They not only delivered a robust product but also provided strategic insights that helped us secure our next round of funding.",
    author: "Michael Chen",
    position: "Founder",
    company: "Nexus Startups",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&w=100&h=100&crop=faces&fit=crop",
  },
  {
    id: 3,
    content:
      "The e-commerce platform Impulse built for us has resulted in a 65% increase in online sales. Their attention to detail and focus on user experience made all the difference.",
    author: "Emily Rodriguez",
    position: "Director of Digital",
    company: "Global Retail Solutions",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop&w=100&h=100&crop=faces&fit=crop",
  },
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
