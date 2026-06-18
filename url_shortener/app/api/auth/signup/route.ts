import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const {
      username,
      email,
      password,
    } = await req.json();

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const { data, error } =
      await supabase
        .from("users")
        .insert([
          {
            username,
            email,
            password_hash:
              hashedPassword,
          },
        ]);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}