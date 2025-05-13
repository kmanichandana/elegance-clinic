"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Pencil, Trash2 } from "lucide-react";

interface Appointment {
  _id: string;
  name: string;
  email?: string;
  phone: string;
  serviceType: string;
  date: string;
  time: string;
  message?: string;
}

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const router = useRouter();

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (isLoggedIn !== "true") {
      toast.error("Access denied. Please log in first.");
      router.push("/admin/login");
      return;
    }
    fetchAppointments();
  }, [router]);

  const fetchAppointments = async () => {
    const res = await fetch("/api/appointment");
    const data = await res.json();
    setAppointments(data);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    toast.success("Logged out successfully!");
    router.push("/admin/login");
  };

  const handleDeleteClick = (id: string) => {
    setConfirmId(id);
  };

  const handleEdit = (appointment: Appointment) => {
    const isEditable = new Date(appointment.date) >= new Date(today);
    if (!isEditable) {
      toast.error("You can only edit today's or future appointments.");
      return;
    }
    setEditingAppointment(appointment);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAppointment) return;

    const res = await fetch(`/api/appointment/${editingAppointment._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingAppointment),
    });

    if (res.ok) {
      toast.success("Appointment updated successfully!");
      setEditingAppointment(null);
      setAppointments((prev) =>
        prev.map((appt) =>
          appt._id === editingAppointment._id ? editingAppointment : appt
        )
      );
    } else {
      toast.error("Failed to update appointment.");
    }
  };

  return (
    <main className="min-h-screen bg-secondary text-primary py-10 px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">Manage Appointments</h1>
        <button
          onClick={handleLogout}
          className="bg-primary text-secondary px-6 py-2 rounded hover:font-bold"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 overflow-x-auto">
        {appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <table className="w-full border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-gray-100 text-sm">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Service</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Time</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt._id} className={`text-sm text-center transition duration-300 ${appt.date === today ? 'bg-yellow-50 font-medium' : ''}`}>
                  <td className="border p-2">{appt.name}</td>
                  <td className="border p-2">{appt.email}</td>
                  <td className="border p-2">{appt.phone}</td>
                  <td className="border p-2">{appt.serviceType}</td>
                  <td className="border p-2">{appt.date}</td>
                  <td className="border p-2">{appt.time}</td>
                  <td className="border p-2 flex flex-col md:flex-row justify-center items-center gap-2">
                    {new Date(appt.date) >= new Date(today) ? (
                      <>
                        <button
                          onClick={() => handleEdit(appt)}
                          className="flex items-center bg-primary text-secondary px-4 py-1 rounded hover:text-primary hover:bg-secondary transition-transform transform hover:scale-105"
                        >
                          <Pencil className="w-4 h-4 mr-1" /> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClick(appt._id)}
                          className="flex items-center bg-primary text-secondary px-4 py-1 rounded hover:text-primary hover:bg-secondary transition-transform transform hover:scale-105"
                        >
                          <Trash2 className="w-4 h-4 mr-1" /> Delete
                        </button>
                      </>
                    ) : (
                      <span className="text-gray-500 italic">Completed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Edit form and confirmation modal remain unchanged */}
    </main>
  );
}
