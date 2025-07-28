import { Router } from 'express';
import catchAsync from 'utils/catchAsyn';
import userController from '../controller/userBuilderController';

const userRoutes = Router();

userRoutes.post('/', catchAsync(userController.createUser));

export default userRoutes;
