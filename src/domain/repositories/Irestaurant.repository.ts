import { Restaurant } from "../entities/restaurant";

export interface IRestaurantRepository {
  save(restaurant: Restaurant): Promise<Restaurant|null>;
  findAll(): Promise<Restaurant[]|null>;
  update(restaurant: Restaurant): Promise<Restaurant | null>;
  delete(id: string): Promise<boolean>;
}
