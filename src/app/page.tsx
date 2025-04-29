import Link from "next/link";
import Image from 'next/image';
import { BriefcaseIcon, UserIcon, IndianRupeeIcon  } from "lucide-react";

export default function Home() {
  return (
    <>
      <main 
        className="bg-secondary bg-fixed">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center md:items-start">
          {/* Left Section – 50% */}
          <div className="p-12 md:w-3/5 space-y-6">
            <h1 className="text-5xl font-bold text-[#58361ef3]">Welcome to Elegance Clinic</h1>
            <p className="text-lg text-[#58361ef3]">
              At Elegance Clinic, we are committed to enhancing your natural beauty and well-being through expert dental, skin, and hair care.
              Our experienced professionals combine advanced treatments with a personalized approach to ensure you receive the best care in a comfortable environment.
            </p>
            <p className="text-xl italic text-[#58361ef3]">&quot;Discover the art of self-care at Elegance&quot;</p>
          </div>

          {/* Right Section – 50% */}
          <div className="md:w-2/5 flex justify-around">
            <Image
              src="/images/hero1.png"
              alt="Elegance Clinic"
              width={500}
              height={500}
              className=" w-auto h-[450px] object-contain"
            />
          </div>
        </div>

        {/* Services Section */}
      <div className="mt-12 px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#58361ef3] mb-8">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
          
          {/* Service 1 - Dental Care */}
          <div className="relative w-full md:w-1/3 bg-black rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Image
              src="/images/d-hero.jpg"
              alt="Dental Care"
              width={500}
              height={500}
              className="w-full h-64 object-cover opacity-80 rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40 rounded-lg p-4">
              <h3 className="text-2xl font-bold mb-2">Dental Care</h3>
              <p className="text-center mb-4">
                Brighten your smile with our expert dental treatments.
              </p>
              <Link href="/services/dental">
                <button className="bg-white text-black font-semibold px-4 py-2 rounded shadow hover:bg-secondary transform hover:scale-105 transition-transform duration-300">
                  See More
                </button>
              </Link>
            </div>
          </div>

          {/* Service 2 - Skin Treatments */}
          <div className="relative w-full md:w-1/3 bg-black rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Image
              src="/images/s-hero.webp"
              alt="Skin Treatments"
              width={500}
              height={500}
              className="w-full h-64 object-cover rounded-lg opacity-80"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40 rounded-lg p-4">
              <h3 className="text-2xl font-bold mb-2">Skin Treatments</h3>
              <p className="text-center mb-4">
                Rejuvenate your skin with personalized care solutions.
              </p>
              <Link href="/services/skin">
                <button className="bg-white text-black font-semibold px-4 py-2 rounded shadow hover:bg-secondary transform hover:scale-105 transition-transform duration-300">
                  See More
                </button>
              </Link>
            </div>
          </div>

          {/* Service 3 - Hair Restoration */}
          <div className="relative w-full md:w-1/3 bg-black rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Image
              src="/images/h-hero.webp"
              alt="Hair Restoration"
              width={500}
              height={500}
              className="w-full h-64 object-cover rounded-lg opacity-80"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40 rounded-lg p-4">
              <h3 className="text-2xl font-bold mb-2">Hair Restoration</h3>
              <p className="text-center mb-4">
                Restore and enhance your natural hair growth.
              </p>
              <Link href="/services/hair">
                <button className="bg-white text-black font-semibold px-4 py-2 rounded shadow hover:bg-secondary transform hover:scale-105 transition-transform duration-300">
                  See More
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>



      <div className="mt-16 px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#58361ef3] mb-8">
          What Makes Us The Best Choice
        </h2>

        {/* Features Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          {/* Feature Box */}
          {[
            {
              Icon: BriefcaseIcon,
              title: "Experience and Expertise",
              description: "Our team consists of seasoned professionals delivering exceptional dental, skin, and hair care."
            },
            {
              Icon: UserIcon,
              title: "Personalized Approach",
              description: "Every treatment is tailored to meet your unique needs, ensuring the best possible outcomes."
            },
            {
              Icon: IndianRupeeIcon ,
              title: "Affordable Treatments",
              description: "We believe quality care should be accessible; offering competitive pricing without compromise."
            }
          ].map(({ Icon, title, description }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg h-[200px] justify-between"
            >
              <Icon className="w-16 h-16 text-[#58361ef3] mb-4" />
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#58361ef3]">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>       
      </div>
    </main>
    </>
  );
}
