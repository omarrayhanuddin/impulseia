"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = pathname === "/";

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "team", label: "Team" },
    { id: "pricing", label: "Pricing" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all ${isScrolled ? "border-b border-zinc-800 bg-black/95 backdrop-blur" : "border-b border-transparent bg-black/80 backdrop-blur"}`}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Zap className="h-6 w-6 text-purple-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Impulseia
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="text-sm font-medium text-white/80 hover:text-purple-400 transition-colors"
              onClick={() => handleNavigation(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:flex border-purple-700 bg-white text-black hover:bg-purple-800 hover:text-white"
            onClick={() => handleNavigation("contact")}
          >
            Log In
          </Button>
          <Button
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => handleNavigation("services")}
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-purple-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-zinc-800">
          <div className="container py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-white/80 hover:text-purple-400 transition-colors"
                onClick={() => handleNavigation(link.id)}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-zinc-800 space-y-3">
              <Button
                variant="outline"
                className="w-full border-purple-700 bg-white text-black hover:bg-purple-800 hover:text-white"
                onClick={() => handleNavigation("contact")}
              >
                Log In
              </Button>
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700"
                onClick={() => handleNavigation("services")}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}