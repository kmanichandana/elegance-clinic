"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon } from 'lucide-react';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white font-bold shadow-md sticky top-0 z-50 border-b-2 border-primary">
      <div className="container mx-auto flex items-center justify-between px-4 py-1">
        
        {/* Logo */}
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Elegance Clinic Logo"
            className="h-20 w-auto object-contain flex-shrink-0"
          />
        </Link>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none">
            {mobileMenuOpen ? (
              <XIcon className="w-8 h-8 text-primary" />
            ) : (
              <MenuIcon className="w-8 h-8 text-primary" />
            )}
          </button>
        </div>

        {/* Navigation (Desktop Only) */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 text-primary">
          <Link href="/" className={`${pathname === '/' ? 'underline font-semibold' : ''} hover:underline underline-offset-4`}>
            Home
          </Link>
          <Link href="/about" className={`${pathname === '/about' ? 'underline font-semibold' : ''} hover:underline underline-offset-4`}>
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button
              className={`hover:underline underline-offset-4 ${
                pathname.includes('/services') ? 'underline font-semibold' : ''
              }`}
            >
              Services
            </button>

            {showDropdown && (
              <div className="absolute left-0 top-full shadow-md rounded w-max bg-secondary text-primary z-10">
                <Link href="/services/dental" className="block px-4 py-2 hover:bg-gray-100">
                  Dental Care
                </Link>
                <Link href="/services/skin" className="block px-4 py-2 hover:bg-gray-100">
                  Skin Care
                </Link>
                <Link href="/services/hair" className="block px-4 py-2 hover:bg-gray-100">
                  Hair Care
                </Link>
              </div>
            )}
          </div>

          <Link href="/gallery" className={`${pathname === '/gallery' ? 'underline font-semibold' : ''} hover:underline underline-offset-4`}>
            Gallery
          </Link>
          <Link href="/contact" className={`${pathname === '/contact' ? 'underline font-semibold' : ''} hover:underline underline-offset-4`}>
            Contact
          </Link>
        </nav>

        {/* Book Appointment Button - Desktop Only */}
        <div className="hidden md:flex flex-shrink-0">
          <Link href="/appointment">
            <button className="bg-primary text-secondary px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(75,43,20,0.5)] hover:bg-secondary hover:text-primary">
              Book Appointment
            </button>
          </Link>
        </div>

      </div>

      {/* Mobile Navigation - Animated */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="flex flex-col justify-center items-center bg-white text-primary space-y-6 px-6 py-8">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/services/dental" onClick={() => setMobileMenuOpen(false)} className="hover:underline underline-offset-4">
            Dental Care
          </Link>
          <Link href="/services/skin" onClick={() => setMobileMenuOpen(false)} className="hover:underline underline-offset-4">
            Skin Care
          </Link>
          <Link href="/services/hair" onClick={() => setMobileMenuOpen(false)} className="hover:underline underline-offset-4">
            Hair Care
          </Link>
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="hover:underline underline-offset-4">
            Gallery
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="/appointment" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full bg-primary text-secondary py-2 rounded font-semibold hover:bg-secondary hover:text-primary">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
