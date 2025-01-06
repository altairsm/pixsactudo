import { Router } from 'express';
import DiaristController from '../controllers/diaristController';

const router = Router();
const diaristController = new DiaristController();

router.post('/', diaristController.createDiarist);
router.get('/', diaristController.getAllDiarists);
router.get('/:id', diaristController.getDiaristById);
router.put('/:id', diaristController.updateDiarist);
router.delete('/:id', diaristController.deleteDiarist);

export default router;