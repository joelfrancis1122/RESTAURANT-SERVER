// src/adapter/db/restaurant.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from './connectDB';
import { Restaurant } from '../../domain/entities/restaurant';

class RestaurantModel extends Model<Restaurant> implements Restaurant {
  public id!: number;
  public name!: string;
  public address!: string;
  public contact!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

RestaurantModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Restaurant',
    tableName: 'restaurants',
    timestamps: true,
    underscored: true,
  }
);

export default RestaurantModel;