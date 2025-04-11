"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, ChevronRight, Code, Database, Globe, Layers, Lock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import PartnerSection from "@/components/partner-section"
import ServiceCard from "@/components/service-card"
import TestimonialSection from "@/components/testimonial-section"
import CounterSection from "@/components/counter-section"
import TeamSection from "@/components/team-section"
import PricingSection from "@/components/pricing-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import NewsletterSection from "@/components/newsletter-section"
import PulseEffect from "@/components/pulse-effect"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <AnimatedBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold">Impulseia</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#home" className="text-sm font-medium text-white/80 hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-white/80 hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-white/80 hover:text-purple-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium text-white/80 hover:text-purple-400 transition-colors"
            >
              Portfolio
            </Link>
            <Link href="#team" className="text-sm font-medium text-white/80 hover:text-purple-400 transition-colors">
              Team
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-white/80 hover:text-purple-400 transition-colors">
              Pricing
            </Link>
            <Link href="#blog" className="text-sm font-medium text-white/80 hover:text-purple-400 transition-colors">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium text-white/80 hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:flex border-purple-700 bg-white text-black hover:bg-purple-800 hover:text-white"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Log In
            </Button>
            <Button
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-purple-400"
              onClick={() => alert("Mobile menu coming soon!")}
            >
              <Layers className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Partner Section */}
        <section id="partners" className="py-12 md:py-16 bg-zinc-900/50">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight mb-2 text-white">Trusted by Industry Leaders</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We're proud to partner with some of the world's most innovative companies
              </p>
            </div>
            <PartnerSection />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 relative overflow-hidden">
          <PulseEffect className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10" />

          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-4">
                <span className="text-purple-500 mr-1">•</span> Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                Comprehensive Software Solutions
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We offer a full spectrum of services to bring your digital vision to life, from concept to deployment
                and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Code className="h-10 w-10" />}
                title="Custom Software Development"
                description="Tailored solutions designed to address your specific business challenges and requirements."
                features={["Enterprise Applications", "SaaS Platforms", "Mobile Applications"]}
              />
              <ServiceCard
                icon={<Globe className="h-10 w-10" />}
                title="Web Development"
                description="Stunning, responsive websites and web applications that engage users and drive conversions."
                features={["Progressive Web Apps", "E-commerce Solutions", "Content Management"]}
              />
              <ServiceCard
                icon={<Database className="h-10 w-10" />}
                title="Cloud Solutions"
                description="Scalable, secure cloud infrastructure and migration services for modern businesses."
                features={["Cloud Architecture", "DevOps Implementation", "Serverless Applications"]}
              />
              <ServiceCard
                icon={<Zap className="h-10 w-10" />}
                title="AI & Machine Learning"
                description="Intelligent solutions that learn and adapt to your business needs and challenges."
                features={["Predictive Analytics", "Natural Language Processing", "Computer Vision"]}
              />
              <ServiceCard
                icon={<Lock className="h-10 w-10" />}
                title="Cybersecurity"
                description="Protect your business with comprehensive security solutions and best practices."
                features={["Security Audits", "Penetration Testing", "Compliance Solutions"]}
              />
              <ServiceCard
                icon={<Layers className="h-10 w-10" />}
                title="Digital Transformation"
                description="Strategic guidance to maximize the impact of your digital investments and initiatives."
                features={["Process Automation", "Legacy Modernization", "Digital Strategy"]}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-zinc-900/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden border border-zinc-800">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                    alt="About Impulse"
                    width={800}
                    height={600}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-lg hidden md:block">
                  <p className="text-4xl font-bold">10+</p>
                  <p className="text-sm">Years of Experience</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium">
                  <span className="text-purple-500 mr-1">•</span> About Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  We Create Digital Solutions With <span className="text-purple-500">Impulse</span>
                </h2>
                <p className="text-white/70">
                  Impulse is a leading software development company dedicated to helping businesses leverage technology
                  to achieve their goals. With over a decade of experience, we've helped hundreds of clients transform
                  their operations and reach new heights.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Innovative Solutions</h3>
                      <p className="text-sm text-white/70">Cutting-edge technology for modern challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Expert Team</h3>
                      <p className="text-sm text-white/70">Skilled professionals with diverse expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Client-Focused</h3>
                      <p className="text-sm text-white/70">Your success is our top priority</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Agile Methodology</h3>
                      <p className="text-sm text-white/70">Flexible, iterative approach to development</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-zinc-700 hover:bg-zinc-800 hover:text-purple-400"
                    onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Our Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Counter Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
          <div className="container">
            <CounterSection />
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 md:py-24 relative overflow-hidden">
          <PulseEffect className="absolute top-1/4 right-0 opacity-10" />
          <PulseEffect className="absolute bottom-1/4 left-0 opacity-10" />

          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-4">
                <span className="text-purple-500 mr-1">•</span> Our Portfolio
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Our Recent Projects</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Explore our portfolio of successful projects that have helped businesses transform and grow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                    alt="Project 1"
                    width={600}
                    height={400}
                    className="object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white"
                      onClick={() => alert("Project details coming soon!")}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5 bg-zinc-900">
                  <div className="text-sm text-purple-400 font-medium mb-2">Web Development</div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    Financial Dashboard
                  </h3>
                  <p className="text-white/70 text-sm">
                    A comprehensive financial analytics platform with real-time data visualization.
                  </p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop"
                    alt="Project 2"
                    width={600}
                    height={400}
                    className="object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white"
                      onClick={() => alert("Project details coming soon!")}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5 bg-zinc-900">
                  <div className="text-sm text-purple-400 font-medium mb-2">Mobile App</div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    Health Tracker
                  </h3>
                  <p className="text-white/70 text-sm">
                    Mobile application for tracking health metrics with AI-powered recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
                    alt="Project 3"
                    width={600}
                    height={400}
                    className="object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white"
                      onClick={() => alert("Project details coming soon!")}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5 bg-zinc-900">
                  <div className="text-sm text-purple-400 font-medium mb-2">E-commerce</div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    Online Marketplace
                  </h3>
                  <p className="text-white/70 text-sm">
                    Scalable e-commerce solution with inventory management and payment processing.
                  </p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
                    alt="Project 4"
                    width={600}
                    height={400}
                    className="object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white"
                      onClick={() => alert("Project details coming soon!")}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5 bg-zinc-900">
                  <div className="text-sm text-purple-400 font-medium mb-2">AI & Machine Learning</div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    Predictive Maintenance
                  </h3>
                  <p className="text-white/70 text-sm">
                    AI-powered system for predicting equipment failures and scheduling maintenance.
                  </p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                    alt="Project 5"
                    width={600}
                    height={400}
                    className="object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white"
                      onClick={() => alert("Project details coming soon!")}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5 bg-zinc-900">
                  <div className="text-sm text-purple-400 font-medium mb-2">IoT</div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    Smart City Platform
                  </h3>
                  <p className="text-white/70 text-sm">
                    Integrated platform for managing urban infrastructure with real-time monitoring.
                  </p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2070&auto=format&fit=crop"
                    alt="Project 6"
                    width={600}
                    height={400}
                    className="object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white"
                      onClick={() => alert("Project details coming soon!")}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5 bg-zinc-900">
                  <div className="text-sm text-purple-400 font-medium mb-2">Mobile App</div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    Delivery Tracking
                  </h3>
                  <p className="text-white/70 text-sm">
                    Mobile application for real-time package tracking and route optimization.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-12">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => alert("More projects coming soon!")}
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-zinc-900/50">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-4">
                <span className="text-purple-500 mr-1">•</span> Testimonials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">What Our Clients Say</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Don't just take our word for it. Hear from the businesses we've helped transform
              </p>
            </div>

            <TestimonialSection />
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 md:py-24 relative overflow-hidden">
          <PulseEffect className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10" />

          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-4">
                <span className="text-purple-500 mr-1">•</span> Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Meet Our Experts</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our talented team combines technical expertise with creative energy to deliver exceptional results
              </p>
            </div>

            <TeamSection />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 bg-zinc-900/50">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-4">
                <span className="text-purple-500 mr-1">•</span> Pricing Plans
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                Choose the Right Plan for Your Business
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We offer flexible pricing options to meet the needs of businesses of all sizes
              </p>
            </div>

            <PricingSection />
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-4">
                <span className="text-purple-500 mr-1">•</span> Latest News
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Our Latest Articles</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Stay up to date with the latest trends, insights, and news from our team
              </p>
            </div>

            <BlogSection />

            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 hover:bg-zinc-800 hover:text-purple-400"
                onClick={() => alert("More articles coming soon!")}
              >
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
          <div className="container">
            <NewsletterSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
          <PulseEffect className="absolute top-1/4 right-1/4 opacity-10" />
          <PulseEffect className="absolute bottom-1/4 left-1/4 opacity-10" />

          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-4">
                <span className="text-purple-500 mr-1">•</span> Contact Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Get in Touch With Us</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Have a question or want to discuss a project? We'd love to hear from you
              </p>
            </div>

            <ContactSection />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900/50 border-t border-zinc-800 py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-purple-500" />
                <span className="text-xl font-bold">Impulse</span>
              </Link>
              <p className="text-white/70">
                We create digital solutions for your business growth with innovative technology and expert teams.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-white/60 hover:text-purple-400">
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
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-white/60 hover:text-purple-400">
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
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-white/60 hover:text-purple-400">
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
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-white/60 hover:text-purple-400">
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
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-white/70 hover:text-purple-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/70 hover:text-purple-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-white/70 hover:text-purple-400">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-white/70 hover:text-purple-400">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-purple-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white/70 hover:text-purple-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-white/70 hover:text-purple-400">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/70 hover:text-purple-400">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/70 hover:text-purple-400">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/70 hover:text-purple-400">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/70 hover:text-purple-400">
                    AI & Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/70 hover:text-purple-400">
                    Cybersecurity
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
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
                    className="mt-1 text-purple-500"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-white/70">123 Business Avenue, Tech District, San Francisco, CA 94107</span>
                </li>
                <li className="flex items-center gap-3">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-white/70">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-white/70">info@impulse.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} Impulse. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-white/60 hover:text-purple-400">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-white/60 hover:text-purple-400">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-white/60 hover:text-purple-400">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
