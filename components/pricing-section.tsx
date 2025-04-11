"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const plans = [
  {
    name: "Basic",
    description: "Perfect for small businesses and startups",
    monthlyPrice: 49,
    yearlyPrice: 490,
    features: ["Up to 5 team members", "10 projects", "5GB storage", "Basic support", "48-hour response time"],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and teams",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      "Up to 20 team members",
      "Unlimited projects",
      "50GB storage",
      "Priority support",
      "24-hour response time",
      "Advanced analytics",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "500GB storage",
      "24/7 dedicated support",
      "1-hour response time",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated account manager",
    ],
    popular: false,
  },
]

export default function PricingSection() {
  const [mounted, setMounted] = useState(false)
  const [yearly, setYearly] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <div className="flex justify-center mb-12">
        <div className="flex items-center gap-4 rounded-full border border-zinc-800 p-1 px-4">
          <span className={yearly ? "text-zinc-400" : "font-medium"}>Monthly</span>
          <Switch checked={yearly} onCheckedChange={setYearly} />
          <span className={!yearly ? "text-zinc-400" : "font-medium"}>Yearly</span>
          {yearly && (
            <span className="bg-purple-500/10 text-purple-400 text-xs font-medium px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card
              className={`h-full bg-zinc-900/50 ${
                plan.popular
                  ? "border-purple-500 shadow-lg shadow-purple-500/10"
                  : "border-zinc-800 hover:border-purple-500/50"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-t-lg w-fit mx-auto">
                  Most Popular
                </div>
              )}
              <CardHeader className="pt-6">
                <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
                <p className="text-zinc-400 text-center">{plan.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold">${yearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="text-zinc-400">/{yearly ? "year" : "month"}</span>
                </div>

                <ul className="space-y-3 text-left mb-6 text-white">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-500/10 text-purple-400 hover:bg-purple-600 hover:text-white"}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
