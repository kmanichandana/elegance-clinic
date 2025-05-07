"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";


export default function BookAppointment() {
  const [serviceType, setServiceType] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null); 

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      serviceType: formData.get("serviceType"),
      date: formData.get("date"),
      time: formData.get("time"),
      message: formData.get("message"),
    };
    console.log("Form Data:", data);

    try {

      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log("Response:", res);
      if (res.ok) {
        toast.success("Appointment Booked Successfully!");
        formRef.current?.reset();
        setServiceType("");
      } else {
        toast.error("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while booking.");
    }finally {
      setLoading(false); // End loading
    }
  }

  return (
    <main className="min-h-screen bg-secondary text-primary py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
        <p className="text-lg max-w-xl mx-auto text-gray-700">
          Schedule your visit with Elegance Smile and Glow Clinic. We look forward to seeing you!
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name</label>
            <input type="text" name="name" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" required />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" name="email" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Email (optional)"/>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-2">Phone</label>
            <input type="tel" name="phone" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Phone Number" required />
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-sm font-semibold mb-2">Service Type</label>
            <select
              name="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="" disabled>Select a Service</option>
              <option value="Dental">Dental Care</option>
              <option value="Skin">Skin Care</option>
              <option value="Hair">Hair Care</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold mb-2">Preferred Date</label>
            <input type="date" name="date" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-semibold mb-2">Preferred Time</label>
            <input type="time" name="time" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-2">Message (optional)</label>
            <textarea name="message" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary" rows={4} placeholder="Additional Information"></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-secondary py-3 rounded font-semibold hover:bg-secondary hover:text-primary transition"
          >
            Confirm Appointment
          </button>

        </form>
      </div>
    </main>
  );
}
