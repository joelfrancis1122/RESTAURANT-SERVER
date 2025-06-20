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

  create = async (name: string, address: string, contact: string): Promise<Restaurant|null> => {
    const restaurant: Restaurant = {
      name,
      address,
      contact,
    };

    return await this._repository.save(restaurant);
  };



  async getRestaurants(): Promise<Restaurant[]> {
    const restaurants = await this._repository.findAll();
    return restaurants ?? [];
  }

  update = async (name: string, address: string, contact: string, id: string): Promise<Restaurant[] | null> => {
    const restaurant: Restaurant = { name, address, contact, id };
    // Assuming _repository.update returns a single Restaurant, wrap it in an array if not null
    const updated = await this._repository.update(restaurant);
    return updated ? [updated] : null;
  }
  delete = async (id: string): Promise<boolean> => {
    return await this._repository.delete(id);
  };

}


