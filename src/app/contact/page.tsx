"use client";
import Image from 'next/image';
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-secondary text-primary py-16 px-4 md:px-8">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-xl mx-auto text-gray-700">
          Have a question or want to book an appointment? We&rsquo;d love to hear from you!
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

        {/* Left Side: Image + Contact Info */}
        <div className="flex-1 bg-white rounded-lg shadow-lg flex flex-col items-center">

          {/* Image */}
          <div className="w-full h-64 overflow-hidden rounded-lg">
            <Image
              src="/images/c.png"
              alt="Clinic Contact"
              height={500} width={500}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center">
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
              <span>FIRST floor, Plot no 578N, Teachers Colony,<br /> B.N Reddy Nagar, Hastinapuram, Hyderabad, India</span>
            </div>

            {/* Google Map */}
            <div className="w-full h-64 mt-2 rounded-lg overflow-hidden animate-fade-in-up transition duration-700 ease-in-out">
            <iframe
              title="Elegance Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.9773757234225!2d78.5511511744024!3d17.31664070484084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba30061200383%3A0x1253e3d350fb5cc8!2sElegance%20dental%20clinic!5e0!3m2!1sen!2sus!4v1747329288488!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow"
            ></iframe>
            <noscript>
              <p className="text-sm text-center mt-2">
                Map not visible?{" "}
                <a
                  href="https://www.google.com/maps/place/Elegance+dental+clinic"
                  className="underline text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </p>
            </noscript>
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

            <button type="submit" className="bg-primary text-secondary px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105 ">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
