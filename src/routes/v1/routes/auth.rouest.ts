import auth from '@middlewares/authWithCookie';
import { authController } from '@modules/builder';
import { Router } from 'express';
import catchAsync from 'utils/catchAsyn';

const authRoutes = Router();

authRoutes.post('/login', catchAsync(authController.login));
authRoutes.get('/logout', catchAsync(authController.logout));
authRoutes.get('/refreshToken', auth.refresh, catchAsync(authController.refreshToken));

export default authRoutes;
