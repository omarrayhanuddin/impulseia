"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechVision Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "Impulseia transformed our outdated systems into a streamlined digital platform that increased our operational efficiency by 40%. Their team's expertise and innovative approach exceeded our expectations.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder",
    company: "Nexus Startups",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with Impulseia was a game-changer for our startup. They not only delivered a robust product but also provided strategic insights that helped us secure our next round of funding.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Director of Digital",
    company: "Global Retail Solutions",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "The e-commerce platform Impulseia built for us has resulted in a 65% increase in online sales. Their attention to detail and focus on user experience made all the difference.",
  },
  {
    id: 4,
    name: "David Patel",
    position: "Head of Innovation",
    company: "FinTech Pioneers",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "Impulseia's AI-powered analytics solution has given us unprecedented insights into customer behavior. Their team's deep expertise in machine learning and financial services was evident throughout the project.",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative overflow-hidden py-10"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="max-w-4xl mx-auto px-4">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="relative"
          >
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 md:p-10">
              <Quote className="h-12 w-12 text-purple-500/30 mb-6" />
              <p className="text-xl md:text-2xl font-medium mb-8 text-zinc-200 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center">
                <div className="mr-4 rounded-full overflow-hidden h-14 w-14 border-2 border-purple-500/30">
                  <Image
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-zinc-400 text-sm">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full border-zinc-800 hover:bg-purple-500/10 hover:text-purple-400"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full border-zinc-800 hover:bg-purple-500/10 hover:text-purple-400"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? "bg-purple-500 w-6" : "bg-zinc-700"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}