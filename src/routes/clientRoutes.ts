import { Router } from 'express';
import ClientController from '../controllers/clientController';

const router = Router();
const clientController = new ClientController();

// Define routes for client-related requests
router.post('/clients', clientController.createClient);
router.get('/clients', clientController.getClients);
router.get('/clients/:id', clientController.getClientById);
router.put('/clients/:id', clientController.updateClient);
router.delete('/clients/:id', clientController.deleteClient);

export default router;