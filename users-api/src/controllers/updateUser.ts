//Desc creating a user
//@POST /api/v/users
//@Access Public

import asyncHandler from "../middlewares/async";
import { UserFunction, UserRequest } from "../types/user";

const createUpdateUser =  (updateUser:UserFunction) =>{
    return asyncHandler(async (req:UserRequest,res,next)=>{
        const result = await updateUser(req.body,next);
        res.status(200).json(result);
    });
}

export default createUpdateUser;