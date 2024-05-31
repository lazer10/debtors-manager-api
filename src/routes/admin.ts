import { Router } from 'express';
import AdminController from '../controllers/admin';
import * as Validations from '../middlewares/validation/admin';

const router = Router();

// Add validation middleware
router.post('/login', Validations.adminLogin, AdminController.adminLogin);

export default router;