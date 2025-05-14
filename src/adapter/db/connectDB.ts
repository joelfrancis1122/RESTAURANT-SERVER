import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

export const testConnection = async (): Promise<void> => {
  try {
    console.log('⌛ Testing database connection...');
    
    const result = await prisma.$queryRaw`SELECT NOW() as current_time`;
    console.log('✅ Database connection successful! Current server time:', result);

  } catch (error) {
    console.error('❌ Database connection failed:');
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
      });
    }

    console.error('\n🔧 Troubleshooting steps:');
    console.error('1. Ensure PostgreSQL is running (e.g. sudo service postgresql status)');
    console.error('2. Check your DATABASE_URL in .env');
    console.error('3. Confirm that the database exists and user credentials are correct');
    throw error;
  }
};

export default prisma;
