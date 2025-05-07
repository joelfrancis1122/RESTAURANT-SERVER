import { Sequelize, Options } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

interface CustomOptions extends Options {
  dialectOptions?: {
    ssl?: boolean;
    connectTimeout?: number;
  };
}

const DB_CONFIG: CustomOptions = {
  database: process.env.DB_NAME!,
  username: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT!),
  dialect: 'postgres',
  logging: console.log,
  dialectOptions: {
    ssl: process.env.DB_SSL === 'true',
    connectTimeout: 30000
  },
  retry: {
    max: 5,
    match: [/ECONNREFUSED/]
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

const sequelize = new Sequelize(DB_CONFIG);

export const testConnection = async (): Promise<void> => {
  try {
    console.log('⌛ Testing database connection...');
    await sequelize.authenticate();
    
    // Test a simple query
    const [result] = await sequelize.query('SELECT NOW() as current_time');
    console.log('✅ Database connection successful! Current server time:', result);
  } catch (error) {
    console.error('❌ Database connection failed:');
    
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
    }

    console.error('\n🔧 Troubleshooting steps:');
    console.error('1. Verify PostgreSQL is running (sudo service postgresql status)');
    console.error(`2. Check connection details: ${DB_CONFIG.host}:${DB_CONFIG.port}`);
    console.error('3. Ensure database exists: psql -U postgres -c "CREATE DATABASE restaurant_db;"');
    console.error('4. Confirm pg_hba.conf allows 127.0.0.1 connections');
    
    throw error;
  }
};

export default sequelize;