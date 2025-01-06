import { DiaristModel } from '../models/diaristModel';

export class DiaristService {
    private diaristModel: DiaristModel;

    constructor() {
        this.diaristModel = new DiaristModel();
    }

    async createDiarist(data: any) {
        return await this.diaristModel.create(data);
    }

    async getDiaristById(id: string) {
        return await this.diaristModel.findById(id);
    }

    async updateDiarist(id: string, data: any) {
        return await this.diaristModel.update(id, data);
    }

    async deleteDiarist(id: string) {
        return await this.diaristModel.delete(id);
    }

    async getAllDiarists() {
        return await this.diaristModel.findAll();
    }
}