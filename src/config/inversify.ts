import { IRestaurantRepository } from "@domain/repositories/Irestaurant.repository";
import { IUseCase } from "@domain/service/IUserUseCase";
import  UserController from "adapter/controllers/user.controller";
import { RestaurantRepository } from "adapter/repositories/restaurant.repository";
import { Container } from "inversify";
import { UseCase } from "usecase/UserUseCase";



const container = new Container()

container.bind<IUseCase>("IUseCase").to(UseCase)
container.bind<UserController>(UserController).toSelf()

container.bind<IRestaurantRepository >("IRestaurantRepository").to(RestaurantRepository)

export default container