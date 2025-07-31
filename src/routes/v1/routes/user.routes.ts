import { userController } from '@modules/builder';
import { Router } from 'express';
import catchAsync from 'utils/catchAsyn';


const userRoutes = Router();

userRoutes.post('/', catchAsync(userController.createUser));
userRoutes.post('/guide', catchAsync(userController.createGuide));

export default userRoutes;
