import bcrypt from "bcrypt";
import pool from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password } = await req.json();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const client = await pool.connect();
    await client.query(
      "INSERT INTO manager (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
      [firstName, lastName, email, hashedPassword],
    );
    client.release();

    return new Response(
      JSON.stringify({ success: true, message: "User registered" }),
      { status: 201 },
    );
  } catch (error) {
    console.error("Signup error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 },
    );
  }
}
