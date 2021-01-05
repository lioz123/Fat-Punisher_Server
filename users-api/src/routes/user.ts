import express from 'express';

import {getById,getMany,create,update} from '../controllers';
const userRouter = express.Router();

userRouter.route("/:id")
.delete()
.get(getById);

userRouter.route("/")
.put(update)  
.get(getMany)
.post(create);

export default userRouter;