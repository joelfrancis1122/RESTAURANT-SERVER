import express from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import route from "../routes/index";

dotenv.config();

const app = express();
app.use(cors()); 

// const corsOptions: CorsOptions = {
//   origin: ["http://localhost:5000"],
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS","PATCH"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// };

app.use(express.json());
app.use("/", route);

export default app;


