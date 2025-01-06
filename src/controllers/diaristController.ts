import { Request, Response } from 'express';
import DiaristService from '../services/diaristService';

class DiaristController {
    private diaristService: DiaristService;

    constructor() {
        this.diaristService = new DiaristService();
    }

    public async addDiarist(req: Request, res: Response): Promise<void> {
        try {
            const diaristData = req.body;
            const newDiarist = await this.diaristService.createDiarist(diaristData);
            res.status(201).json(newDiarist);
        } catch (error) {
            res.status(500).json({ message: 'Error adding diarist', error });
        }
    }

    public async getDiarists(req: Request, res: Response): Promise<void> {
        try {
            const diarists = await this.diaristService.getAllDiarists();
            res.status(200).json(diarists);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving diarists', error });
        }
    }

    public async updateDiarist(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const updatedData = req.body;
            const updatedDiarist = await this.diaristService.updateDiarist(id, updatedData);
            res.status(200).json(updatedDiarist);
        } catch (error) {
            res.status(500).json({ message: 'Error updating diarist', error });
        }
    }

    public async deleteDiarist(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await this.diaristService.deleteDiarist(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting diarist', error });
        }
    }
}

export default DiaristController;