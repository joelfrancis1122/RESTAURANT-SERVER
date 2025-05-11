import { PrismaClient } from "@prisma/client";
import { injectable } from "inversify";
import { Restaurant } from "@domain/entities/restaurant";
import { IRestaurantRepository } from "@domain/repositories/Irestaurant.repository";

const prisma = new PrismaClient();

@injectable()
export class RestaurantRepository implements IRestaurantRepository {
  async save(restaurant: Restaurant): Promise<boolean> {
    const odi = await prisma.restaurant.create({
      data: {
        name: restaurant.name,
        address: restaurant.address,
        contact: restaurant.contact.toString(),
      },
    });
    console.log(odi, "joell")

    return true;
  }

  async findAll(): Promise<Restaurant[]> {
    const restaurants = await prisma.restaurant.findMany();
    return restaurants.map((r) => ({
      id: r.id,
      name: r.name,
      address: r.address,
      contact: r.contact,
    }));
  }

  async update(restaurant: Restaurant): Promise<Restaurant | null> {
    const updated = await prisma.restaurant.update({
      where: { id: restaurant.id },
      data: {
        name: restaurant.name,
        address: restaurant.address,
        contact: restaurant.contact,
      },
    });

    return {
      id: updated.id,
      name: updated.name,
      address: updated.address,
      contact: updated.contact,
    };
  }
  async delete(id: string): Promise<boolean> {
    try {
      await prisma.restaurant.delete({
        where: { id },
      });
      return true;
    } catch (error: any) {
      if (error.code === "P2025") {
        return false;
      }
      throw error;
    }
  }
}
