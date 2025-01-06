import { OwnerModel } from '../models/ownerModel';

export class OwnerService {
    private ownerModel: OwnerModel;

    constructor() {
        this.ownerModel = new OwnerModel();
    }

    async createOwner(ownerData: any) {
        // Logic to create a new owner
        return await this.ownerModel.create(ownerData);
    }

    async getOwnerById(ownerId: string) {
        // Logic to retrieve an owner by ID
        return await this.ownerModel.findById(ownerId);
    }

    async updateOwner(ownerId: string, ownerData: any) {
        // Logic to update an existing owner
        return await this.ownerModel.update(ownerId, ownerData);
    }

    async deleteOwner(ownerId: string) {
        // Logic to delete an owner
        return await this.ownerModel.delete(ownerId);
    }
}