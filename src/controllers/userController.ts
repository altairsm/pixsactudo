import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const userData = req.body;
            const newUser = await this.userService.createUser(userData);
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async getUsers(req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.userService.getUsers();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async updateUser(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id;
            const userData = req.body;
            const updatedUser = await this.userService.updateUser(userId, userData);
            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id;
            await this.userService.deleteUser(userId);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export default UserController;