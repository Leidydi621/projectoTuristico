import UserServiceImp from '@modules/users/application/service/UserServiceImp';
import UserController from './UserController';
import UserRepositoryImp from '../../percistence/UserRepositoryImp';

const userRepository = new UserRepositoryImp();
const userServices = new UserServiceImp(userRepository);
const userController = new UserController(userServices);

export default userController;
