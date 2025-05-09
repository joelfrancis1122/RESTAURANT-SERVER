import { Restaurant } from "@domain/entities/restaurant";
import { IRestaurantRepository } from "@domain/repositories/Irestaurant.repository";
import { IUseCase } from "@domain/service/IUserUseCase";
import { TYPES } from "config/types";
import { inject, injectable } from "inversify";

@injectable()

export class UseCase implements IUseCase{
  constructor(
    @inject("IRestaurantRepository")
     private _repository: IRestaurantRepository
  ) {}


  

    ambu=(email:string)=>{
        return "ambu worked"
    }

//   async execute(input: Omit<Restaurant, "id">): Promise<Restaurant> {
//     // Validate business rules
//     if (!input.name) throw new Error("Restaurant name is required");
//     if (!input.address) throw new Error("Address is required");

//     // const restaurant = new Restaurant(
//     //   this.generateId(),
//     //   input.name,
//     //   input.address,
//     //   input.cuisineType
//     // );

//    // return this.repository.createRestaurant(restaurant);
//   }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}