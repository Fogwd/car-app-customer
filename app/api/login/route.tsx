import pool from "@/lib/db";
import bcrypt from "bcrypt";

import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
  try {
    const { email, password } = JSON.parse(req.body);
    const client = await pool.connect();

    // Fetch user from the database
    const result = await client.query(
      "SELECT * FROM manager WHERE email = $1",
      [email],
    );
    client.release();

    if (result.rows.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found" }),
        { status: 401 },
      );
    }

    const user = result.rows[0];

    // Compare password (Assuming passwords are hashed with bcrypt)
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return new Response(
        JSON.stringify({ success: false, message: "Incorrect password" }),
        { status: 401 },
      );
    }

    // Return user data (exclude password)
    return new Response(
      JSON.stringify({
        success: true,
        user: { id: user.id, name: user.name, email: user.email },
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Login error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 },
    );
  }
}
