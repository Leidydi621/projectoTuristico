import { Router } from 'express';
import userController from '../controller/userBuilderController';

const userRoutes = Router();

userRoutes.post('/', userController.createUser);

export default userRoutes;
