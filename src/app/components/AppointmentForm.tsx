"use client";
import { useForm, SubmitHandler } from "react-hook-form";

// ✅ Define a type for your form data
type AppointmentFormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message?: string;
};

export default function AppointmentForm() {
  const { register, handleSubmit, reset } = useForm<AppointmentFormData>();

  const onSubmit: SubmitHandler<AppointmentFormData> = async (data) => {
    const res = await fetch('/api/appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert('Appointment Booked!');
      reset();
    } else {
      alert('Failed to book appointment.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Book Appointment</h2>
      <input {...register('name')} placeholder="Name" className="border p-2 w-full mb-4" required />
      <input {...register('email')} placeholder="Email" type="email" className="border p-2 w-full mb-4" required />
      <input {...register('phone')} placeholder="Phone" className="border p-2 w-full mb-4" required />
      <input {...register('date')} type="date" className="border p-2 w-full mb-4" required />
      <input {...register('time')} type="time" className="border p-2 w-full mb-4" required />
      <textarea {...register('message')} placeholder="Message" className="border p-2 w-full mb-4" />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Book</button>
    </form>
  );
}
