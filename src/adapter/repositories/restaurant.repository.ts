import { IRestaurantRepository } from "@domain/repositories/Irestaurant.repository";
import { Restaurant } from "../../domain/entities/restaurant";
import { injectable } from "inversify";

@injectable()
export class RestaurantRepository implements IRestaurantRepository {
 
    constructor(){}


}