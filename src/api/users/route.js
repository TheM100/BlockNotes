import connect from "@/utils/db";
import Users from "@/models/users";
import { NextResponse } from "next/server";

export default async function GET() {
  await connect();

  const users = await Notes.find({});

  NextResponse.json(users);
}
