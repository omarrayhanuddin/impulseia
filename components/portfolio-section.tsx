"use client"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import PulseEffect from "@/components/pulse-effect"

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
      <PulseEffect className="absolute top-1/4 right-0 opacity-10" />
      <PulseEffect className="absolute bottom-1/4 left-0 opacity-10" />

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium mb-4 bg-zinc-800/40 backdrop-blur">
            <span className="text-purple-500 mr-2 animate-pulse">●</span> Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Our Recent Work
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Discover how we've helped brands grow through design and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Featured Card (Double Width) */}
          <Card className="group overflow-hidden border border-zinc-800 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:border-purple-500 md:col-span-2 row-span-2">
            <div className="relative h-full">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Financial Dashboard"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <span className="text-sm text-purple-400 font-semibold uppercase tracking-wide mb-2">Featured Project</span>
                <h3 className="text-3xl font-bold mb-3 text-white">Financial Dashboard</h3>
                <p className="text-white/80 mb-6 max-w-lg">Comprehensive financial analytics platform with real-time data visualization and predictive insights.</p>
                <Button variant="outline" className="w-fit border-purple-500 text-purple-400 hover:bg-purple-500/10">
                  View Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Medium Vertical Card */}
          <Card className="group overflow-hidden border border-zinc-800 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:border-purple-500 row-span-1">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop"
                alt="Health Tracker"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <Button variant="ghost" size="sm" className="bg-purple-600/60 text-white backdrop-blur-sm">
                  View Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="text-xs text-purple-400 font-semibold uppercase tracking-wide mb-2">Mobile App</div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                Health Tracker
              </h3>
              <p className="text-white/70 text-sm">AI-powered health metrics tracking with personalized recommendations.</p>
            </CardContent>
          </Card>

          {/* Small Square Card */}
          <Card className="group overflow-hidden border border-zinc-800 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:border-purple-500 row-span-1">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
                alt="Online Marketplace"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Online Marketplace</h3>
                <Button variant="ghost" size="sm" className="w-fit bg-purple-600/60 text-white backdrop-blur-sm">
                  View Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Medium Horizontal Card */}
          <Card className="group overflow-hidden border border-zinc-800 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:border-purple-500 md:col-span-2 row-span-1">
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative md:w-1/2 h-48 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
                  alt="Predictive Maintenance"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-purple-400 font-semibold uppercase tracking-wide mb-2">AI Solution</div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">Predictive Maintenance</h3>
                  <p className="text-white/70 mb-4">AI-powered system for predicting industrial equipment failures.</p>
                </div>
                <Button variant="outline" className="w-fit border-purple-500 text-purple-400 hover:bg-purple-500/10">
                  View Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Tall Vertical Card */}
          <Card className="group overflow-hidden border border-zinc-800 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:border-purple-500 row-span-2">
            <div className="relative h-full">
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                alt="Smart City Platform"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black/90 flex flex-col justify-end p-6">
                <div className="text-xs text-purple-400 font-semibold uppercase tracking-wide mb-2">IoT Platform</div>
                <h3 className="text-2xl font-bold mb-2 text-white">Smart City</h3>
                <p className="text-white/80 text-sm mb-4">Integrated urban infrastructure management system.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['IoT', 'AI', 'Big Data', 'Cloud'].map((tech) => (
                    <span key={tech} className="text-xs bg-zinc-800 px-2 py-1 rounded-full text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-fit border-purple-500 text-purple-400 hover:bg-purple-500/10">
                  View Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex justify-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all"
          >
            Explore Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}