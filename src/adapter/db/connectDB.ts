// adapter/db/connectDB.ts
import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";

dotenv.config();

const sql = neon(process.env.DATABASE_URL!);

export const testConnection = async (): Promise<void> => {
  try {
    console.log("⌛ Testing Neon database connection...");

    const result = await sql`SELECT NOW() as current_time`;
    console.log("✅ Neon DB connection successful! Current time:", result[0].current_time);
  } catch (error) {
    console.error("❌ Neon DB connection failed:");
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      });
    }

    console.error("\n🔧 Troubleshooting steps:");
    console.error("1. Ensure your Neon project is active.");
    console.error("2. Check DATABASE_URL in your .env file.");
    console.error("3. Make sure your IP access settings in Neon allow this connection.");
    throw error;
  }
};

export default sql; // You can import this anywhere for queries
