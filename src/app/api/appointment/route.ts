import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: String, required: true },
    serviceType: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    message: { type: String },
  },
  {
    collection: "appointments",
    timestamps: true,
  }
);

const Appointment =
  mongoose.models?.Appointment || mongoose.model("Appointment", appointmentSchema);

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const data = await req.json();

    const appointment = new Appointment(data);
    await appointment.save();

    return NextResponse.json({ message: "Appointment booked successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error saving appointment:", error);
    return NextResponse.json({ error: "Failed to book appointment" }, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();
  const appointments = await Appointment.find();
  return NextResponse.json(appointments);
}


