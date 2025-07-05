// adapter/db/connectDB.ts
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const prisma = new PrismaClient();

export const testConnection = async (): Promise<void> => {
  try {
    console.log("⌛ Testing database connection...");

    const result = await prisma.$queryRaw`SELECT NOW() as current_time`;
    console.log("✅ Database connection successful! Current server time:", result);
  } catch (error) {
    console.error("❌ Database connection failed:");
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      });
    }
    

    console.error("\n🔧 Troubleshooting steps:");
    console.error("1. Ensure your Neon project is active.");
    console.error("2. Check your DATABASE_URL in .env.");
    console.error("3. Confirm the database and tables exist.");
    throw error;
  }
};

export default prisma;
