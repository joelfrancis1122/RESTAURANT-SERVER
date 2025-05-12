import userRoutes from "./route/user.route";

import express from "express";
const router = express.Router();

// Use userRoutes for the '/users' path
router.use("/restaurants", userRoutes);

export default router;
