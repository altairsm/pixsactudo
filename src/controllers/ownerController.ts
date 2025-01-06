import { Request, Response } from 'express';
import OwnerService from '../services/ownerService';

class OwnerController {
    private ownerService: OwnerService;

    constructor() {
        this.ownerService = new OwnerService();
    }

    public async createOwner(req: Request, res: Response): Promise<void> {
        try {
            const ownerData = req.body;
            const newOwner = await this.ownerService.createOwner(ownerData);
            res.status(201).json(newOwner);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getOwner(req: Request, res: Response): Promise<void> {
        try {
            const ownerId = req.params.id;
            const owner = await this.ownerService.getOwnerById(ownerId);
            if (owner) {
                res.status(200).json(owner);
            } else {
                res.status(404).json({ message: 'Owner not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async updateOwner(req: Request, res: Response): Promise<void> {
        try {
            const ownerId = req.params.id;
            const updatedData = req.body;
            const updatedOwner = await this.ownerService.updateOwner(ownerId, updatedData);
            res.status(200).json(updatedOwner);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async deleteOwner(req: Request, res: Response): Promise<void> {
        try {
            const ownerId = req.params.id;
            await this.ownerService.deleteOwner(ownerId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default OwnerController;