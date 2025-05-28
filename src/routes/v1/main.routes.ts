import userRoutes from '@modules/users/infrastructure/http/routes/user.routes';
import { Router } from 'express';

const mainRoutes = Router();

// * Import all module routes here

mainRoutes.use('/user', userRoutes);

export default mainRoutes;
