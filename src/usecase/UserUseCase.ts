import { Restaurant } from "@domain/entities/restaurant";
import { IRestaurantRepository } from "@domain/repositories/Irestaurant.repository";
import { IUseCase } from "@domain/usecase/IUserUseCase";
import { injectable, inject } from "inversify";

@injectable()
export class UseCase implements IUseCase {
  constructor(
    @inject("IRestaurantRepository")
    private _repository: IRestaurantRepository
  ) { }

  create = async (name: string, address: string, contact: string): Promise<boolean> => {
    const restaurant: Restaurant = {
      name,
      address,
      contact,
    };

    return await this._repository.save(restaurant);
  };

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  async getRestaurants(): Promise<Restaurant[]> {
    return await this._repository.findAll();
  }

  update = async (name: string, address: string, contact: string, id: string): Promise<Restaurant | null> => {
    const restaurant: Restaurant = { name, address, contact, id }
    return await this._repository.update(restaurant)
  }
  delete = async (id: string): Promise<boolean> => {
    return await this._repository.delete(id);
  };

}


