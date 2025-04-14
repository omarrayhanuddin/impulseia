"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

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
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      setMessage("Email and Name are required.");
      return;
    }

    const res = await fetch("/api/save-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, password, contact }),
    });

    const data = await res.json();
    setMessage("");
    setEmail("");
    setName("");
    setPassword("");
    setContact("");
    setShowLoginForm(false);
    toast.success(data.message || "Submitted successfully!");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        isScrolled
          ? "border-b border-zinc-800 bg-black/95 backdrop-blur"
          : "border-b border-transparent bg-black/80 backdrop-blur"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
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

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:flex border-purple-700 bg-white text-black hover:bg-purple-800 hover:text-white"
            onClick={() => setShowLoginForm(true)}
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
                onClick={() => setShowLoginForm(true)}
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

      {/* Login Modal */}
      {showLoginForm && (
        <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto my-auto">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowLoginForm(false)}
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-black">Log In</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    id="contact"
                    type="text"
                    placeholder="Enter your contact number"
                    className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
                <div className="flex justify-between gap-4">
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-800 text-white"
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-gray-300 text-white "
                    onClick={() => setShowLoginForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
                {message && (
                  <p className="mt-4 text-red-600 text-sm text-center">{message}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}