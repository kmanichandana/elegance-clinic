import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import mongoose from "mongoose";

// Schema and model setup
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
  {
    collection: "appointments",
    timestamps: true,
  }
);

const Appointment =
  mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);

// Helper type declaration
interface Params {
  params: { id: string };
}

// DELETE /api/appointment/[id]
export async function DELETE(req: NextRequest, context: Params) {
  const { id } = context.params;
  await dbConnect();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const deleted = await Appointment.findByIdAndDelete(id);
  if (!deleted) {
    return NextResponse.json({ error: "Appointment not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Appointment deleted successfully" });
}

// PUT /api/appointment/[id]
export async function PUT(req: NextRequest, context: Params) {
  const { id } = context.params;
  const updateData = await req.json();
  await dbConnect();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const updated = await Appointment.findByIdAndUpdate(id, updateData, { new: true });
  if (!updated) {
    return NextResponse.json({ error: "Appointment not found" }, { status: 404 });
  }

  return NextResponse.json(updated);
}
