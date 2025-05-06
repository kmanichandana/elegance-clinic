import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import mongoose from "mongoose";

// Schema
const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String, required: true },
    serviceType: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    message: { type: String },
  },
  { collection: "appointments", timestamps: true }
);

const Appointment =
  mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);

// DELETE handler
export async function DELETE(
  req: NextRequest,
  { params }: { params: Record<string, string> }
) {
  await dbConnect();
  const id = params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const deleted = await Appointment.findByIdAndDelete(id);
  if (!deleted) {
    return NextResponse.json({ error: "Appointment not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Appointment deleted successfully" });
}

// PUT handler
export async function PUT(
  req: NextRequest,
  { params }: { params: Record<string, string> }
) {
  await dbConnect();
  const id = params.id;
  const updateData = await req.json();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const updated = await Appointment.findByIdAndUpdate(id, updateData, { new: true });
  if (!updated) {
    return NextResponse.json({ error: "Appointment not found" }, { status: 404 });
  }

  return NextResponse.json(updated);
}
