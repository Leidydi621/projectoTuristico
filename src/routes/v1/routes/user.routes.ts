import { userController } from '@modules/builder';
import { Router } from 'express';
import catchAsync from 'utils/catchAsyn';

const userRoutes = Router();

userRoutes.post('/', catchAsync(userController.createUser));

export default userRoutes;
