"use client";

import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-secondary text-primary py-16 px-4 md:px-8">
      
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-xl mx-auto text-gray-700">
          Have a question or want to book an appointment? We'd love to hear from you!
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Image + Contact Info */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          
          {/* Image */}
          <div className="w-full h-64 mb-8 overflow-hidden rounded-lg">
            <img
              src="/images/c.png"
              alt="Clinic Contact"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-center">
            <div className="flex items-center justify-center gap-3 text-primary">
              <PhoneIcon className="w-5 h-5" />
              <span>+91 12345 67890</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary">
              <MailIcon className="w-5 h-5" />
              <span>info@elegancecare.in</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary">
              <MapPinIcon className="w-5 h-5" />
              <span>123 Elegance Street, Wellness City, India</span>
            </div>
          </div>

        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input type="text" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Email" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input type="text" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Phone" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary" rows={4} placeholder="Your Message"></textarea>
            </div>

            <button type="submit" className="bg-primary text-secondary px-6 py-3 rounded hover:bg-secondary hover:text-primary transition font-semibold">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
