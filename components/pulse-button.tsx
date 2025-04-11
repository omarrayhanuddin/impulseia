"use client"

import { forwardRef } from "react"
import Link from "next/link"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PulseButtonProps extends ButtonProps {
  href?: string
}

const PulseButton = forwardRef<HTMLButtonElement, PulseButtonProps>(({ className, children, href, ...props }, ref) => {
  const buttonClasses = cn("relative overflow-hidden bg-purple-600 hover:bg-purple-700 text-white", className)

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center">{children}</span>
      <span className="absolute inset-0 z-0 bg-purple-500 opacity-0 animate-pulse-slow" />
    </>
  )

  if (href) {
    return (
      <Button asChild className={buttonClasses} {...props}>
        <Link href={href}>{content}</Link>
      </Button>
    )
  }

  return (
    <Button ref={ref} className={buttonClasses} {...props}>
      {content}
    </Button>
  )
})

PulseButton.displayName = "PulseButton"

export default PulseButton
