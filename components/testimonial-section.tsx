"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 101,
    content: "Impulseia's mobile app development increased our user retention by 55% in just three months. Their UX-focused approach was exactly what we needed.",
    author: "David Kim",
    position: "Product Manager",
    company: "AppVantage",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&crop=faces"
  },
  {
    id: 102,
    content: "The AI solution developed by Impulseia automated 70% of our manual processes, saving us over $250k annually in operational costs.",
    author: "Priya Patel",
    position: "Operations Director",
    company: "LogiChain Solutions",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&crop=faces"
  },
  {
    id: 103,
    content: "Impulseia's cloud migration strategy reduced our infrastructure costs by 40% while improving system reliability. Their team was knowledgeable and efficient.",
    author: "James Wilson",
    position: "IT Director",
    company: "FinTech Global",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&h=200&crop=faces"
  },
  {
    id: 104,
    content: "Our website redesign by Impulseia resulted in a 120% increase in lead generation. Their conversion rate optimization expertise was impressive.",
    author: "Sophia Martinez",
    position: "Marketing VP",
    company: "GrowthHack Digital",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&crop=faces"
  },
  {
    id: 105,
    content: "Impulseia's blockchain implementation brought transparency to our supply chain that helped us secure partnerships with two Fortune 500 companies.",
    author: "Thomas Nguyen",
    position: "Blockchain Lead",
    company: "SupplySecure",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&crop=faces"
  },
  {
    id: 106,
    content: "The cybersecurity framework developed by Impulseia helped us pass our compliance audit with zero findings - a first in our company's history.",
    author: "Olivia Smith",
    position: "CISO",
    company: "HealthData Systems",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&crop=faces"
  },
  {
    id: 107,
    content: "Impulseia's data analytics platform uncovered insights that improved our inventory turnover by 35%. Their team transformed our raw data into actionable intelligence.",
    author: "Rajiv Kapoor",
    position: "Supply Chain VP",
    company: "Retail Dynamics",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&h=200&crop=faces"
  },
  {
    id: 108,
    content: "The custom CRM Impulseia built has reduced our sales cycle by 22 days on average. Their understanding of our workflow was exceptional.",
    author: "Jennifer Lee",
    position: "Sales Director",
    company: "Enterprise Solutions",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&h=200&crop=faces"
  },
  {
    id: 109,
    content: "Impulseia's IoT implementation reduced our equipment downtime by 60% through predictive maintenance. Their hardware/software integration was flawless.",
    author: "Mohammed Ali",
    position: "Engineering Manager",
    company: "Industrial Automation Co",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=200&h=200&crop=faces"
  },
  {
    id: 110,
    content: "The machine learning models developed by Impulseia improved our fraud detection accuracy by 89%. Their data science team is world-class.",
    author: "Emma Johnson",
    position: "Risk Management Director",
    company: "PaymentSecure",
    avatar: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=200&h=200&crop=faces"
  }
];
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
