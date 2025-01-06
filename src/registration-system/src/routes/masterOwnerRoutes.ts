import { Router } from 'express';
import MasterOwnerController from '../controllers/masterOwnerController';

const router = Router();
const masterOwnerController = new MasterOwnerController();

export function setMasterOwnerRoutes(app) {
    app.use('/api/master-owner', router);
    
    router.post('/', masterOwnerController.createMasterOwner.bind(masterOwnerController));
    router.get('/:id', masterOwnerController.getMasterOwner.bind(masterOwnerController));
}