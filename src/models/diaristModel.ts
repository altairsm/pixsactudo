import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

export class DiaristModel extends Model {
    public id!: number;
    public name!: string;
    public phone!: string;
    public cpf!: string;
    public pixKey!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

DiaristModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    pixKey: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'diarists',
});