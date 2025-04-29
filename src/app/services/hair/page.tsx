"use client";
import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from "react";

const services = [
  { name: "Anti-Dandruff Treatment", id: "anti-dandruff" },
  { name: "Hair Fall Control - PRP", id: "hairfall-prp" },
  { name: "Hair Fall Control - GFC", id: "hairfall-gfc" },
  { name: "Hair Fall Control - Q678", id: "hairfall-q678" },
  { name: "Hair Fall Control - Laser Comb", id: "hairfall-lasercomb" },
  { name: "Hair Fall Control - Derma Pen", id: "hairfall-dermapen" },
];

export default function HairServicePage() {
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

          if (
            scrollPosition >= offsetTop - 150 &&
            scrollPosition < offsetTop + offsetHeight - 150
          ) {
            setActiveSection(service.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex flex-col items-center space-y-10">
      {/* Top Banner */}
      <div
        className={`w-full bg-cover bg-center transition-all duration-700 ease-in-out overflow-hidden ${
          isScrolled ? "h-16" : "h-80"
        } relative`}
        style={{ backgroundImage: "url('/images/hair/h-bg.jpg')" }}
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
            Hair Care Services
          </h1>

          {!isScrolled && (
            <p className="text-lg max-w-2xl mt-4 transition-opacity duration-700 opacity-100">
              Restore, nourish, and rejuvenate your hair with our comprehensive hair care treatments.
              <br />
              <i>Let your hair shine with our personalized solutions to common scalp and hair concerns.</i>
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-1/4 p-4 h-screen sticky top-24">
          <div className="bg-primary rounded-lg p-6 shadow-md h-full">
            <h3 className="text-2xl font-bold text-secondary mb-6 text-center">
              Hair Treatments
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

        {/* Services Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-16">

          {/* Anti-Dandruff Treatment */}
          <section id="anti-dandruff" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
            <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
              <h2 className="text-2xl font-bold text-primary mb-4">Anti-Dandruff Treatment</h2>
              <p className="text-gray-700">
                Say goodbye to flakes and itchiness. Our advanced anti-dandruff solutions help cleanse, soothe, and restore scalp health for long-lasting relief.
              </p>
            </div>
            <div className="h-full flex justify-end items-center">
              <Image src="/images/hair/antidd.jpg" alt="Anti-Dandruff Treatment" height={500} width={500} className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
            </div>
          </section>

          {/* PRP */}
          <section id="hairfall-prp" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
            <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
              <h2 className="text-2xl font-bold text-primary mb-4">Hair Fall Control - PRP</h2>
              <p className="text-gray-700">
                PRP therapy boosts hair regrowth by using your body's natural healing properties. It is a safe and effective way to combat thinning hair.
              </p>
            </div>
            <div className="h-full flex justify-end items-center">
              <Image src="/images/hair/prp.jpg" alt="PRP Treatment" height={500} width={500}
               className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
            </div>
          </section>

          {/* GFC */}
          <section id="hairfall-gfc" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
            <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
              <h2 className="text-2xl font-bold text-primary mb-4">Hair Fall Control - GFC</h2>
              <p className="text-gray-700">
                Growth Factor Concentrate (GFC) is a modern hair fall solution that delivers powerful proteins directly to hair follicles to stimulate growth.
              </p>
            </div>
            <div className="h-full flex justify-end items-center">
              <Image src="/images/hair/gfc.webp" alt="GFC Treatment" height={500} width={500} 
              className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
            </div>
          </section>

          {/* Q678 */}
          <section id="hairfall-q678" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
            <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
              <h2 className="text-2xl font-bold text-primary mb-4">Hair Fall Control - Q678</h2>
              <p className="text-gray-700">
                Q678 is a dermatologically advanced treatment that targets hormonal hair loss, delivering noticeable results with minimal discomfort.
              </p>
            </div>
            <div className="h-full flex justify-end items-center">
              <Image src="/images/hair/qr678.jpg" alt="Q678 Hair Treatment" height={500} width={500}
              className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
            </div>
          </section>

          {/* Laser Comb */}
          <section id="hairfall-lasercomb" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
            <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
              <h2 className="text-2xl font-bold text-primary mb-4">Hair Fall Control - Laser Comb</h2>
              <p className="text-gray-700">
                Laser comb therapy uses low-level laser light to improve circulation and stimulate follicles for healthier, thicker hair growth.
              </p>
            </div>
            <div className="h-full flex justify-end items-center">
              <Image src="/images/hair/lc.jpeg" alt="Laser Comb" height={500} width={500}
              className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
            </div>
          </section>

          {/* Derma Pen */}
          <section id="hairfall-dermapen" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
            <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
              <h2 className="text-2xl font-bold text-primary mb-4">Hair Fall Control - Derma Pen</h2>
              <p className="text-gray-700">
                Derma Pen micro-needling boosts collagen and improves product absorption, helping reduce hair thinning and strengthening roots.
              </p>
            </div>
            <div className="h-full flex justify-end items-center">
              <Image src="/images/hair/dp.webp" alt="Derma Pen Hair Treatment" height={500} width={500}
              className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
