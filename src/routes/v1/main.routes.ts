import { Router } from 'express';
import authRoutes from './routes/auth.rouest';
import userRoutes from './routes/user.routes';

const mainRoutes = Router();

// * Import all module routes here

mainRoutes.use('/user', userRoutes);
mainRoutes.use('/auth', authRoutes);

export default mainRoutes;
