"use client";
import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from "react";

const services = [
  { name: "Skin Rejuvenation Treatments", id: "skin-rejuvenation" },
  { name: "Collagen Induction Treatment", id: "collagen-induction" },
  { name: "Laser Hair Reduction", id: "laser-hair-reduction" },
  { name: "Semi Permanent Makeup", id: "semi-permanent-makeup" },
  { name: "Stretch Marks Treatment", id: "stretch-marks" },
  { name: "HIFU for Excess Fat Reduction", id: "hifu-fat-reduction" },
  { name: "Face Peels", id: "face-peels" },
  { name: "Body Peels", id: "body-peels" },
];

export default function SkinServicePage() {
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
        style={{ backgroundImage: "url('/images/skin/s-bg.jpg')" }}
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
            Skin Care Services
          </h1>

          {!isScrolled && (
            <p className="text-lg max-w-2xl mt-4 transition-opacity duration-700 opacity-100">
              Reveal healthy, radiant skin with our advanced skincare solutions.
              <br />
              <i>Tailored treatments for rejuvenation, glow, and total skin confidence.</i>
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
              Skin Treatments
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

          {/* Skin Rejuvenation Treatments */}
          <section id="skin-rejuvenation" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
            <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
              <h2 className="text-2xl font-bold text-primary mb-4">Skin Rejuvenation Treatments</h2>
              <p className="text-gray-700">
                Revive dull, tired skin with treatments that improve tone, texture, and overall glow using the latest dermatological innovations.
              </p>
            </div>
            <div className="h-full flex justify-end items-center">
              <Image src="/images/skin/srt.jpg" alt="Skin Rejuvenation" width={500} height={500}
              className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
            </div>
          </section>

          {/* Collagen Induction Treatment */}
          <section id="collagen-induction" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
            <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
              <h2 className="text-2xl font-bold text-primary mb-4">Collagen Induction Treatment</h2>
              <p className="text-gray-700">
                Stimulate your body&rsquo;s natural collagen production to firm, smooth, and improve the texture of your skin.
              </p>
            </div>
            <div className="h-full flex justify-end items-center">
              <Image src="/images/skin/cit.png" alt="Collagen Treatment" width={500} height={500} 
              className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
            </div>
          </section>

          {/* Laser Hair Reduction */}
          <section id="laser-hair-reduction" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
            <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
              <h2 className="text-2xl font-bold text-primary mb-4">Laser Hair Reduction</h2>
              <p className="text-gray-700">
                Safe and long-lasting hair removal using advanced laser technology tailored for all skin types.
              </p>
            </div>
            <div className="h-full flex justify-end items-center">
              <Image src="/images/skin/lhr.jpg" alt="Laser Hair Reduction" width={500} height={500} 
              className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
            </div>
          </section>

          {/* Semi Permanent Makeup */}
          <section id="semi-permanent-makeup" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
            <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
              <h2 className="text-2xl font-bold text-primary mb-4">Semi Permanent Makeup</h2>
              <p className="text-gray-700">
                Enhance your natural features with expertly applied semi-permanent makeup for eyes, brows, and lips.
              </p>
            </div>
            <div className="h-full flex justify-end items-center">
              <Image src="/images/skin/spm.webp" alt="Semi Permanent Makeup" width={500} height={500}
               className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
            </div>
          </section>

          {/* Stretch Marks Treatment */}
          <section id="stretch-marks" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
            <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
              <h2 className="text-2xl font-bold text-primary mb-4">Stretch Marks Treatment</h2>
              <p className="text-gray-700">
                Advanced treatments to reduce the appearance of stretch marks, improving skin texture and tone.
              </p>
            </div>
            <div className="h-full flex justify-end items-center">
              <Image src="/images/skin/smr.jpg" alt="Stretch Marks" width={500} height={500} 
              className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
            </div>
          </section>

          {/* HIFU for Excess Fat Reduction */}
          <section id="hifu-fat-reduction" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
            <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
              <h2 className="text-2xl font-bold text-primary mb-4">HIFU for Excess Fat Reduction</h2>
              <p className="text-gray-700">
                Non-invasive fat reduction treatment using High-Intensity Focused Ultrasound (HIFU) for body contouring.
              </p>
            </div>
            <div className="h-full flex justify-end items-center">
              <Image src="/images/skin/hifu.webp" alt="HIFU Fat Reduction" width={500} height={500} 
              className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
            </div>
          </section>

          {/* Face Peels */}
          <section id="face-peels" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
            <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
              <h2 className="text-2xl font-bold text-primary mb-4">Face Peels</h2>
              <p className="text-gray-700">
                Reveal brighter, smoother skin with professional-grade face peels customized for your skin type.
              </p>
            </div>
            <div className="h-full flex justify-end items-center">
              <Image src="/images/skin/fp.avif" alt="Face Peels" width={500} height={500}
               className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
            </div>
          </section>

          {/* Body Peels */}
          <section id="body-peels" className="flex flex-col h-auto md:flex-row items-center md:h-[300px] shadow-md p-4 shadow-black rounded-lg">
            <div className="flex-1 h-full flex flex-col justify-evenly pr-2">
              <h2 className="text-2xl font-bold text-primary mb-4">Body Peels</h2>
              <p className="text-gray-700">
                Treat uneven tone and texture on the body with exfoliating peels designed for larger areas.
              </p>
            </div>
            <div className="h-full flex justify-end items-center">
              <Image src="/images/skin/bp.jpg" alt="Body Peels" width={500} height={500}
               className="h-auto w-full md:h-full md:w-auto object-contain rounded-lg shadow-md" />
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
