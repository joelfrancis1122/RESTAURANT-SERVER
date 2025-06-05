import { Restaurant } from "@domain/entities/restaurant";

export interface IUseCase {
    create(name: string, address: string, contact: string): Promise<Restaurant>;
    getRestaurants(): Promise<Restaurant[]>;
    update(name: string, address: string, contact: string, id: string): Promise<Restaurant>;
    delete(id: string): Promise<null>;
}