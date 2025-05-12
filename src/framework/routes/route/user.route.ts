import express from "express";
import UserController  from "../../../adapter/controllers/user.controller";
// import container from "config/inversify";
import container from '../../../config/inversify';

const router = express.Router();

const controller=container.get<UserController>(UserController)

router.get("/",controller.listRestaurant);
router.post("/",controller.createRestaurant);
router.put("/",controller.updateRestaurant);
router.delete("/:id",controller.deleteRestaurant);

export default router;