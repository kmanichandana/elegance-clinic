/// Footer.tsx
import Link from "next/link";
import { ArrowRightIcon, PhoneIcon, MailIcon, MapPinIcon} from "lucide-react";
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary pt-12 px-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Half - Brand Identity */}
        <div className="flex flex-col">
          {/* Logo */}
          <div className="text-3xl font-bold mb-4">
            Elegance <span className="text-sm font-cursive italic">Smile &amp; Glow</span>
          </div>
          
          {/* Description */}
          <p className="">
            Elegance Clinic is your destination for holistic beauty and wellness. 
            We combine expertise and care to help you look and feel your best.
          </p>
          <div className="mt-10 flex justify-start gap-6">
            <Link href="https://www.instagram.com/elegance_cosmetic_care?igsh=eWhycWs1ZXZ2dnEw&utm_source=qr" target="_blank" className="hover:text-white transition">
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition">
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link href="https://www.youtube.com/@Elegance_Dental_Clinic" target="_blank" className="hover:text-white transition">
              <FaYoutube className="w-6 h-6" />
            </Link>
          </div>
        </div>
        

        {/* Right Half - Links + Contact Info */}
        <div className="flex flex-col md:flex-row gap-25">
          
          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="flex items-center hover:text-white transition">
                  <ArrowRightIcon className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center hover:text-white transition">
                  <ArrowRightIcon className="w-4 h-4 mr-2" />
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="flex items-center hover:text-white transition">
                  <ArrowRightIcon className="w-4 h-4 mr-2" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center hover:text-white transition">
                  <ArrowRightIcon className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-2">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3" />
                <span>9573050592, 040-45094434</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 mr-3" />
                <span>Elegancesmileandglow@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-3" />
                <span>FIRST floor, Plot no 578N, Teachers Colony,<br></br> B.N Reddy Nagar, Hastinapuram, Hyderabad, India</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Copy */}
      <div className="text-center text-sm pb-4">
        © 2024. Elegance Smile and Glow Clinic. All Rights Reserved.
      </div>

    </footer>
  );
}
