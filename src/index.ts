import { testConnection } from './adapter/db/connectDB';
import application from './framework/web/app';

const app = application;

const initializeServer = async () => {
  try {
    console.log('🚀 Starting server initialization...');
    
    await testConnection();
    
    const PORT = process.env.PORT;
    const server = app.listen(PORT, () => {
      console.log(`\n🟢 Server running on http://localhost:${PORT}`);
    });

    // Graceful shutdown
    process.on('SIGTERM', () => {
      console.log('SIGTERM received. Shutting down gracefully...');
      server.close(() => {
        console.log('Server closed');
        process.exit(0);
      });
    });

  } catch (error) {
    console.error('\n🔴 Failed to start server:');
    if (error instanceof Error) {
      console.error(error.message);
    }
    process.exit(1);
  }
};

initializeServer();