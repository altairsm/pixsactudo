import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();
const userController = new UserController();

export const setUserRoutes = (app) => {
    app.post('/users', userController.createUser);
    app.get('/users', userController.getUsers);
};