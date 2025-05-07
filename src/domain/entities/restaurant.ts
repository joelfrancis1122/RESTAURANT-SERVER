// src/domain/entities/restaurant.ts
export interface Restaurant {
    id?: number;
    name: string;
    address: string;
    contact: string;
    createdAt?: Date;
    updatedAt?: Date;
  }