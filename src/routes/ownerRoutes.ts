import { Router } from 'express';
import OwnerController from '../controllers/ownerController';

const router = Router();
const ownerController = new OwnerController();

router.post('/owners', ownerController.createOwner);
router.get('/owners/:id', ownerController.getOwner);
router.put('/owners/:id', ownerController.updateOwner);
router.delete('/owners/:id', ownerController.deleteOwner);

export default router;