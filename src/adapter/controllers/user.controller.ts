import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import { IUseCase } from "@domain/usecase/IUserUseCase";

@injectable()
export default class UserController {
  constructor(
    @inject("IUseCase") private _useCase: IUseCase

  ) { }

  listRestaurant = async (req: Request, res: Response) => {
    try {
      const restaurants = await this._useCase.getRestaurants();
       res.status(200).json(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
       res.status(500).json({ message: "Server error" });
    }
  };


  createRestaurant = async (req: Request, res: Response) => {
    try {
      const { name, address, contact } = req.body
      const data = await this._useCase.create(name, address, contact)
      if (data) {
        console.log("worked",data)
      }
      res.status(200).json(data)
    } catch (error) {
      console.log(error)
    }
  }
  updateRestaurant = async (req: Request, res: Response) => {
    try {
      const { name, address, contact } = req.body
      const id = req.query.id
      const data = await this._useCase.update(name, address, contact,id as string)
      if (data) {
        console.log("worked",data)
      }
      res.status(200).json(data)
    } catch (error) {
      console.log(error)
    }
  }

  deleteRestaurant = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const deleted = await this._useCase.delete(id);
      if (deleted) {
         res.status(200).json({ message: "Restaurant deleted successfully" });
      } else {
         res.status(404).json({ message: "Restaurant not found" });
      }
    } catch (error) {
      console.error(error);
       res.status(500).json({ message: "Internal server error" });
    }
  }

} 