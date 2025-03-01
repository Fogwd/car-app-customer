import pool from "@/lib/db";

export async function GET() {
  try {
    console.log("🔹 Connecting to PostgreSQL...");
    const client = await pool.connect();

    console.log("✅ Connected! Running test query...");
    const result = await client.query('SELECT NOW() AS current_time');
    client.release();

    console.log("✅ Query successful:", result.rows[0]);
    return new Response(JSON.stringify({ success: true, time: result.rows[0].current_time }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("❌ Database connection error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
