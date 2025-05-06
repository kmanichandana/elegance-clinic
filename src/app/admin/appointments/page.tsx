"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    // Fetch appointments from the API
    const fetchAppointments = async () => {
      const res = await fetch("/api/appointment");
      const data = await res.json();
      setAppointments(data);
    };

    fetchAppointments();
  }, []);

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/appointment/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Appointment deleted successfully!");
      setAppointments(appointments.filter((appt) => appt._id !== id));
    } else {
      alert("Failed to delete appointment.");
    }
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
      alert("Appointment updated successfully!");
      setEditingAppointment(null);
      const updatedAppointments = appointments.map((appt) =>
        appt._id === editingAppointment._id ? editingAppointment : appt
      );
      setAppointments(updatedAppointments);
    } else {
      alert("Failed to update appointment.");
    }
  };

  return (
    <main className="min-h-screen bg-secondary text-primary py-16 px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-8">Manage Appointments</h1>
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
                      onClick={() => handleDelete(appt._id)}
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
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                value={editingAppointment.name}
                onChange={(e) =>
                  setEditingAppointment({ ...editingAppointment, name: e.target.value })
                }
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={editingAppointment.email}
                onChange={(e) =>
                  setEditingAppointment({ ...editingAppointment, email: e.target.value })
                }
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input
                type="tel"
                value={editingAppointment.phone}
                onChange={(e) =>
                  setEditingAppointment({ ...editingAppointment, phone: e.target.value })
                }
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-secondary px-4 py-2 rounded hover:bg-secondary hover:text-primary"
            >
              Update Appointment
            </button>
          </form>
        </div>
      )}
    </main>
  );
}