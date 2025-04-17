"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import LogoGlow from "./LogoGlow";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
         ? "border-b border-zinc-800 bg-black/95 backdrop-blur"
          : "border-b border-transparent bg-black/80 backdrop-blur"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with Glow Effect */}
          <Link
            href="/"
            className="flex items-center group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative">
              {/* Main Logo Image */}
              <LogoGlow 
            imagePath="./impulseaia.png" 
            alt="My Logo"
            className="max-w-[200px]" // Control logo size
/>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  pathname === `/#${link.id}` || pathname === `/${link.id}`
                    ? "text-white bg-white/10 backdrop-blur-sm"
                    : "text-white/90 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link.id)}
                  className={`block w-full px-4 py-2 text-left rounded-md text-sm font-medium transition-colors ${
                    pathname === `/#${link.id}` || pathname === `/${link.id}`
                      ? "text-white bg-white/10"
                      : "text-white/90 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}