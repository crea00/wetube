import express from 'express';
import routes from '../routes';
import { 
  userDetail,
  editProfiile,
  changePassword,
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.userdetail, userDetail);
userRouter.get(routes.editprofile, editProfiile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
