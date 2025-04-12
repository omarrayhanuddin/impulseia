"use client"; // Add this at the very top

import ContactForm from "@/components/contact-form";

import { ArrowRight, Layers, Link, MailIcon, MapPinIcon, PhoneIcon, Zap } from "lucide-react";





export default function ContactPage() {
  return (
    
    <>  
      <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
          
          {/* Additional contact info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MailIcon className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Email</h3>
              <p>contact@example.com</p>
            </div>
            <div className="text-center">
              <PhoneIcon className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <MapPinIcon className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Location</h3>
              <p>123 Business Ave, City</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}