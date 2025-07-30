
import AuthService from "./auth/application/AuthService";
import AuthController from "./auth/infrastructure/http/controller/authController";
import UserPublicServiceImp from "./users/application/service/UserPublicServiceImp";
import UserServiceImp from "./users/application/service/UserServiceImp";
import UserController from "./users/infrastructure/http/controller/UserController";
import UserRepositoryImp from "./users/infrastructure/percistence/UserRepositoryImp";

// * Construcción de los repositorios
const userRepository = new UserRepositoryImp();

// *  construcción de los servicios publicos
const userPublicService = new UserPublicServiceImp(userRepository)

// * construción de los servicios
const userServices = new UserServiceImp(userRepository);
const authService = new AuthService(userPublicService)

// * construcción de los controlladores
const userController = new UserController(userServices);
const authController = new AuthController(authService)


export {
  authController, userController
};
