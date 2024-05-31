import { Router } from 'express';
import admin from './admin';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).send('Debtors Manager API');
  });

router.use('/admin', admin);

export default router;