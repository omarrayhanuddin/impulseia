"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import PulseEffect from "@/components/pulse-effect"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <PulseEffect className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-6">
              <span className="text-purple-500 mr-1">•</span> Welcome to Impulseia
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              Innovative <span className="text-purple-500">Businesses</span>  Solutions with <span className="text-purple-500">Impulseia</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              We help unleash potential businesses transform and grow with next-gen tech solutions. 🚀   
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 gap-2"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 hover:bg-zinc-800 hover:text-purple-400"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500" />
                <span className="text-sm text-white">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500" />
                <span className="text-sm text-white">Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500" />
                <span className="text-sm text-white">24/7 Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-zinc-800 ">
              <Image
                src="https://wp.pixelfit.agency/sasfy/creative-agency/wp-content/uploads/sites/7/2024/12/business-blog-5-768x497.webp"
                alt="Software Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="absolute -top-6 -left-6 bg-zinc-900 shadow-lg rounded-lg p-4 border border-zinc-800 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Project Completed</p>
                  <p className="text-xs text-white/60">Just now</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-zinc-900 shadow-lg rounded-lg p-4 border border-zinc-800 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Live Updates</p>
                  <p className="text-xs text-white/60">Real-time data</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
