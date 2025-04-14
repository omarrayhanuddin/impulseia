"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-2"
      >
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="p-6">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Message Sent!</h3>
                <p className="text-white/70">Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-white/50"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-white/50"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    required
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-white/50"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[150px] bg-zinc-800/50 border-zinc-700 text-white placeholder:text-white/50"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full md:w-auto bg-purple-600 hover:bg-purple-700">
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="space-y-6">
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 flex-shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-white">Our Location</h3>
                <p className="text-white/70 text-sm">Dhaka, Bangladesh - 1260</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 flex-shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-white">Phone Number</h3>
                <p className="text-white/70 text-sm">+880 1760-843880</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 flex-shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-white">Email Address</h3>
                <p className="text-white/70 text-sm">info@impulseia.com</p>
              </div>  
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}