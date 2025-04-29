"use client";
import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from "react";

const services = [
  { name: "Smile Designing", id: "smile-designing" },
  { name: "Implants", id: "implants" },
  { name: "Root Canal", id: "root-canal" },
  { name: "Crowns, Bridges & Veneers", id: "crowns-bridges-veneers" },
  { name: "Braces", id: "braces" },
  { name: "Invisalign", id: "invisalign" },
  { name: "Child Dentistry", id: "child-dentistry" },
];

export default function DentalServicePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      services.forEach((service) => {
        const section = document.getElementById(service.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollPosition >= offsetTop - 150 && scrollPosition < offsetTop + offsetHeight - 150) {
            setActiveSection(service.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="flex flex-col items-center space-y-10">
        {/* Top Main Box */}
        <div
          className={`w-full bg-cover bg-center transition-all duration-700 ease-in-out overflow-hidden ${
            isScrolled ? "h-16" : "h-80"
          } relative`}
          style={{ backgroundImage: "url('/images/dental/d-bg.jpg')" }}
        >
          <div
            className={`absolute inset-0 bg-black ${
              isScrolled ? "bg-opacity-0" : "bg-opacity-40"
            } flex flex-col justify-center ${
              isScrolled ? "items-center text-center py-2" : "items-start text-left py-10"
            } transition-all duration-700 ease-in-out text-white px-6 md:px-16`}
          >
            <h1
              className={`font-bold transition-all duration-700 ${
                isScrolled ? "text-2xl text-primary" : "text-5xl text-white"
              }`}
            >
              Dental Care Services
            </h1>

            {/* Show paragraph only when NOT scrolled */}
            {!isScrolled && (
              <p className="text-lg max-w-2xl mt-4 transition-opacity duration-700 opacity-100">
                We provide comprehensive dental care including cleanings, fillings, orthodontics, 
                implants, and cosmetic dentistry to help you achieve a bright, healthy smile.
                <br />
                <i>Brighten your smile with our expert dental treatments tailored just for you.</i>
              </p>
            )}
          </div>
        </div>


        {/* Services List */}
        <div className="flex">

          {/* Sidebar */}
          <aside className="hidden md:block w-1/4 p-4 h-screen sticky top-24">
              <div className="bg-primary rounded-lg p-6 shadow-md h-full">
                <h3 className="text-2xl font-bold text-secondary mb-6 text-center">
                  Dental Services
                </h3>
                <ul className="space-y-4">
                  {services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`#${service.id}`}
                        className={`flex items-center transition cursor-pointer ${
                          activeSection === service.id
                            ? "text-white font-bold text-lg"
                            : "text-secondary hover:text-white hover:font-bold hover:text-lg"
                        }`}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

        {/* Service Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-16">

        {/* Service 1 - Smile Designing */}
        <section id="smile-designing" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">

          {/* Left Text Block */}
          <div className="flex-1 h-full flex flex-col justify-evenly pr-2"> {/* <- Added right padding */}
            <h2 className="text-2xl font-bold text-primary mb-4">Smile Designing</h2>
            <p className="text-gray-700">
              Achieve the perfect smile tailored uniquely to your facial features. Our smile designing combines art and dental science to enhance your natural beauty.
            </p>
          </div>

          {/* Right Image Block */}
          <div className="h-full flex justify-end items-center">
            <Image
              src="/images/dental/sd.jpg"
              alt="Smile Designing"
              className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md "
            />
          </div>

        </section>

        {/* Service 2 - Implants */}
        <section id="implants" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
          <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
            <h2 className="text-2xl font-bold text-primary mb-4">Implants</h2>
            <p className="text-gray-700">
              Replace missing teeth with permanent, natural-looking implants. Restore function, aesthetics, and confidence with our advanced dental implant solutions.
            </p>
          </div>
          <div className="h-full flex justify-end items-center">
            <Image src="/images/dental/implants.webp" alt="Implants" className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
          </div>
        </section>

        {/* Service 3 - Root Canal */}
        <section id="root-canal" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
          <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
            <h2 className="text-2xl font-bold text-primary mb-4">Root Canal</h2>
            <p className="text-gray-700">
              Save infected or decayed teeth with pain-free root canal treatments, ensuring long-term health and durability of your natural teeth.
            </p>
          </div>
          <div className="h-full flex justify-end items-center">
            <Image src="/images/dental/rootcanal.jpg" alt="Root Canal Treatment" 
            className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
          </div>
        </section>

        {/* Service 4 - Crowns, Bridges & Veneers */}
        <section id="crowns-bridges-veneers" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
          <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
            <h2 className="text-2xl font-bold text-primary mb-4">Crowns, Bridges & Veneers</h2>
            <p className="text-gray-700">
              Protect, restore, and beautify your teeth with custom-made crowns, bridges, and veneers, crafted to blend seamlessly with your natural smile.
            </p>
          </div>
          <div className="h-full flex justify-end items-center">
            <Image src="/images/dental/cbv.webp" alt="Crowns, Bridges & Veneers" className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
          </div>
        </section>

        {/* Service 5 - Braces */}
        <section id="braces" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
          <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
            <h2 className="text-2xl font-bold text-primary mb-4">Braces</h2>
            <p className="text-gray-700">
              Straighten your teeth and correct bite issues with traditional and advanced orthodontic braces customized for comfort and effectiveness.
            </p>
          </div>
          <div className="h-full flex justify-end items-center">
            <Image src="/images/dental/braces.avif" alt="Braces" className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
          </div>
        </section>

        {/* Service 6 - Invisalign */}
        <section id="invisalign" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
          <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
            <h2 className="text-2xl font-bold text-primary mb-4">Invisalign</h2>
            <p className="text-gray-700">
              Enjoy discreet teeth straightening with clear Invisalign aligners, offering flexibility and comfort without the look of traditional braces.
            </p>
          </div>
          <div className="h-full flex justify-end items-center">
            <Image src="/images/dental/invisalign.jpg" alt="Invisalign" className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
          </div>
        </section>

        {/* Service 7 - Child Dentistry */}
        <section id="child-dentistry" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
          <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
            <h2 className="text-2xl font-bold text-primary mb-4">Child Dentistry</h2>
            <p className="text-gray-700">
              Gentle, friendly dental care specialized for children, ensuring healthy smiles from their very first visit to a lifetime of good oral health habits.
            </p>
          </div>
          <div className="h-full flex justify-end items-center">
            <Image src="/images/dental/child.webp" alt="Child Dentistry" className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
          </div>
        </section>


        </div>      
      </div>
    </main>
  </>
  );
}
