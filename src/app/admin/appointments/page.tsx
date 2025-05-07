"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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
      const updatedAppointments = appointments.map((appt) =>
        appt._id === editingAppointment._id ? editingAppointment : appt
      );
      setAppointments(updatedAppointments);
    } else {
      toast.error("Failed to update appointment.");
    }
  };

  return (
    <main className="min-h-screen bg-secondary text-primary py-16 px-4 md:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Manage Appointments</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        {appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr>
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
                <tr key={appt._id}>
                  <td className="border p-2">{appt.name}</td>
                  <td className="border p-2">{appt.email}</td>
                  <td className="border p-2">{appt.phone}</td>
                  <td className="border p-2">{appt.serviceType}</td>
                  <td className="border p-2">{appt.date}</td>
                  <td className="border p-2">{appt.time}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleEdit(appt)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(appt._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {editingAppointment && (
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Edit Appointment</h2>
          {/* form contents unchanged */}
        </div>
      )}

      {confirmId && (
        <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[320px]">
            <p className="mb-4 text-sm font-medium text-center">
              Are you sure you want to delete this appointment?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={async () => {
                  const res = await fetch(`/api/appointment/${confirmId}`, {
                    method: "DELETE",
                  });
                  if (res.ok) {
                    toast.success("Appointment deleted successfully!");
                    setAppointments((prev) =>
                      prev.filter((appt) => appt._id !== confirmId)
                    );
                  } else {
                    toast.error("Failed to delete appointment.");
                  }
                  setConfirmId(null);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={() => setConfirmId(null)}
                className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
