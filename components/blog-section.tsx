"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const articles = [
  {
    title: "10 Software Development Trends to Watch in 2023",
    excerpt: "Stay ahead of the curve with these emerging trends that are shaping the future of software development.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop",
    date: "June 15, 2023",
    author: "Alex Morgan",
    category: "Technology",
  },
  {
    title: "How AI is Transforming Business Operations",
    excerpt: "Discover how artificial intelligence is revolutionizing the way businesses operate and make decisions.",
    image: "https://images.unsplash.com/photo-1677442135136-760c813dce9a?q=80&w=2070&auto=format&fit=crop",
    date: "May 28, 2023",
    author: "Jamie Taylor",
    category: "Artificial Intelligence",
  },
  {
    title: "The Ultimate Guide to Cloud Migration",
    excerpt: "Everything you need to know about moving your business operations to the cloud safely and efficiently.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    date: "April 10, 2023",
    author: "Sam Rivera",
    category: "Cloud Computing",
  },
]

export default function BlogSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <Card className="h-full overflow-hidden border-zinc-800 bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300">
            <div className="relative overflow-hidden aspect-[3/2]">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                {article.category}
              </div>
            </div>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 text-xs text-zinc-400 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  <span>{article.author}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
              <p className="text-zinc-400 text-sm line-clamp-3">{article.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="p-0 h-auto text-purple-400 hover:text-purple-300">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
