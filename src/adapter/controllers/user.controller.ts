import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import { IUseCase } from "@domain/service/IUserUseCase";

@injectable()
export default class UserController {
  constructor(
    @inject("IUseCase") private _useCase:IUseCase
   
  ) {}


  createRestaurant = async (req: Request, res: Response) => {
    try {
       
      const email="llgldls"
      const worked=this._useCase.ambu(email)
      if(worked){
        console.log(worked)
      }

    } catch (error) {
      console.log(error)
    }
  }
}