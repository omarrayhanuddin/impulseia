"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => {
        setSubscribed(false)
      }, 3000)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-white/80 max-w-2xl mx-auto mb-8">
        Stay up to date with the latest news, updates, and insights from our team of experts.
      </p>

      {subscribed ? (
        <div className="bg-white/10 rounded-lg p-4 max-w-md mx-auto">
          <p className="text-white">Thanks for subscribing! We'll be in touch soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="secondary" className="bg-white hover:bg-white/90 text-purple-900">
            Subscribe
          </Button>
        </form>
      )}
    </motion.div>
  )
}
