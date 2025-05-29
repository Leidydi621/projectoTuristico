import { Router } from 'express';
import userController from '../controller/userBuilderController';

const userRoutes = Router();

userRoutes.post('/', userController.createUser);
userRoutes.post('/:idUser/guide', userController.createGuide);
userRoutes.get('/:id', userController.getUserWithGuide);

export default userRoutes;
