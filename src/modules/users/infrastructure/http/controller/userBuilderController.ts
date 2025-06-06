import UserServiceImp from '@modules/users/application/service/UserServiceImp';
import UserRepositoryImp from '../../percistence/UserRepositoryImp';
import UserController from './UserController';

const userRepository = new UserRepositoryImp();
const userServices = new UserServiceImp(userRepository);
const userController = new UserController(userServices);

export default userController;
