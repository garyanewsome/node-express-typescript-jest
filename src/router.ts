import { Router } from 'express';
import { index } from './routes/index';


const router = Router();

router.get('/', index);

export default router;
