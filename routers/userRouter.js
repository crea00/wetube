import express from 'express';
import routes from '../routes';

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send('Users'));
userRouter.get(routes.userdetail, (req, res) => res.send('User Detail'));
userRouter.get(routes.editprofile, (req, res) => res.send('Edit Profile'));
userRouter.get(routes.changePassword, (req, res) => res.send('Change Password'));

export default userRouter;
