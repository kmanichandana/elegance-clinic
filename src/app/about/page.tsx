import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-6">About Elegance Clinic</h1>
        <p className="text-lg mb-12">
          Elegance Clinic is dedicated to offering premium dental, skin, and hair care services.
          Our team of experienced doctors are passionate about providing exceptional healthcare
          with a personal touch.
        </p>

        {/* Dr. Poojitha Section */}
        <section className="p-8 flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
          {/* Text Content */}
          <div className="bg-white rounded-lg shadow-md p-8 md:w-2/3 min-h-[350px] overflow-auto">
            <h2 className="text-3xl font-semibold mb-4">Dr. Poojitha</h2>
            <p className="text-lg">
            Dr. Poojitha is a highly skilled and compassionate healthcare professional at Elegance Clinic, specializing in dental, skin, and hair care treatments. 
            With a strong foundation in clinical knowledge and a dedication to patient well-being, she brings fresh perspective and enthusiasm to the team. 
            Dr. Poojitha focuses on delivering personalized, modern treatments designed to enhance health and confidence, ensuring each patient receives the highest standard of care.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/3">
            <Image
              src="/images/poo.jpeg" // Make sure this image exists in your public/images folder
              alt="Dr. Poojitha"
              className="w-full h-[350px] rounded-lg shadow-lg object-cover"
            />
          </div>
        </section>
      </main>
    </>
  );
}
