import { modl } from "@/app/models/Feedback";
import mongoose from "mongoose";

export async function POST(req) {
  const jsonbdy = await req.json();
  const mongoUrl = process.env.MONGO_URL;
  const { value, txtValue } = jsonbdy;
  console.log("jsonbdy", jsonbdy);

  console.log("MONGO_URL:", mongoUrl);

  try {
    await mongoose.connect(mongoUrl); // await the connection
    const result = await modl.create({ value, txtValue }); // await the insert

    return Response.json({ success: true, data: result });
  } catch (error) {
    console.error("Error inserting into MongoDB:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
