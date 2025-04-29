"use client";

import { useState } from "react";

export default function RescheduleAppointment() {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [correctOtp, setCorrectOtp] = useState(""); // for simulation
  const [appointment, setAppointment] = useState<any>(null);

  async function sendOtp() {
    if (!phone) return alert("Enter phone number first.");
    // simulate OTP
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setCorrectOtp(generatedOtp);
    setOtpSent(true);
    alert(`Simulated OTP: ${generatedOtp}`); // you would normally send via SMS gateway
  }

  async function verifyOtp() {
    if (otp !== correctOtp) return alert("Invalid OTP!");
    // Fetch appointment after OTP validated
    const res = await fetch(`/api/appointment?phone=${phone}`);
    const data = await res.json();
    if (data.appointment) {
      setAppointment(data.appointment);
    } else {
      alert("No appointment found for this phone number.");
    }
  }

  async function handleUpdate(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updateData = {
      serviceType: formData.get("serviceType"),
      date: formData.get("date"),
      time: formData.get("time"),
    };
    const res = await fetch(`/api/appointment?phone=${phone}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });
    if (res.ok) {
      alert("Appointment Rescheduled Successfully!");
      setAppointment(null);
      setPhone("");
      setOtp("");
      setOtpSent(false);
    } else {
      alert("Failed to reschedule appointment.");
    }
  }

  return (
    <main className="min-h-screen bg-secondary text-primary py-16 px-4 md:px-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {!appointment ? (
          <>
            <h1 className="text-2xl font-bold mb-6">Reschedule Appointment</h1>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border rounded"
              />
              {!otpSent ? (
                <button
                  onClick={sendOtp}
                  className="w-full bg-primary text-secondary py-2 rounded hover:bg-secondary hover:text-primary"
                >
                  Send OTP
                </button>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-3 border rounded"
                  />
                  <button
                    onClick={verifyOtp}
                    className="w-full bg-primary text-secondary py-2 rounded hover:bg-secondary hover:text-primary"
                  >
                    Verify OTP
                  </button>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-6">Edit Appointment</h1>
            <form className="space-y-6" onSubmit={handleUpdate}>
              <div>
                <label>Service Type</label>
                <select name="serviceType" defaultValue={appointment.serviceType} className="w-full p-3 border rounded" required>
                  <option value="Dental">Dental Care</option>
                  <option value="Skin">Skin Care</option>
                  <option value="Hair">Hair Care</option>
                </select>
              </div>
              <div>
                <label>Date</label>
                <input type="date" name="date" defaultValue={appointment.date} className="w-full p-3 border rounded" required />
              </div>
              <div>
                <label>Time</label>
                <input type="time" name="time" defaultValue={appointment.time} className="w-full p-3 border rounded" required />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-secondary py-3 rounded hover:bg-secondary hover:text-primary"
              >
                Save Changes
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
