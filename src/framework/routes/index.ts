import userRoutes from "./route/user.route";

import express from "express";
const router = express.Router();

router.use("/restaurants", userRoutes);



export default router