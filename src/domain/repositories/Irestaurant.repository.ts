import { Restaurant } from "../entities/restaurant";

export interface IRestaurantRepository {
  save(restaurant: Restaurant): Promise<boolean>;
  findAll(): any
  update(restaurant: Restaurant): Promise<Restaurant | null>;
  delete(id: string): Promise<boolean>;

}
