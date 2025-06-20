import { Restaurant } from "@domain/entities/restaurant";

export interface IUseCase {
    create(name:string,addres:string,contact:string): Promise<Restaurant|null>
    getRestaurants(): Promise<Restaurant[]|null>
    update(name:string, address:string, contact:string,id:string): Promise<Restaurant[]|null>
    delete(id:string): Promise<boolean>
  }