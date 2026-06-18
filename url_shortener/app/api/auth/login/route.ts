import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const {
      email,
      password,
    } = await req.json();

    const { data, error } =
      await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

    if (error || !data) {
      return NextResponse.json(
        {
          error:
            "Invalid email or password",
        },
        {
          status: 401,
        }
      );
    }

    const isValidPassword =
      await bcrypt.compare(
        password,
        data.password_hash
      );

    if (!isValidPassword) {
      return NextResponse.json(
        {
          error:
            "Invalid email or password",
        },
        {
          status: 401,
        }
      );
    }

    const token = jwt.sign(
      {
        id: data.id,
        email: data.email,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      }
    );

    const response =
      NextResponse.json({
        success: true,
        token,
      });

    response.cookies.set(
      "token",
      token,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV ===
          "production",
        sameSite: "strict",
        maxAge:
          60 * 60 * 24 * 7,
        path: "/",
      }
    );

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}