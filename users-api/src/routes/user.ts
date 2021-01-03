import { create } from 'domain';
import express from 'express';
import {createUser,updateUser,getUserById,getUsers} from '../controllers/user';
const userRouter = express.Router();

userRouter.route("/:id")
.delete()
.post(getUserById);

userRouter.route("/")
.put(updateUser)  
.get(getUsers)
.post(createUser);

export default userRouter;