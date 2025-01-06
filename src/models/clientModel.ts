import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

class ClientModel extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public cpf!: string;
  public cnpj!: string;
  public companyName!: string;
  public pixKey!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ClientModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pixKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'clients',
  }
);

export default ClientModel;