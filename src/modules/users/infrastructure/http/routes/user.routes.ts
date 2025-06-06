import { Router } from 'express';
import userController from '../controller/userBuilderController';

const userRoutes = Router();

userRoutes.get('/:id', userController.getUser);
userRoutes.post('/', userController.createUser);
userRoutes.post('/:idUser/guide', userController.createGuide);

export default userRoutes;
