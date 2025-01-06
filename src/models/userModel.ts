import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

export class UserModel extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public cpf!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

UserModel.init({
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
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'users',
});