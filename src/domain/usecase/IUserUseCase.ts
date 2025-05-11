import { Restaurant } from "@domain/entities/restaurant";

export interface IUseCase {
    create(name:string,addres:string,contact:string):any
    getRestaurants():any
    update(name:string, address:string, contact:string,id:string):any
    delete(id:string):any
  }