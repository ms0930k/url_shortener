import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    const cookieHeader =
      req.headers.get("cookie");

    const token = cookieHeader
      ?.split("; ")
      .find((c) =>
        c.startsWith("token=")
      )
      ?.split("=")[1];

    if (!token) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as {
      id: string;
    };

    const shortCode =
      Math.random()
        .toString(36)
        .substring(2, 8);

    const { data, error } =
      await supabase
        .from("links")
        .insert([
          {
            user_id: decoded.id,
            original_url: url,
            short_code: shortCode,
          },
        ])
        .select()
        .single();

    if (error) {
      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json({
      success: true,
      shortCode,
      shortUrl:
        process.env
          .NEXT_PUBLIC_BASE_URL +
        "/" +
        shortCode,
    });
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