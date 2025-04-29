"use client";
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-secondary text-primary py-16 px-4 md:px-8">

      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Explore our modern facilities and happy client moments at Elegance Smile and Glow Clinic.
        </p>
      </div>

      {/* Hospital Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Hospital</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Hospital Images */}
          {["h1.jpeg", "h2.jpeg", "h3.jpeg"].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={`/images/hsp/${img}`}
                alt={`Hospital ${idx + 1}`}
                height={500} width={500}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Happy Clients</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Client Images */}
          {["c1.png", "c2.jpg", "c3.webp"].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={`/images/hsp/${img}`}
                alt={`Client ${idx + 1}`}
                height={500} width={500}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
