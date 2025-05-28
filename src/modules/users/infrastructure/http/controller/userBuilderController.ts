import UserServiceImp from "@modules/users/application/service/UserServiceImp";
import SequelizeUserRepositoryImp from "../../percistence/SequelizeUserRepositoryImp";
import UserController from "./UserController";


const userRepository = new SequelizeUserRepositoryImp();
const userServices = new UserServiceImp(userRepository);
const userController = new UserController(userServices);

export default userController;