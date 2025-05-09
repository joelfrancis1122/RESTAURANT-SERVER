import express from "express";
import UserController  from "adapter/controllers/user.controller";
import container from "config/inversify";


const router = express.Router();

const controller=container.get<UserController>(UserController)

router.post("/",controller.createRestaurant);

export default router;