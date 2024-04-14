import connect from "@/utils/db";
import Notes from "@/models/notes";
import { NextResponse } from "next/server";

export default async function GET() {
  await connect();

  const notes = await Notes.find({});

  NextResponse.json(notes);
}
